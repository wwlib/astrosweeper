/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro {
	
	import flash.display.MovieClip;

	public class BaseObject {
		
		public var coords:Object;
		public var mc:flash.display.MovieClip;
		public var name:String;
		public var speed:Number;
		public var velocity:Object;
		public var angleIndex:Number;
		public var alive:Boolean;
		
		public function BaseObject(x:Number, y:Number,
											movie_clip:flash.display.MovieClip, name:String) {
			coords = new Object();
			velocity = new Object();
			
			coords.x = x;
			coords.y = y;
			mc = movie_clip;
			this.name = name;
			velocity.x = 0;
			velocity.y = 0;
			angleIndex = 1;
			alive = true;
			
			mc.hit_target.visible = false;
			mc.owner = this;
		}
	
		public function draw():void {
			//to be overridden by subclasses
		}
		
		public function setAngleIndex(angle_index:Number):void {
			angleIndex = angle_index;
			if (angleIndex <= 0) angleIndex += MathTables.angleDivisions;
			if (angleIndex > MathTables.angleDivisions)
				angleIndex -= MathTables.angleDivisions;
		}
		
		public function drawBounds():void {
			//to be overridden by subclasses
		}
		
		public function move():void {
			//to be overridden by subclasses
			mc.x = coords.x;
			mc.y = coords.y;
		}
		
		public function moveTo(x:Number, y:Number):void {
			
			coords.x = x;
			coords.y = y;
		}
	
		public function destroy():void {
			var p:MovieClip = mc.parent;
			p.removeChild(mc);
			delete this;
		}
	}
}