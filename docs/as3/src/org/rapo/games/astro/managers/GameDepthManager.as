/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro.managers {
	
	public class GameDepthManager{
		
		static var MIN_OBJECT_DEPTH:Number = 10;
		static var MAX_OBJECT_DEPTH:Number = 399;
		static var SHIP_DEPTH:Number = 450;
		static var HUD_DEPTH:Number = 500;
		static var MIN_AUDIO_CLIP_DEPTH:Number = 1000;
		static var MAX_AUDIO_CLIP_DEPTH:Number = 1200;
		
		static var nextObjectDepth:Number = MIN_OBJECT_DEPTH;
		static var nextAudioClipDepth:Number = MIN_AUDIO_CLIP_DEPTH;
		
		public static function getNextAudioClipDepth():Number {
			
			// recycle depths
			if (nextAudioClipDepth >= MAX_AUDIO_CLIP_DEPTH)
				nextAudioClipDepth = MIN_AUDIO_CLIP_DEPTH;
			return nextAudioClipDepth++;
		}
		
		public static function getNextObjectDepth():Number {
			
			// recycle depths
			if (nextObjectDepth >= MAX_OBJECT_DEPTH)
				nextObjectDepth = MIN_OBJECT_DEPTH;
			return nextObjectDepth++;
		}
	}
}