/*
** Source code Copyright 2006, Andrew Rapo
** May be used in non-commercial and commercial applications
** as long as the author is credited
*/

package org.rapo.games.astro {

	import flash.xml.XMLDocument;
	
	public class SoundtrackXML extends XMLDocument {
	
		public var owner:Object;
	
		public function SoundtrackXML(owner:Object) {
			super();
			this.owner = owner;
		}
	}
}