import * as PIXI from 'pixi.js'
import animate = require('pixi-animate');

import GameDepthManager from './GameDepthManager';
import MathTables from '../MathTables';
// import org.rapo.games.astro.Bullet;
import Ship from '../Ship';
import Powerup from '../Powerup';
import Debris from '../Debris';
import Crystal from '../Crystal';
// import org.rapo.games.astro.Powerup;
// import org.rapo.games.astro.Debris;
// import org.rapo.games.astro.Crystal;

// import org.rapo.games.astro.clips.mcShip;
// import org.rapo.games.astro.clips.mcBullet;
// import org.rapo.games.astro.clips.mcPUMultishot;
// import org.rapo.games.astro.clips.mcCrystal;
// import org.rapo.games.astro.clips.mcDebris;

const findRoot = require('find-root');
const root = findRoot(__dirname);
const shipMcClassPath = root + '/assets/ship/ship.js';
const shipMcBasePath = root + '/assets/ship';
const shipMcClass: any = require(shipMcClassPath);


export default class ObjectManager {

	static movieClipTarget: any;
	static ship:Ship = null;
	static arrays: any = {};

	static init(target: any) {

		ObjectManager.movieClipTarget = target;
		ObjectManager.arrays = {};
		ObjectManager.arrays["bullets"] =[];
		ObjectManager.arrays["objects"] =[];
	}

	// static createBullet(x: number, y: number,
	// 									bullet_speed: number,
	// 									angle_index: number):Bullet {
	//
	// 	var depth = GameDepthManager.getNextObjectDepth();
	// 	var name = "bullet_" + depth;
	// 	//var tempMovieClip:MovieClip =
	// 	//	movieClipTarget.attachMovie("bullet_type", name, depth);
	// 	var tempMovieClip:mcBullet = new mcBullet();
	// 	var newBullet:Bullet =
	// 		new Bullet(	x, y, bullet_speed, angle_index,
	// 					tempMovieClip, name);
	// 	newBullet.move();
	// 	movieClipTarget.addChild(newBullet.mc);
	//
	// 	return newBullet;
	// }

	static createShip(x: number, y: number): Promise<Ship> {
		return new Promise<Ship>((resolve: any, reject: any) => {
			animate.load(shipMcClass.library.ship, ObjectManager.movieClipTarget, ((shipMcContainer: any, loader: any) => {
			    console.log(`createShip:`, shipMcContainer);
				this.ship = new Ship(x, y, shipMcContainer.ship, 'ship');
			    resolve(this.ship)
			}) as any, shipMcBasePath);
			// var depth = GameDepthManager.SHIP_DEPTH;
			// var name = "ship_" + depth;
			// //var tempMovieClip:MovieClip = movieClipTarget.attachMovie("ship_type", name, depth);
			// var tempMovieClip:mcShip  = new mcShip();
			// ship = new Ship(x, y, tempMovieClip, name);
			// ship.move();
			// movieClipTarget.addChild(ship.mc);
			// return ship;
		});
	}

	// static createPowerup(x: number, y: number, type: string):Powerup {
	//
	// 	var depth = GameDepthManager.getNextObjectDepth();
	// 	var name = type + "_" + depth;
	// 	//var tempMovieClip:MovieClip = movieClipTarget.attachMovie(type, name, depth);
	// 	var tempMovieClip:mcPUMultishot = new mcPUMultishot();
	//
	// 	var newPowerup:Powerup = new Powerup(type, x, y, tempMovieClip, name);
	// 	newPowerup.move();
	// 	movieClipTarget.addChild(newPowerup.mc);
	//
	// 	return newPowerup;
	// }

	// static createDebris(x: number, y: number, angle_index: number):Debris {
	//
	// 	var depth = GameDepthManager.getNextObjectDepth();
	// 	var name = "debris_" + depth;
	// 	//var tempMovieClip:MovieClip = movieClipTarget.attachMovie("debris_type", name, depth);
	// 	var tempMovieClip:mcDebris = new mcDebris();
	//
	// 	var newDebris:Debris = new Debris(x, y, 60, 100, angle_index, tempMovieClip, name);
	// 	newDebris.move();
	// 	movieClipTarget.addChild(newDebris.mc);
	//
	// 	return newDebris;
	// }

	// static splitDebris(debris:Debris, array_id: string):void {
	//
	// 	var angleIndex: number = debris.angleIndex - 8;
	// 	if (angleIndex <= 0) angleIndex += MathTables.angleDivisions;
	// 	var tempDebris:Debris = createDebris(debris.coords.x, debris.coords.y, angleIndex);
	// 	tempDebris.setSize(debris.size * .75);
	// 	tempDebris.speed = 200;
	// 	addObject(tempDebris, array_id);
	//
	// 	angleIndex = debris.angleIndex + 8;
	// 	if (angleIndex >= MathTables.angleDivisions)
	// 		angleIndex -= MathTables.angleDivisions;
	// 	tempDebris = createDebris(debris.coords.x, debris.coords.y, angleIndex);
	// 	tempDebris.setSize(debris.size * .75);
	// 	tempDebris.speed = 200;
	// 	addObject(tempDebris, array_id);
	// }

	// static createCrystal(x: number, y: number, size: number,
	// 									speed: number, angle_index: number):Crystal {
	//
	// 	var depth = GameDepthManager.getNextObjectDepth();
	// 	var name = "crystal_" + depth;
	// 	//var tempMovieClip:MovieClip = movieClipTarget.attachMovie("crystal_type", name, depth);
	// 	var tempMovieClip:mcCrystal = new mcCrystal;
	//
	// 	var newCrystal:Crystal = new Crystal(x, y, angle_index, tempMovieClip, name);
	// 	newCrystal.move();
	// 	movieClipTarget.addChild(newCrystal.mc);
	//
	// 	return newCrystal;
	// }

	static addObject(object: any, array_id: string) {


		if (ObjectManager.arrays[array_id] == undefined) {
			ObjectManager.arrays[array_id] =[];
		}
		ObjectManager.arrays[array_id].push(object);
	}

	static removeObject(array_id: string, index: number) {

		ObjectManager.arrays[array_id].splice(index, 1);
	}

	static resetArray(array_id: string) {
		ObjectManager.arrays[array_id] = undefined;
	}
}
