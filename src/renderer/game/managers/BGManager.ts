import  Ship from '../Ship';
import  VectorMath from '../VectorMath';

export default class BGManager {

	static mc: any;
	static SCREEN_ORIGIN: any = {x:400, y:300};
	static shipBounds: any;
	static shipScreenBounds: any;
	static worldBounds: any;

	static initialize(bg_clip: any){
		console.log("BGManager: initialize: ", bg_clip);
		if (bg_clip) {
			BGManager.mc = bg_clip;
			BGManager.mc.x = BGManager.SCREEN_ORIGIN.x;
			BGManager.mc.y = BGManager.SCREEN_ORIGIN.y;
		}
		BGManager.worldBounds = VectorMath.newBounds(-1350, 1350, -1025, 1025);
		BGManager.shipBounds = {};
		VectorMath.copyBounds(BGManager.shipBounds, BGManager.worldBounds);
		VectorMath.insetBounds(BGManager.shipBounds, 100, 100);
		BGManager.shipScreenBounds = VectorMath.newBounds(BGManager.SCREEN_ORIGIN.x - 300,
												BGManager.SCREEN_ORIGIN.x + 300,
												BGManager.SCREEN_ORIGIN.y - 200,
												BGManager.SCREEN_ORIGIN.y + 200);
	}

	static sync(ship:Ship):void {
		if (BGManager.mc) {
			BGManager.mc.x = ship.mc.x - ship.coords.x;
			BGManager.mc.y = ship.mc.y - ship.coords.y;
		}
	}
}
