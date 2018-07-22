/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers  {
	
	import org.rapo.games.astro.GameTimer;
	import org.rapo.games.astro.managers.LevelManager;
	
	public class ScoreManager{
		
		static var MAX_LIVES:Number = 10;
		
		static var levelScore:Number = 0;
		static var levelBonus:Number = 0;
		static var score:Number = 0;
		static var bonus:Number = 0;
		static var totalScore:Number = 0;
		static var level:Number = 1;
		static var lives:Number = MAX_LIVES;
		static var hits:Number = 0;
		static var levelTimer:GameTimer = new GameTimer();
			
		static public function resetLevelScore():void {
			levelScore = 0;
			levelBonus = 0;
			hits = 0;
		}
		
		static public function resetLevelTimer():void {
			levelTimer.restartTimer();
		}
		
		static public function getBonusTimeRemaining():Number {
			return levelTimer.remaining(LevelManager.getLevelTime());
		}
		
		static public function getBonusTimeRemainingDisplay():String {
			return levelTimer.displayRemaining(LevelManager.getLevelTime());
		}
		
		static public function updateLevelScore(points:Number):void {
			levelScore += points;
		}
			
		static public function updateScore():void {
			if (getBonusTimeRemaining() > 0) {
				levelBonus = level * lives * 10;
			}
			score += levelScore;
			bonus += levelBonus;
			totalScore = score + bonus;
			level++;
		}
	
		static public function reset():void {
		
			score = 0;
			bonus = 0;
			levelScore = 0;
			levelBonus = 0;
			totalScore = 0;
			level = 1;
			lives = MAX_LIVES;
			hits = 0;
		}
	}
}