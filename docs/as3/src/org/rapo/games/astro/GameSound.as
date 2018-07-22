/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro {
	
	import flash.display.MovieClip;
	
	import flash.media.Sound
	import org.rapo.games.astro.AudioController;
	
	public class GameSound extends Sound {
		
		public var soundClip:MovieClip;
		public var AC:AudioController;
		public var soundID:String;
		public var soundURL:String;
		public var isStreaming:Boolean;
		public var playWhenLoaded:Boolean;
		
		public function GameSound(clip:MovieClip, 
								  audio_controller:AudioController, 
								  id:String, url:String, 
								  is_streaming:Boolean, 
								  play_when_loaded:Boolean) {
			
			super(clip);
			soundClip = clip;
			AC = audio_controller;
			soundID = id;
			soundURL = url;
			isStreaming = is_streaming;
			playWhenLoaded = play_when_loaded;
		}	
	}
}