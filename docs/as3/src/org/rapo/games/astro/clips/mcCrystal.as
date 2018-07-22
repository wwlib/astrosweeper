package org.rapo.games.astro.clips {
	
	import flash.display.MovieClip;

	public class mcCrystal extends mcBase {
		
		public var anim:mcCrystalAnim;
		public var hit_target:mcHitTarget;
		
		public function mcCrystal()
		{
			hit_target.visible = false;
		}
		
		public function explodeDone():void
		{
			
		}
	}
}
