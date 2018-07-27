export default class MathTables{

	static sine: number[] = [];     // sin table
	static cosine: number[] =[];   // cosine table
	static PI: number;
	static angleDivisions: number = 32;

	static tablesInitialized: boolean = MathTables.initTables();

	constructor(){
	}

	static initTables(): boolean {

		 MathTables.PI = Math.PI;
		// loop through all angles and add to the arrays

		for (var temp_ang: number = 360; temp_ang >= 0; temp_ang--) {
			 MathTables.sine[temp_ang] = Math.sin( MathTables.PI*temp_ang/180.0);
			 MathTables.cosine[temp_ang] = Math.cos( MathTables.PI*temp_ang/180.0);
		}

		return true;
	}

	static traceTables() {

		for (var temp_ang: number = 360; temp_ang >= 0; temp_ang--) {
			//trace("Ang: " + temp_ang + ", Sin: " + sine[temp_ang] + ", Cos: " + cosine[temp_ang]);
		}
	}

	static setVelocity(angle_index: number, speed: number, velocity: any):void {

		var angle: number = 360 - Math.floor((angle_index - 1) * (360 /  MathTables.angleDivisions));
		velocity.y = (MathTables.cosine[angle] * -1) * speed;
		velocity.x =   (MathTables.sine[angle] * -1) * speed;
	}
}
