/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers  {
	
	import org.rapo.games.astro.GameTimer;
	
	public class FrameTimeManager {
		
		static var frameTimeMilliseconds:Number;
		static var frameTimeTimer:GameTimer = new GameTimer();
			
		public static function calculateFrameTime():void {
			
			frameTimeMilliseconds = frameTimeTimer.milliseconds();
			frameTimeTimer.restartTimer();
		}
		
		public static function getFrameSeconds():Number {
			
			return frameTimeMilliseconds / 1000;
		}
	}
}