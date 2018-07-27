import BaseObject from './BaseObject';
import GameTimer from './GameTimer';
import VectorMath from './VectorMath';
import MathTables from './MathTables';
import FrameTimeManager from './managers/FrameTimeManager';
import BGManager from './managers/BGManager';
import AIManager from './managers/AIManager';
import ObjectManager from './managers/ObjectManager';

export default class Debris extends BaseObject {

	public  size: number;

	constructor(x: number, y: number, debris_size: number,
							debris_speed: number, angle_index: number,
							movie_clip: any, name: string) {

		super(x, y, movie_clip, name);
		this.setAngleIndex(angle_index);
		this.speed = debris_speed;
		this.setSize(debris_size);
		this.mc.owner = this;
	}

	move():void {

		MathTables.setVelocity(this.angleIndex, this.speed, this.velocity);
		VectorMath.scaleVector(this.velocity, FrameTimeManager.getFrameSeconds());
		VectorMath.addVectors(this.coords, this.velocity);
		this.mc.x = this.coords.x + BGManager.mc.x;
		this.mc.y = this.coords.y + BGManager.mc.y;

		if (!VectorMath.inBounds(this.coords, BGManager.worldBounds)) {
			this.alive = false;
		}
	}

	setSize(size: number):void {
		this.size = size;
		this.mc.width = size;
		this.mc.height = size * (53/60); // aspect ratio of the Debris symbol
	}

	die():void
	{

	}
}
