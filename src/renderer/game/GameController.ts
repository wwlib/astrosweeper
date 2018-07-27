import InputManager from './managers/InputManager';
import BGManager from './managers/BGManager';
import ObjectManager from './managers/ObjectManager';
import FrameTimeManager from './managers/FrameTimeManager';
import ScoreManager from './managers/ScoreManager';
import LevelManager from './managers/LevelManager';
import PowerupManager from './managers/PowerupManager';
import GameTimer from './GameTimer';
import BaseObject from './BaseObject';
import Powerup from './Powerup';
import Debris from './Debris';
import Crystal from './Crystal';
import Ship from './Ship';

export default class GameController {

    public ready: boolean = false;

    private gameTimeline: any;
    private ship: Ship;
    private pause:Boolean;
    private levelPauseTimer:GameTimer;
    private powerupTimer:GameTimer;
    private debrisTimer:GameTimer;
    private crystalTimer:GameTimer;
    private inputTimer:GameTimer;

    constructor(gameTimeline: any) {
        this.gameTimeline = gameTimeline;
        InputManager.init();

        this.levelPauseTimer = new GameTimer();
        this.powerupTimer = new GameTimer();
        this.debrisTimer = new GameTimer();
        this.crystalTimer = new GameTimer();
        this.inputTimer = new GameTimer();
    }

    start(): Promise<any>  {
        return new Promise((resolve: any, reject: any) => {
            console.log("start");
            BGManager.initialize(null); //(this.gameTimeline.bg);
            ObjectManager.createShip(300, 340)
                .then((ship: Ship) => {
                    console.log(`ship: `, ship);
                    this.ship = ship;
                    // console.log("start:ShipObj: " + this.ship);
                    // this.ship.reset();
                    this.ship.mc.gotoAndStop(0);
                    this.ship.mc.ship_anim.gotoAndStop('idle');
                    this.ship.mc.ship_shield.visible = false;
                    this.ship.mc.hit_target.visible = false;
                    this.ready = true;

                    // HudManager.initialize(gameTimeline);
                    // HudManager.setHudVisibility(true);

                    // soundtrackAudio.playTrack("main_loop", true);

                    // addEventListener ( 'enterFrame', mainLoop);

                    resolve(this.ship);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }


    mainLoop(): void  {

		FrameTimeManager.calculateFrameTime();
		InputManager.processInput();
		this.handleInput();

		if (!this.pause) {

			if (this.checkGameOver()) {
				//gameTimeline.gotoAndPlay("gameOver");
			} else if (this.checkLevelComplete() && !this.ship.over) {
				//gameTimeline.gotoAndPlay("levelComplete");

			} else {
				this.moveObjects("objects");
				this.moveObjects("bullets");
				this.ship.move();
				this.checkCollision("objects", "bullets");
				this.checkShipCollision("objects");
				BGManager.sync(this.ship);
			}
			// HudManager.update();
			this.spawnPowerups();
			this.spawnDebris();
			this.spawnCrystals();
		}
	}

	checkLevelComplete(): boolean {

		if (ScoreManager.hits >= LevelManager.getTargetHits()) return true;

		return false;
	}

	checkGameOver(): boolean {

		if (ScoreManager.lives <= 0) {
			this.ship.over = true;
		}
		return !this.ship.alive;
	}

    handleInput():void  {
        if (InputManager.inputState.get(InputManager.QUIT)) {
            this.gameTimeline.gotoAndPlay("gameOver");
        }

        if (InputManager.inputState.get(InputManager.ROTATE_LEFT)) {
            this.ship.rotate("left");
        }

        if (InputManager.inputState.get(InputManager.ROTATE_RIGHT)) {
            this.ship.rotate("right");
        }

        if (InputManager.inputState.get(InputManager.FORWARD)) {
            this.ship.thrust(1);
        } else if (InputManager.inputState.get(InputManager.BACK)) {
            this.ship.thrust(-1);
        } else {
            this.ship.thrustOff();
        }

        if (InputManager.inputState.get(InputManager.SHOOT)) {
            this.ship.shoot();
        }

        if (InputManager.inputState.get(InputManager.USE_POWERUP)) {
            PowerupManager.deactivatePowerup();
        }

        if (InputManager.inputState.get(InputManager.XTRA)) {
            if (this.inputTimer.milliseconds() > 250) {
                this.pause = !this.pause;
                FrameTimeManager.frameTimeTimer.restartTimer();
                this.inputTimer.restartTimer();
                ScoreManager.lives = ScoreManager.MAX_LIVES;
            }
        }
    }

    moveObjects(array_id: string):void {

        var thisArray: any[] = ObjectManager.arrays[array_id];
        for (var i: number=0; i < thisArray.length; i++) {

            var thisObject: BaseObject = thisArray[i] as BaseObject;
            if (thisObject.alive) {
                thisObject.move();
            } else {
                thisObject.destroy();
                thisObject = null;
                ObjectManager.removeObject(array_id, i);
            }
        }
    }

    checkShipCollision(object_array_id: string):void {

        var objectArray: any[] = ObjectManager.arrays[object_array_id];

        for (var i: number=0; i < objectArray.length; i++) {

            var object:BaseObject = objectArray[i] as BaseObject;
            if (object.alive) {
                if (this.ship.mc.hit_target.hitTestObject(object.mc)) {
                    if (object instanceof Powerup){
                        if (PowerupManager.activePowerup == null) {
                            PowerupManager.activatePowerup(object as Powerup);
                            object.alive = false;
                            object.hit(object);
                            // effectsAudio.playSound("powerup", false);
                        }
                    } else {
                        if (!this.ship.shieldOn) {
                            ScoreManager.lives -= 1;
                            object.alive = false;
                            this.ship.bounce(object);
                            // effectsAudio.playSound("hit", false);
                        }
                    }
                }
            }
        }
    }

    checkCollision(	object_array_id: string,
                                    projectile_array_id: string):void {

        var objectArray: any[] = ObjectManager.arrays[object_array_id];
        var projectileArray: any[] = ObjectManager.arrays[projectile_array_id];

        for (var i: number=0; i < objectArray.length; i++) {
            for (var j: number=0; j < projectileArray.length; j++) {

                var object:BaseObject = objectArray[i] as BaseObject;
                var projectile:BaseObject = projectileArray[j] as BaseObject;

                if (projectile.alive) {
                    if (projectile.mc.hit_target.hitTestObject(object.mc.hit_target)) {
                        ScoreManager.updateLevelScore(100);
                        object.alive = false;
                        projectile.alive = false;
                        if (object instanceof Powerup){
                            object.die();
                            // effectsAudio.playSound("powerupDie", false);
                        } else if (object instanceof Debris) {
                            // ObjectManager.splitDebris(object as Debris, object_array_id);
                            ScoreManager.hits +=1;
                            // effectsAudio.playSound("explode", false);
                        } else {
                            // effectsAudio.playSound("explode", false);
                        }
                    }
                }
            }
        }
    }

    destroyObjects(array_id: string):void {

        var thisArray: any[] = ObjectManager.arrays[array_id];
        for (var i: number=0; i < thisArray.length; i++) {

            var thisObject:BaseObject = thisArray[i] as BaseObject;
            thisObject.destroy();
            thisObject = null;
        }
        ObjectManager.resetArray(array_id);
    }

    spawnPowerups():void {

        if (this.powerupTimer.milliseconds() > LevelManager.getPowerupInterval()) {

            var coords: any = {};
            LevelManager.setSpawnInfo(coords);
            console.log(`spawning powerup`);
            // var tempPowerup:Powerup = ObjectManager.createPowerup(coords.x,coords.y,coords.type);
            // ObjectManager.addObject(tempPowerup, "objects");
            // tempPowerup.move();
            this.powerupTimer.restartTimer();
        }
    }

    spawnDebris():void {

        if (this.debrisTimer.milliseconds() > LevelManager.getDebrisInterval()) {

            var info: any = {};
            LevelManager.setSpawnInfo(info);
            console.log(`spawning debris`);
            // var tempDebris: Debris = ObjectManager.createDebris(info.x,info.y,info.angle);
            // ObjectManager.addObject(tempDebris, "objects");
            // tempDebris.move();
            this.debrisTimer.restartTimer();
        }
    }

    spawnCrystals():void {

        if (this.crystalTimer.milliseconds() > LevelManager.getCrystalInterval()) {

            var info: any = {};
            LevelManager.setSpawnInfo(info);
            console.log(`spawning crystal`);
            // var tempCrystal: Crystal = ObjectManager.createCrystal(info.x,info.y,info.angle);
            // ObjectManager.addObject(tempCrystal, "objects");
            // tempCrystal.move();
            this.crystalTimer.restartTimer();
        }
    }
}
