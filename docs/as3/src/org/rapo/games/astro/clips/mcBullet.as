package org.rapo.games.astro.clips {
	
	import flash.display.MovieClip;

	public class mcBullet extends mcBase {
		
		public var anim:mcBulletAnim;
		public var hit_target:mcHitTarget;
		
		public function mcBullet()
		{
			hit_target.visible = false;
		}
		
	}
}
