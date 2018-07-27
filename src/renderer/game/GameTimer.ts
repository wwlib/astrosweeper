export default class GameTimer {

	private _startTime: number;

	GameTimer () {
		this._startTime = this.getTime();
	}

	getTime(): number
	{
		return new Date().getTime(); //33; //1000/30; 1/30th of a second
	}

	restartTimer():void {
		this._startTime = this.getTime(); //date.getMilliseconds(); //getTime();
	}

	milliseconds(): number {
		return (this.getTime() - this._startTime);
	}

	seconds(): number {
		return ( Math.floor( (this.getTime() - this._startTime)/1000 ) );
	}

	minutes(): number {
		return Math.floor(this.seconds() / 60);
	}

	remaining(time_allowed: number): number {
		return time_allowed - this.milliseconds();
	}

	expire():void {
		this._startTime = -100000;
	}

	display():String {

		var mins:String;
		var secs:String;

		mins = "00" + this.minutes();
		mins = mins.substr(mins.length - 2, 2);

		secs = "00" + this.seconds();
		secs = secs.substr(secs.length - 2, 2);

		return mins + ":" + secs;
	}

	displayRemaining(time_allowed: number):String {

		var mins:String;
		var secs:String;
		var millisRemaining: number;
		var secsRemaining: number;
		var minsRemaining: number;

		millisRemaining = time_allowed - this.milliseconds();
		secsRemaining = Math.floor(millisRemaining / 1000);
		minsRemaining = Math.floor(secsRemaining / 60);

		if (millisRemaining >=0) {
			mins = "00" + minsRemaining;
			mins = mins.substr(mins.length - 2, 2);

			secs = "00" + secsRemaining;
			secs = secs.substr(secs.length - 2, 2);
		} else {
			mins = "00";
			secs = "00";
		}

		return mins + ":" + secs;
	}
}
