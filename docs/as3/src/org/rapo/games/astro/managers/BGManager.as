/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers {
	
	import flash.display.MovieClip;
	
	import  org.rapo.games.astro.Ship;
	import  org.rapo.games.astro.VectorMath;
	
	public class BGManager {
	
		public static var mc:MovieClip;
		public static var SCREEN_ORIGIN:Object = {x:400, y:300};
		public static var shipBounds:Object;
		public static var shipScreenBounds:Object;
		public static var worldBounds:Object;
												
		public static function initialize(bg_clip:flash.display.MovieClip){
	
			trace("BGManager: initialize: ");
			mc = bg_clip;
			mc.x = SCREEN_ORIGIN.x;
			mc.y = SCREEN_ORIGIN.y;
			worldBounds = VectorMath.newBounds(-1350, 1350, -1025, 1025);
			shipBounds = new Object();
			VectorMath.copyBounds(shipBounds, worldBounds);
			VectorMath.insetBounds(shipBounds, 100, 100);
			shipScreenBounds = VectorMath.newBounds(SCREEN_ORIGIN.x - 300,
													SCREEN_ORIGIN.x + 300,
													SCREEN_ORIGIN.y - 200,
													SCREEN_ORIGIN.y + 200);
		}
	
		public static function sync(ship:Ship):void {
	
			mc.x = ship.mc.x - ship.coords.x;
			mc.y = ship.mc.y - ship.coords.y;
		}
	}
}