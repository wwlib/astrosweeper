/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers  {
	
	import org.rapo.games.astro.managers.ScoreManager;
	import org.rapo.games.astro.managers.BGManager;
	
	public class LevelManager{
		
		
		public static var BASE_POWERUP_INTERVAL:Number = 15000;
		public static var BASE_DEBRIS_INTERVAL:Number = 5000;
		public static var BASE_CRYSTAL_INTERVAL:Number = 5000;
		public static var HIT_MULTIPLIER:Number = 10;
		public static var TIME_PER_LEVEL:Number = 30000;
		
		public static function getPowerupInterval():Number {
			
			return BASE_POWERUP_INTERVAL - (500 * ScoreManager.level);
		}
		
		public static function getDebrisInterval():Number {
			
			return BASE_DEBRIS_INTERVAL - (500 * ScoreManager.level);
		}
		
		public static function getCrystalInterval():Number {
			
			if (ScoreManager.level < 3) {
				return 100 * 1000 * 1000; //effectively infinite
			} else {
				return BASE_CRYSTAL_INTERVAL - (500 * ScoreManager.level);
			}
		}
		
		public static function getTargetHits():Number {
	
			return ScoreManager.level * HIT_MULTIPLIER;
		}
		
		public static function getLevelTime():Number {
			
			return ScoreManager.level * TIME_PER_LEVEL;
		}
		
		public static function setSpawnInfo(info:Object):void {
			
			var random:Number = Math.floor(Math.random() * 4);
			
			switch (random) {
				case 0:
					info.x = BGManager.worldBounds.xMin;
					info.y = BGManager.worldBounds.yMin;
					info.angle = 11;
					info.type = "pu_energy_type";
					break;
				case 1:
					info.x = BGManager.worldBounds.xMax;
					info.y = BGManager.worldBounds.yMin;
					info.angle = 18;
					info.type = "pu_multishot_type";
					break;
				case 2:
					info.x = BGManager.worldBounds.xMin;
					info.y = BGManager.worldBounds.yMax;
					info.angle = 5;
					info.type = "pu_shield_type";
					break;
				case 3:
					info.x = BGManager.worldBounds.xMax;
					info.y = BGManager.worldBounds.yMax;
					info.angle = 27;
					info.type = "pu_tailgun_type";
					break;
				default:
					break;
			}
		}
	}
}