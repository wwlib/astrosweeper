import MathTables from './MathTables';
import GameTimer from './GameTimer';
import BaseObject from './BaseObject';
import VectorMath from './VectorMath';

import FrameTimeManager from './managers/FrameTimeManager';
// import ObjectManager from './managers/ObjectManager';
import BGManager from './managers/BGManager';
// import AudioController from './AudioController';
// import Bullet from './Bullet';


// import clips.mcShip;
// import sounds.sndShoot;
// import sounds.sndThrust;

export default class Ship extends BaseObject {

	public over: boolean;
	public anim: string;
	public animPrev: string;
	public shooting: boolean = false;
	public hit: boolean = false;
	public animDone: boolean = true;

	public shieldOn: boolean = false;
	public thrustOn: boolean = false;
	public shieldPlaying: boolean = false;
	public thrustPlaying: boolean = false;

	public multiShot: boolean = false;
	public tailGun: boolean = false;
	public readyTimer:GameTimer;

	// public shipAudio:AudioController;
	// public soundShoot:sndShoot;
	// public soundThrust:sndThrust;

	public screenCoords: any;

	constructor(x: number, y: number, movie_clip:any, name: string) {
		super(x, y, movie_clip, name);

		//mc.visible = false;
		this.mc.gotoAndStop(1);
		this.mc.ship_anim.owner = this;

		this.screenCoords = VectorMath.newVector(BGManager.SCREEN_ORIGIN.x, BGManager.SCREEN_ORIGIN.y);
		this.mc.x = this.screenCoords.x;
		this.mc.y = this.screenCoords.y;
		this.reset();

		// shipAudio = new AudioController();
		// soundShoot = new sndShoot();
		// soundThrust = new sndThrust();
		// shipAudio.registerSound("thrust", soundThrust);
		// shipAudio.registerSound("shoot", soundShoot);
		this.velocity = {x:0, y:-10};
	}

	setShielded(state: boolean):void {
		this.shieldOn = state;
		this.readyTimer = undefined;
	}

	move(): void {

		this.friction();
		this.updateCoords();
		this.mc.visible = true;
		this.setAnimation();
		this.mc.x = this.screenCoords.x;
		this.mc.y = this.screenCoords.y;

		if (this.readyTimer != undefined && this.readyTimer.milliseconds() > 3000) {
			this.setShielded(false);
			this.readyTimer = undefined;
		}
	}

	friction():void {

		var frictionVector: any = {x:0, y:0};
		var frictionCoefficient: number = -.05;
		VectorMath.copyVector(frictionVector, this.velocity);
		VectorMath.scaleVector(frictionVector, frictionCoefficient);
		VectorMath.addVectors(this.velocity, frictionVector);
	}

	 updateCoords():void {

		VectorMath.addVectors(this.coords, this.velocity);
		VectorMath.inBounds(this.coords, BGManager.shipBounds);

		VectorMath.addVectors(this.screenCoords, this.velocity);
		VectorMath.inBounds(this.screenCoords, BGManager.shipScreenBounds);
	}

	setAnimation():void {

		if (this.animDone){

			//set animation state
			if (this.over) {
				this.anim = "over";
				this.animDone = false;
				this.shieldOn = false;
				this.thrustOn = false;
			} else if (this.hit) {
				this.anim = "hit";
				this.animDone = false;
			} else if (this.shooting) {
				this.anim = "shoot";
				this.animDone = false;
			} else {
				this.anim = "idle";
			}

			//set thrust visibility
			if (this.thrustOn) {
				this.mc.ship_thrust.visible = true;
				if (!this.thrustPlaying) {
					this.mc.ship_thrust.gotoAndPlay("on");
					// this.shipAudio.playSound("thrust", true);
					this.thrustPlaying = true;
				}
			} else {
				this.mc.ship_thrust.visible = false;
				// this.shipAudio.stopSoundNow("thrust");
				this.thrustPlaying = false;
			}

			//set shield visibility
			if (this.shieldOn) {
				if (!this.shieldPlaying) {
					this.mc.ship_shield.visible = true;
					this.mc.ship_shield.gotoAndPlay("on");
					this.shieldPlaying = true;
				}
			} else {
				this.mc.ship_shield.visible = false;
				this.shieldPlaying = false;
			}

			if (this.anim != this.animPrev) {

				this.mc.ship_anim.gotoAndPlay(this.anim);
				this.animPrev = this.anim;
			}
		}
	}

	doneShooting():void {

		this.animDone = true;
		this.shooting = false;
		this.hit = false;
		this.anim = "idle";
		this.animPrev = "";
	}

	reset():void {
		this.over = false;
		this.anim = "idle";
		this.animPrev = "";
		this.shooting = false;
		this.hit = false;
		this.animDone = true;
		this.alive = true;
		this.shieldOn = true;
		this.thrustOn = false;
		this.shieldPlaying = false;
		this.thrustPlaying = false;
		this.mc.visible = false;
		this.mc.ship_shield.visible = false;
		this.mc.ship_thrust.visible = false;
		this.coords.x = 0;
		this.coords.y = 0;
		this.angleIndex = 0;
		this.rotate("right");
		this.multiShot = false;
		this.tailGun = false;
		this.readyTimer = new GameTimer();
	}

	thrust(direction: number):void {

		var acceleration: any = {x:0, y:0};
		var accelerationScalar = 50 * direction;
		accelerationScalar *= FrameTimeManager.getFrameSeconds();
		MathTables.setVelocity(this.angleIndex, accelerationScalar, acceleration)
		VectorMath.addVectors(this.velocity, acceleration);
		this.thrustOn = true;
	}

	thrustOff():void  {
		this.thrustOn = false
	}

	rotate(direction: string):void  {

		if (direction == "right") {
			if (this.angleIndex == 32) {
				this.angleIndex = 1;
			} else {
				this.angleIndex += 1;
			}
		} else if (direction == "left") {
			if (this.angleIndex == 1) {
				this.angleIndex = 32;
			} else {
				this.angleIndex -= 1;
			}
		}
		this.mc.gotoAndStop(this.angleIndex);
	}

	shoot():void  {

		// var tempBullet: Bullet

		if (this.alive && !this.shooting) {
			// this.shipAudio.playSound("shoot", false);
			// this.shooting = true;
			// tempBullet = ObjectManager.createBullet(this.coords.x, this.coords.y, 600, this.angleIndex);
			// ObjectManager.addObject(tempBullet, "bullets");
			// if (this.multiShot) {
			// 	tempBullet = ObjectManager.createBullet(this.coords.x, this.coords.y, 400, this.angleIndex - 1);
			// 	ObjectManager.addObject(tempBullet, "bullets");
			// 	tempBullet = ObjectManager.createBullet(this.coords.x, this.coords.y, 400, this.angleIndex + 1);
			// 	ObjectManager.addObject(tempBullet, "bullets");
			// } else if (this.tailGun) {
			// 	var tempAngleIndex: number = this.angleIndex - 16;
			// 	if (tempAngleIndex <= 0) tempAngleIndex += MathTables.angleDivisions;
			// 	tempBullet = ObjectManager.createBullet(this.coords.x, this.coords.y, 400, tempAngleIndex);
			// 	ObjectManager.addObject(tempBullet, "bullets");
			// }
		}
	}

	bounce(object:BaseObject):void
	{
		//reflect in direction of object
		this.hit = true;
		VectorMath.copyVector(this.velocity, object.velocity);
	}

	die():void  {
		this.alive = false;
	}
}
