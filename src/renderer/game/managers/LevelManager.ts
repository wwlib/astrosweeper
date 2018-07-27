import ScoreManager from './ScoreManager';
import BGManager from './BGManager';

export default class LevelManager {


	static BASE_POWERUP_INTERVAL: number  = 15000;
	static BASE_DEBRIS_INTERVAL: number  = 5000;
	static BASE_CRYSTAL_INTERVAL: number  = 5000;
	static HIT_MULTIPLIER: number  = 10;
	static TIME_PER_LEVEL: number  = 30000;

	static getPowerupInterval(): number  {

		return LevelManager.BASE_POWERUP_INTERVAL - (500 * ScoreManager.level);
	}

	static getDebrisInterval(): number  {

		return LevelManager.BASE_DEBRIS_INTERVAL - (500 * ScoreManager.level);
	}

	static getCrystalInterval(): number  {

		if (ScoreManager.level < 3) {
			return 100 * 1000 * 1000; //effectively infinite
		} else {
			return LevelManager.BASE_CRYSTAL_INTERVAL - (500 * ScoreManager.level);
		}
	}

	static getTargetHits(): number  {

		return ScoreManager.level * LevelManager.HIT_MULTIPLIER;
	}

	static getLevelTime(): number  {

		return ScoreManager.level * LevelManager.TIME_PER_LEVEL;
	}

	static setSpawnInfo(info: any ):void {

		var random: number  = Math.floor(Math.random() * 4);

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
