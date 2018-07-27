import BaseObject from './BaseObject';
import GameTimer from './GameTimer';
import VectorMath from './VectorMath';
import FrameTimeManager from './managers/FrameTimeManager';
import BGManager from './managers/BGManager';
import AIManager from './managers/AIManager';
import ObjectManager from './managers/ObjectManager';

export default class Crystal extends BaseObject {

	public size: number;
	public autoPilotTimer: GameTimer;

	constructor(x: number, y: number, angle_index: number, movie_clip: any, name: string) {
		super(x, y, movie_clip, name);
		this.setAngleIndex(angle_index);
		this.mc.gotoAndStop(this.angleIndex);
		this.mc.owner = this;
		this.autoPilotTimer = new GameTimer();
	}

	move():void {
		this.autoPilot();
		this.friction();
		this.updateCoords();
		this.mc.x = this.coords.x + BGManager.mc.x;
		this.mc.y = this.coords.y + BGManager.mc.y;
	}

	friction():void {
		var frictionVector: any = {x:0, y:0};
		var frictionCoefficient: number = -.01;
		VectorMath.copyVector(frictionVector, this.velocity);
		VectorMath.scaleVector(frictionVector, frictionCoefficient);
		VectorMath.addVectors(this.velocity, frictionVector);
	}

	updateCoords():void {
		var newLocation: any = new Object();
		VectorMath.copyVector(newLocation, this.coords);
		VectorMath.addVectors(newLocation, this.velocity);
		this.coords = newLocation;
	}

	autoPilot() {
		if (this.autoPilotTimer.milliseconds() > AIManager.CRYSTAL_AI_INTERVAL) {
			var acceleration: any = {x:0, y:0};
			var accelerationScalar =
				50 * AIManager.CRYSTAL_AI_AGGRESSION * FrameTimeManager.getFrameSeconds();
			VectorMath.copyVector(acceleration, ObjectManager.ship.coords);
			VectorMath.subtractVectors(acceleration, this.coords);
			VectorMath.normalizeVector(acceleration);
			VectorMath.scaleVector(acceleration, accelerationScalar);

			VectorMath.addVectors(this.velocity, acceleration);

			this.autoPilotTimer.restartTimer();
		}
	}

	die():void
	{

	}
}
