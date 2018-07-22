/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro {
	
	import flash.display.MovieClip;
	
	import org.rapo.games.astro.BaseObject;
	import org.rapo.games.astro.GameTimer;
	import org.rapo.games.astro.MathTables;
	import org.rapo.games.astro.managers.FrameTimeManager;
	import org.rapo.games.astro.managers.BGManager;
	
	public class Bullet extends BaseObject {
		
		public var durationTimer:GameTimer;
		
		public function Bullet(	x:Number, y:Number,
										bullet_speed:Number, angle_index:Number,
										movie_clip:MovieClip, name:String) {
									
			super(x, y, movie_clip, name);
			setAngleIndex(angle_index);
			speed = bullet_speed;
			mc.gotoAndStop(angleIndex);
			durationTimer = new GameTimer();
			durationTimer.restartTimer();
		}
	
		public override function move():void {
			
			MathTables.setVelocity(angleIndex, speed, velocity);
			
			coords.x += velocity.x * FrameTimeManager.getFrameSeconds();
			coords.y += velocity.y * FrameTimeManager.getFrameSeconds();
			
			mc.x = coords.x + BGManager.mc.x;
			mc.y = coords.y + BGManager.mc.y;
			
			if (durationTimer.milliseconds() > 750) {
				alive = false;
			}
		}
	}
}