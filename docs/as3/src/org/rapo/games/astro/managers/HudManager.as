/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers  {
	
	import flash.display.MovieClip;
	import flash.text.TextField;
	
	import org.rapo.games.astro.managers.RadarManager;
	import org.rapo.games.astro.managers.ScoreManager;
	import org.rapo.games.astro.managers.PowerupManager;
	import org.rapo.games.astro.managers.LevelManager;
	import org.rapo.games.astro.managers.GameDepthManager;
	import org.rapo.games.astro.managers.BGManager;
	
	import org.rapo.games.astro.clips.mcHUD;
	
	public class HudManager {
	
		public static var ENERGY_BAR_WIDTH:Number = 87.4;
		
		public static var mc:mcHUD;
		public static var levelScoreTextField:TextField;
		public static var levelTextField:TextField;
		public static var scoreTextField:TextField;
		public static var bonusTextField:TextField
		public static var timerTextField:TextField;
		
		public static function initialize(game_timeline){
	
			if (mc == undefined) {
				mc = new mcHUD();
				game_timeline.addChild(mc);
				mc.x = BGManager.SCREEN_ORIGIN.x;
				mc.y = BGManager.SCREEN_ORIGIN.y;
			}
			setHudVisibility(false);
			RadarManager.initialize(mc.radar);
			registerStatsTextFields();
			PowerupManager.initialize(mc.powerupTimer);
		}
		
		public static function update():void {
			RadarManager.update();
			
			var tempScore:String =
				ScoreManager.hits + "/" + LevelManager.getTargetHits();
				//ScoreManager.levelScore.toString() + "/" + ScoreManager.totalScore.toString();
			levelScoreTextField.text = tempScore;
			levelTextField.text = "Level: " + ScoreManager.level;
			timerTextField.text = ScoreManager.getBonusTimeRemainingDisplay();
			mc.stats.hudStatsMeter.hudStatsMeterBar.width =
				ScoreManager.lives / ScoreManager.MAX_LIVES * ENERGY_BAR_WIDTH;
			PowerupManager.update();
		}
		
		public static function registerStatsTextFields():void {
			
			levelScoreTextField = mc.stats.levelScore;
			levelTextField = mc.stats.level;
			timerTextField = mc.stats.timer;
		}
		
		public static function setHudVisibility(visible:Boolean):void {
			
			mc.visible = visible;
		}
	}
}