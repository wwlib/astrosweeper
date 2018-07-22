/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers  {
	
	import flash.display.MovieClip
	
	import org.rapo.games.astro.managers.GameDepthManager;
	import org.rapo.games.astro.MathTables;
	import org.rapo.games.astro.Bullet;
	import org.rapo.games.astro.Ship;
	import org.rapo.games.astro.Powerup;
	import org.rapo.games.astro.Debris;
	import org.rapo.games.astro.Crystal;
	
	import org.rapo.games.astro.clips.mcShip;
	import org.rapo.games.astro.clips.mcBullet;
	import org.rapo.games.astro.clips.mcPUMultishot;
	import org.rapo.games.astro.clips.mcCrystal;
	import org.rapo.games.astro.clips.mcDebris;
	
	
	public class ObjectManager {
	
		private static var movieClipTarget:MovieClip;
		
		public static var ship:Ship = null;
		public static var arrays:Object = new Object();
	
		public static function init(target:flash.display.MovieClip) {
			
			movieClipTarget = target;
			arrays = new Object();
			arrays["bullets"] = new Array();
			arrays["objects"] = new Array();
		}
	
		public static function createBullet(x:Number, y:Number,
											bullet_speed:Number,
											angle_index:Number):Bullet {
			
			var depth = GameDepthManager.getNextObjectDepth();
			var name = "bullet_" + depth;
			//var tempMovieClip:MovieClip =
			//	movieClipTarget.attachMovie("bullet_type", name, depth);
			var tempMovieClip:mcBullet = new mcBullet();
			var newBullet:Bullet =
				new Bullet(	x, y, bullet_speed, angle_index,
							tempMovieClip, name);
			newBullet.move();
			movieClipTarget.addChild(newBullet.mc);
			
			return newBullet;
		}
	
		public static function createShip(x:Number, y:Number):Ship {
			var depth = GameDepthManager.SHIP_DEPTH;
			var name = "ship_" + depth;
			//var tempMovieClip:MovieClip = movieClipTarget.attachMovie("ship_type", name, depth);
			var tempMovieClip:mcShip  = new mcShip();
			ship = new Ship(x, y, tempMovieClip, name);
			ship.move();
			movieClipTarget.addChild(ship.mc);
			
			return ship;
		}
		
		public static function createPowerup(x:Number, y:Number, type:String):Powerup {
			
			var depth = GameDepthManager.getNextObjectDepth();
			var name = type + "_" + depth;
			//var tempMovieClip:MovieClip = movieClipTarget.attachMovie(type, name, depth);
			var tempMovieClip:mcPUMultishot = new mcPUMultishot();
			
			var newPowerup:Powerup = new Powerup(type, x, y, tempMovieClip, name);
			newPowerup.move();
			movieClipTarget.addChild(newPowerup.mc);
			
			return newPowerup;
		}
		
		public static function createDebris(x:Number, y:Number, angle_index:Number):Debris {
			
			var depth = GameDepthManager.getNextObjectDepth();
			var name = "debris_" + depth;
			//var tempMovieClip:MovieClip = movieClipTarget.attachMovie("debris_type", name, depth);
			var tempMovieClip:mcDebris = new mcDebris();
			
			var newDebris:Debris = new Debris(x, y, 60, 100, angle_index, tempMovieClip, name);
			newDebris.move();
			movieClipTarget.addChild(newDebris.mc);
			
			return newDebris;
		}
	
		public static function splitDebris(debris:Debris, array_id:String):void {
			
			var angleIndex:Number = debris.angleIndex - 8;
			if (angleIndex <= 0) angleIndex += MathTables.angleDivisions;
			var tempDebris:Debris = createDebris(debris.coords.x, debris.coords.y, angleIndex);
			tempDebris.setSize(debris.size * .75);
			tempDebris.speed = 200;
			addObject(tempDebris, array_id);
			
			angleIndex = debris.angleIndex + 8;
			if (angleIndex >= MathTables.angleDivisions)
				angleIndex -= MathTables.angleDivisions;
			tempDebris = createDebris(debris.coords.x, debris.coords.y, angleIndex);
			tempDebris.setSize(debris.size * .75);
			tempDebris.speed = 200;
			addObject(tempDebris, array_id);
		}
		
		public static function createCrystal(x:Number, y:Number, size:Number, 
											speed:Number, angle_index:Number):Crystal {
			
			var depth = GameDepthManager.getNextObjectDepth();
			var name = "crystal_" + depth;
			//var tempMovieClip:MovieClip = movieClipTarget.attachMovie("crystal_type", name, depth);
			var tempMovieClip:mcCrystal = new mcCrystal;
			
			var newCrystal:Crystal = new Crystal(x, y, angle_index, tempMovieClip, name);
			newCrystal.move();
			movieClipTarget.addChild(newCrystal.mc);
			
			return newCrystal;
		}
		
		public static function addObject(object:Object, array_id:String) {
	
			
			if (arrays[array_id] == undefined) {
				arrays[array_id] = new Array();
			}
			arrays[array_id].push(object);
		}
	
		public static function removeObject(array_id:String, index:Number) {
	
			arrays[array_id].splice(index, 1);
		}
		
		public static function resetArray(array_id:String) {
			arrays[array_id] = undefined;
		}
	}
}