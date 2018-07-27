export default class VectorMath {

	static newVector(x: number, y: number): any {

		return {x:x, y:y};
	}

	static setVector(vector: any, x: number, y: number):void {

		vector.x = x;
		vector.y = y;
	}

	static copyVector(v1: any, v2: any):void {

		v1.x = v2.x;
		v1.y = v2.y;

	}

	static addVectors(v1: any, v2: any):void {

		v1.x += v2.x;
		v1.y += v2.y;
	}

	static subtractVectors(v1: any, v2: any):void {

		v1.x -= v2.x;
		v1.y -= v2.y;
	}

	static scaleVector(vector: any, scalar: number):void {

		vector.x *= scalar;
		vector.y *= scalar;
	}

	static multVectors(v1: any, v2: any):void {

		v1.x *= v2.x;
		v1.y *= v2.y;
	}

	static getDistance(v1: any, v2: any): number {

		var tempVector: any = {x:0, y:0};
		VectorMath.copyVector(tempVector, v1);
		VectorMath.subtractVectors(tempVector, v2);

		return VectorMath.getMagnitude(tempVector);
	}

	static getMagnitude(vector: any): number {

		return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
	}

	static normalizeVector(vector: any):void {

		var magnitude: number = VectorMath.getMagnitude(vector);

		VectorMath.scaleVector(vector, 1 / magnitude);

	}

	static inBounds(vector: any, bounds: any):Boolean {

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

	static newBounds(xMin: number, xMax: number,
									yMin: number, yMax: number): any {

		return {xMin:xMin, xMax:xMax, yMin:yMin, yMax:yMax};
	}

	static copyBounds(b1: any, b2: any):void {
		b1.xMin = b2.xMin;
		b1.xMax = b2.xMax;
		b1.yMin = b2.yMin;
		b1.yMax = b2.yMax;
	}

	static insetBounds(	bounds: any,
										xinset: number, yinset: number):void {
		bounds.xMin += xinset;
		bounds.xMax -= xinset;
		bounds.yMin += yinset;
		bounds.yMax -= yinset;
	}
}
