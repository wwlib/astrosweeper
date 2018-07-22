package org.rapo.games.astro.sounds {
	
	import flash.media.Sound;
	import org.rapo.games.astro.BaseObject;

	public class sndBase extends Sound {
		
		public var owner:BaseObject;

		
		public function setOwner(o:BaseObject)
		{
			owner = o;
		}
	}
}
