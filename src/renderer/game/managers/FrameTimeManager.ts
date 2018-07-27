import GameTimer from '../GameTimer';

export default class FrameTimeManager {

	static frameTimeMilliseconds: number;
	static frameTimeTimer: GameTimer = new GameTimer();

	static calculateFrameTime():void {

		FrameTimeManager.frameTimeMilliseconds = FrameTimeManager.frameTimeTimer.milliseconds();
		FrameTimeManager.frameTimeTimer.restartTimer();
	}

	static getFrameSeconds(): number {

		return FrameTimeManager.frameTimeMilliseconds / 1000;
	}
}
