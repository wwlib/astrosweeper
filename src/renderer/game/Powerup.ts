import GameTimer from './GameTimer';
import BaseObject from './BaseObject';
import VectorMath from './VectorMath';
import ObjectManager from './managers/ObjectManager';
import PowerupManager from './managers/PowerupManager';
import FrameTimeManager from './managers/FrameTimeManager';
import AIManager from './managers/AIManager';
import BGManager from './managers/BGManager';

export default class Powerup extends BaseObject {

	public type: string;
	public autoPilotTimer:GameTimer;
	public durationTimer:GameTimer;


	constructor(pu_type: string, x: number, y: number, movie_clip: any, name: string) {

		super(x, y, movie_clip, name);
		this.type = pu_type;

		this.autoPilotTimer = new GameTimer();
		this.durationTimer = new GameTimer();
	}

	 move():void {

		this.autoPilot();
		this.friction();
		this.updateCoords();
		this.mc.visible = true;
		this.mc.x = this.coords.x + BGManager.mc.x;
		this.mc.y = this.coords.y + BGManager.mc.y;
		if (this.durationTimer.milliseconds() > PowerupManager.POWERUP_DURATION) {
			this.alive = false;
		}
		//trace("powerup: " + mc.x + ", " + durationTimer.milliseconds());
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
		//VectorMath.addVectors(newLocation, CurrentTables.getCurrent(coords));
		this.coords = newLocation;
	}

	autoPilot() {
		if (this.autoPilotTimer.milliseconds() > AIManager.PU_AI_INTERVAL) {
			var acceleration: any = {x:0, y:0};
			var accelerationScalar: number = 50 * AIManager.PU_AI_AGGRESSION * FrameTimeManager.getFrameSeconds();
			VectorMath.copyVector(acceleration, ObjectManager.ship.coords);
			VectorMath.subtractVectors(acceleration, this.coords);
			VectorMath.normalizeVector(acceleration);
			VectorMath.scaleVector(acceleration, accelerationScalar);

			VectorMath.addVectors(this.velocity, acceleration);

			this.autoPilotTimer.restartTimer();
		}
	}

	hit(object:BaseObject):void
	{

	}

	die():void
	{

	}
}
