/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro {
	
	public class VectorMath {
		
		public static function newVector(x:Number, y:Number):Object {
			
			return {x:x, y:y};
		}
		
		public static function setVector(vector:Object, x:Number, y:Number):void {
			
			vector.x = x;
			vector.y = y;
		}
		
		public static function copyVector(v1:Object, v2:Object):void {
			
			v1.x = v2.x;
			v1.y = v2.y;
	
		}
		
		public static function addVectors(v1:Object, v2:Object):void {
			
			v1.x += v2.x;
			v1.y += v2.y;
		}
		
		public static function subtractVectors(v1:Object, v2:Object):void {
			
			v1.x -= v2.x;
			v1.y -= v2.y;
		}
		
		public static function scaleVector(vector:Object, scalar:Number):void {
			
			vector.x *= scalar;
			vector.y *= scalar;
		}
		
		public static function multVectors(v1:Object, v2:Object):void {
			
			v1.x *= v2.x;
			v1.y *= v2.y;
		}
		
		public static function getDistance(v1:Object, v2:Object):Number {
				
			var tempVector:Object = {x:0, y:0};
			copyVector(tempVector, v1);
			subtractVectors(tempVector, v2);
			
			return getMagnitude(tempVector);
		}
		
		public static function getMagnitude(vector:Object):Number {
				
			return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
		}
		
		public static function normalizeVector(vector:Object):void {
			
			var magnitude:Number = getMagnitude(vector);
			
			scaleVector(vector, 1 / magnitude);
			
		}
			
		public static function inBounds(vector:Object, bounds:Object):Boolean {
			
			var inBounds:Boolean;
			inBounds = (vector.x >= bounds.xMin &&
						vector.x <= bounds.xMax &&
						vector.y >= bounds.yMin &&
						vector.y <= bounds.yMax);
		
			if (vector.x < bounds.xMin) vector.x = bounds.xMin;
			if (vector.x > bounds.xMax) vector.x = bounds.xMax;
			if (vector.y < bounds.yMin) vector.y = bounds.yMin;
			if (vector.y > bounds.yMax) vector.y = bounds.yMax;
	
			return inBounds;
		}
		
		public static function newBounds(xMin:Number, xMax:Number,
										yMin:Number, yMax:Number):Object {
			
			return {xMin:xMin, xMax:xMax, yMin:yMin, yMax:yMax};
		}
		
		public static function copyBounds(b1:Object, b2:Object):void {
			b1.xMin = b2.xMin;
			b1.xMax = b2.xMax;
			b1.yMin = b2.yMin;
			b1.yMax = b2.yMax;
		}
		
		public static function insetBounds(	bounds:Object,
											xinset:Number, yinset:Number):void {
			bounds.xMin += xinset;
			bounds.xMax -= xinset;
			bounds.yMin += yinset;
			bounds.yMax -= yinset;
		}
	}
}