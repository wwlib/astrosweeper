/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers {
	
	import flash.display.MovieClip;
	
	import org.rapo.games.astro.BaseObject;
	import org.rapo.games.astro.managers.ObjectManager;
	import org.rapo.games.astro.Powerup;
	import org.rapo.games.astro.Debris;
	import org.rapo.games.astro.Crystal;
	
	public class RadarManager {
	
		public static var mc:MovieClip;
		
		public static function initialize(radar_clip){
	
			mc = radar_clip;
		}
	
		public static function update():void {
	
			for (var i = 1; i <= 10; i++) {
	
				mc.blips["blip_" + i].visible = false;
			}
	
			for (var i = 1; i <= 5; i++) {
	
				mc.blips["blip_pu_" + i].visible = false;
			}
	
	
			var blipCount:Number = 0;
			var blipPUCount:Number = 0;
	
			var thisArray:Array = ObjectManager.arrays["objects"];
			for (var i:Number=0; i < thisArray.length; i++) {
				
				var thisObject:BaseObject = BaseObject(thisArray[i]);
	
				if (thisObject instanceof Debris || thisObject instanceof Crystal) {
	
					blipCount += 1;
					mc.blips["blip_" + blipCount].x = (thisObject.mc.x - ObjectManager.ship.mc.x) / 15;
					mc.blips["blip_" + blipCount].y = (thisObject.mc.y - ObjectManager.ship.mc.y) / 15;
					mc.blips["blip_" + blipCount].visible = true;
				} else if (thisObject instanceof Powerup) {
					
					blipPUCount += 1;
					mc.blips["blip_pu_" + blipPUCount].x = (thisObject.mc.x - ObjectManager.ship.mc.x) / 15;
					mc.blips["blip_pu_" + blipPUCount].y = (thisObject.mc.y - ObjectManager.ship.mc.y) / 15;
					mc.blips["blip_pu_" + blipPUCount].visible = true;
				}
			}
		}
	}
}