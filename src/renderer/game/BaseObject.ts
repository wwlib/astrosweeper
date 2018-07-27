import MathTables from './MathTables';

import * as PIXI from 'pixi.js'
import animate = require('pixi-animate');

export default class BaseObject {

	public coords: any;
	public mc: any; //animate.MovieClip;
	public name: string;
	public speed: number;
	public velocity: any;
	public angleIndex: number;
	public alive: boolean;

	constructor(x: number, y: number, movie_clip: animate.MovieClip, name: string) {
		this.coords = {};
		this.velocity = {};

		this.coords.x = x;
		this.coords.y = y;
		this.mc = movie_clip;
		this.name = name;
		this.velocity.x = 0;
		this.velocity.y = 0;
		this.angleIndex = 1;
		this.alive = true;

		this.mc.hit_target.visible = false;
		this.mc.owner = this;
	}

	draw():void {
		//to be overridden by subclasses
	}

	setAngleIndex(angle_index: number):void {
		this.angleIndex = angle_index;
		if (this.angleIndex <= 0) this.angleIndex += MathTables.angleDivisions;
		if (this.angleIndex > MathTables.angleDivisions)
			this.angleIndex -= MathTables.angleDivisions;
	}

	drawBounds():void {
		//to be overridden by subclasses
	}

	move():void {
		//to be overridden by subclasses
		this.mc.x = this.coords.x;
		this.mc.y = this.coords.y;
	}

	moveTo(x: number, y: number):void {

		this.coords.x = x;
		this.coords.y = y;
	}

	destroy():void {
		// var p: animate.MovieClip = this.mc.parent;
		// p.removeChild(this.mc);
		// delete this;
	}
}
