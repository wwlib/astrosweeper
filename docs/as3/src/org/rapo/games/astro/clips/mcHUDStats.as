package org.rapo.games.astro.clips {
	
	import flash.display.MovieClip;
	import flash.text.TextField;

	public class mcHUDStats extends mcBase {
		
		import flash.text.TextField;
		
		public var hudStatsMeter:mcHUDStatsMeter;
		public var timer:TextField;
		public var level:TextField;
		public var levelScore:TextField;
		
		public function mcHUDStats()
		{

			timer.text = "timer";
			level.text = "level";
			levelScore.text = "score";
		}

	}
}