export default class GameDepthManager{

	static MIN_OBJECT_DEPTH: number = 10;
	static MAX_OBJECT_DEPTH: number = 399;
	static SHIP_DEPTH: number = 450;
	static HUD_DEPTH: number = 500;
	static MIN_AUDIO_CLIP_DEPTH: number = 1000;
	static MAX_AUDIO_CLIP_DEPTH: number = 1200;

	static nextObjectDepth: number = GameDepthManager.MIN_OBJECT_DEPTH;
	static nextAudioClipDepth: number = GameDepthManager.MIN_AUDIO_CLIP_DEPTH;

	static getNextAudioClipDepth(): number {

		// recycle depths
		if (GameDepthManager.nextAudioClipDepth >= GameDepthManager.MAX_AUDIO_CLIP_DEPTH)
			GameDepthManager.nextAudioClipDepth = GameDepthManager.MIN_AUDIO_CLIP_DEPTH;
		return GameDepthManager.nextAudioClipDepth++;
	}

	static getNextObjectDepth(): number {

		// recycle depths
		if (GameDepthManager.nextObjectDepth >= GameDepthManager.MAX_OBJECT_DEPTH)
			GameDepthManager.nextObjectDepth = GameDepthManager.MIN_OBJECT_DEPTH;
		return GameDepthManager.nextObjectDepth++;
	}
}
