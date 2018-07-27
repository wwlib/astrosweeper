import GameTimer from '../GameTimer';
import LevelManager from './LevelManager';

export default class ScoreManager{

	static MAX_LIVES: number = 10;

	static levelScore: number = 0;
	static levelBonus: number = 0;
	static score: number = 0;
	static bonus: number = 0;
	static totalScore: number = 0;
	static level: number = 1;
	static lives: number = ScoreManager.MAX_LIVES;
	static hits: number = 0;
	static levelTimer:GameTimer = new GameTimer();

	static resetLevelScore():void {
		ScoreManager.levelScore = 0;
		ScoreManager.levelBonus = 0;
		ScoreManager.hits = 0;
	}

	static resetLevelTimer():void {
		ScoreManager.levelTimer.restartTimer();
	}

	static getBonusTimeRemaining(): number {
		return ScoreManager.levelTimer.remaining(LevelManager.getLevelTime());
	}

	static getBonusTimeRemainingDisplay():String {
		return ScoreManager.levelTimer.displayRemaining(LevelManager.getLevelTime());
	}

	static updateLevelScore(points: number):void {
		ScoreManager.levelScore += points;
	}

	static updateScore():void {
		if (ScoreManager.getBonusTimeRemaining() > 0) {
			ScoreManager.levelBonus = ScoreManager.level * ScoreManager.lives * 10;
		}
		ScoreManager.score += ScoreManager.levelScore;
		ScoreManager.bonus += ScoreManager.levelBonus;
		ScoreManager.totalScore = ScoreManager.score + ScoreManager.bonus;
		ScoreManager.level++;
	}

	static reset():void {

		ScoreManager.score = 0;
		ScoreManager.bonus = 0;
		ScoreManager.levelScore = 0;
		ScoreManager.levelBonus = 0;
		ScoreManager.totalScore = 0;
		ScoreManager.level = 1;
		ScoreManager.lives = ScoreManager.MAX_LIVES;
		ScoreManager.hits = 0;
	}
}
