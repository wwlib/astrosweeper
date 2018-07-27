import GameTimer from '../GameTimer';
import Powerup from '../Powerup';
import ObjectManager from './ObjectManager';
import ScoreManager from './ScoreManager';

export default class PowerupManager {

	static TOTAL_FRAMES: number = 107;
	static POWERUP_LIFESPAN: number = 10000;
	static POWERUP_DURATION: number = 15000;

	static mc: any;
	static currentFrame: number;
	static elapsedTime: number;
	static powerupTimer:GameTimer;
	static activePowerup:Powerup;

	static initialize(movie_clip: any) {
		PowerupManager.mc = movie_clip;
		PowerupManager.currentFrame = 1;
		PowerupManager.mc.gotoAndStop(PowerupManager.currentFrame);
		PowerupManager.powerupTimer = new GameTimer();
	}

	static reset():void {
		PowerupManager.activePowerup = null;
		PowerupManager.mc.powerUpList.gotoAndPlay("none");
		PowerupManager.mc.gotoAndStop(1);
	}

	static update():void {

		if (PowerupManager.activePowerup != null) {
			PowerupManager.elapsedTime = PowerupManager.powerupTimer.milliseconds();
			PowerupManager.currentFrame = PowerupManager.TOTAL_FRAMES * (PowerupManager.elapsedTime / PowerupManager.POWERUP_DURATION);
			PowerupManager.currentFrame = Math.floor(PowerupManager.currentFrame);

			if (PowerupManager.currentFrame > PowerupManager.TOTAL_FRAMES) PowerupManager.currentFrame = PowerupManager.TOTAL_FRAMES;

			if (PowerupManager.mc.currentFrame != PowerupManager.currentFrame) {
				PowerupManager.mc.gotoAndStop(PowerupManager.currentFrame);
			}
			if (PowerupManager.elapsedTime > PowerupManager.POWERUP_DURATION) {
				PowerupManager.deactivatePowerup();
			}
		}
	}

	static activatePowerup(powerup:Powerup):void {
		PowerupManager.activePowerup = powerup;
		PowerupManager.invoke(PowerupManager.activePowerup.type);
		PowerupManager.powerupTimer.restartTimer();
		PowerupManager.mc.powerUpList.gotoAndPlay(PowerupManager.activePowerup.type);
	}

	static deactivatePowerup():void {
		PowerupManager.revoke(PowerupManager.activePowerup.type);
		PowerupManager.activePowerup = null;
		PowerupManager.mc.powerUpList.gotoAndPlay("none");
		PowerupManager.mc.gotoAndStop(1);
	}

	static invoke(type: string):void {
		switch (type) {
			case ("pu_energy_type"):
				ScoreManager.lives = ScoreManager.MAX_LIVES;
				break;
			case ("pu_multishot_type"):
				ObjectManager.ship.multiShot = true;
				break;
			case ("pu_shield_type"):
				ObjectManager.ship.setShielded(true);
				break;
			case ("pu_tailgun_type"):
				ObjectManager.ship.tailGun = true;
				break;
			default:
				break;
		}
	}

	static revoke(type: string):void {
		switch (type) {
			case ("pu_energy_type"):
				ScoreManager.lives = ScoreManager.MAX_LIVES;
				break;
			case ("pu_multishot_type"):
				ObjectManager.ship.multiShot = false;
				break;
			case ("pu_shield_type"):
				ObjectManager.ship.setShielded(false);
				break;
			case ("pu_tailgun_type"):
				ObjectManager.ship.tailGun = false;
				break;
			default:
				break;
		}
	}
}
