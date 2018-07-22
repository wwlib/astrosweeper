/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro {
	
	import flash.utils.getTimer;

	
	public class GameTimer {
	
		private var startTime:Number;
		
		public function GameTimer () {
			startTime = getTimer();
		}
		
		//public function getTimer():Number
		//{
		//	return 33; //1000/30; 1/30th of a second
		//}
	
		public function restartTimer():void {
			startTime = getTimer(); //date.getMilliseconds(); //getTimer();
		}
	
		public function milliseconds():Number {
			return (getTimer() - startTime);
		}
	
		public function seconds():Number {
			return getSeconds();
		}
	
		private function getSeconds():Number {
			return ( Math.floor( (getTimer() - startTime)/1000 ) );
		}
	
		public function minutes():Number {
			return Math.floor(getSeconds() / 60);
		}
	
		public function remaining(time_allowed:Number):Number {
			return time_allowed - milliseconds();
		}
		
		public function expire():void {
			startTime = -100000;
		}
	
		public function display():String {
	
			var mins:String;
			var secs:String;
	
			mins = "00" + minutes();
			mins = mins.substr(mins.length - 2, 2);
	
			secs = "00" + seconds();
			secs = secs.substr(secs.length - 2, 2);
	
			return mins + ":" + secs;
		}
	
		public function displayRemaining(time_allowed:Number):String {
	
			var mins:String;
			var secs:String;
			var millisRemaining:Number;
			var secsRemaining:Number;
			var minsRemaining:Number;
			
			millisRemaining = time_allowed - milliseconds();
			secsRemaining = Math.floor(millisRemaining / 1000);
			minsRemaining = Math.floor(secsRemaining / 60);
	
			if (millisRemaining >=0) {
				mins = "00" + minsRemaining;
				mins = mins.substr(mins.length - 2, 2);
		
				secs = "00" + secsRemaining;
				secs = secs.substr(secs.length - 2, 2);
			} else {
				mins = "00";
				secs = "00";
			}
	
			return mins + ":" + secs;
		}
	}
}