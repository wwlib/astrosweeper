package org.rapo.games.astro.clips {
	
	import flash.display.MovieClip;
	import org.rapo.games.astro.BaseObject;

	public class mcBase extends MovieClip {
		
		/** The owner property is used to allow clips to communicate with their controller classes
		 *  i.e. The mcShip MovieClip is an instance of mcBase and it is controlled by the Ship class, a subclass of BaseObject.
		 *  Keeping the MovieClip classes separate from the controller classes makes it possible to treat Library Symbols
		 *  simply as assets, rather than as objects with associated behaviors.  In some cases it may make more sense
		 *  to have the controller class extend the MovieClip class.		 */
		public var owner:BaseObject;

		
		public function setOwner(o:BaseObject)
		{
			owner = o;
		}
	}
}
