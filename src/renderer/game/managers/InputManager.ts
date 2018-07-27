
export default class InputManager {

	static QUIT:number = 0;
	static ROTATE_LEFT:number = 1;
	static ROTATE_RIGHT:number = 2;
	static FORWARD:number =3;
	static BACK:number = 4;
	static SHOOT:number = 5;
	static SUPER_SHOOT:number = 6;
	static USE_POWERUP:number = 7;
	static SHIELD:number = 8;
	static XTRA:number = 9;
	static NUM_STATES:number = 10;
	static keyMap: Map<number, number>;
	static inputState: Map<number, boolean>;

    static LEFT: number = 37;
    static UP: number = 38;
    static RIGHT: number = 39;
    static DOWN: number = 40;
    static SPACE: number = 32;
    static SHIFT: number = 16;


	static keyMapInitialized:boolean = false;
	static keysDown: Map<number, boolean>;

	static init():void
	{
        InputManager.keyMapInitialized = InputManager.initKeymap();
		document.addEventListener('keydown', InputManager.keyDown);
		document.addEventListener('keyup', InputManager.keyUp);
	}

	static isDown(keyCode: number): boolean
	{
		return InputManager.keysDown.get(keyCode);
	}

	static keyDown(event:any):void
	{
		InputManager.keysDown.set(event.keyCode, true);
	}

	static keyUp(event:any):void
	{
		InputManager.keysDown.set(event.keyCode, false);
	}

	static initKeymap():boolean {
        InputManager.keyMap = new Map<number, number>();
        InputManager.inputState = new Map<number, boolean>();
        InputManager.keysDown = new Map<number, boolean>();

		InputManager.keyMap.set(InputManager.QUIT, 81); //Q
		InputManager.keyMap.set(InputManager.ROTATE_LEFT, InputManager.LEFT);
		InputManager.keyMap.set(InputManager.ROTATE_RIGHT, InputManager.RIGHT);
		InputManager.keyMap.set(InputManager.FORWARD, InputManager.UP);
		InputManager.keyMap.set(InputManager.BACK, InputManager.DOWN);
		InputManager.keyMap.set(InputManager.SHOOT, InputManager.SPACE);
		InputManager.keyMap.set(InputManager.SUPER_SHOOT, 88); //X
		InputManager.keyMap.set(InputManager.USE_POWERUP, InputManager.SHIFT);
		InputManager.keyMap.set(InputManager.SHIELD, 83); //S
		InputManager.keyMap.set(InputManager.XTRA, 88); //X

		InputManager.inputState.set(InputManager.QUIT, false);
		InputManager.inputState.set(InputManager.ROTATE_LEFT, false);
		InputManager.inputState.set(InputManager.ROTATE_RIGHT, false);
		InputManager.inputState.set(InputManager.FORWARD, false);
		InputManager.inputState.set(InputManager.BACK, false);
		InputManager.inputState.set(InputManager.SHOOT, false);
		InputManager.inputState.set(InputManager.SUPER_SHOOT, false);
		InputManager.inputState.set(InputManager.USE_POWERUP, false);
		InputManager.inputState.set(InputManager.SHIELD, false);
		InputManager.inputState.set(InputManager.XTRA, false);

		return true;
	}

	static processInput():void{

		if (!InputManager.keyMapInitialized) InputManager.keyMapInitialized = InputManager.initKeymap();
		InputManager.processKeyboardInput();
	}

	static processKeyboardInput(): void {
        InputManager.inputState.set(InputManager.QUIT, InputManager.isDown(InputManager.keyMap.get(InputManager.QUIT)));
        InputManager.inputState.set(InputManager.ROTATE_LEFT, InputManager.isDown(InputManager.keyMap.get(InputManager.ROTATE_LEFT)));
        InputManager.inputState.set(InputManager.ROTATE_RIGHT, InputManager.isDown(InputManager.keyMap.get(InputManager.ROTATE_RIGHT)));
        InputManager.inputState.set(InputManager.FORWARD, InputManager.isDown(InputManager.keyMap.get(InputManager.FORWARD)));
        InputManager.inputState.set(InputManager.BACK, InputManager.isDown(InputManager.keyMap.get(InputManager.BACK)));
        InputManager.inputState.set(InputManager.SHOOT, InputManager.isDown(InputManager.keyMap.get(InputManager.SHOOT)));
        InputManager.inputState.set(InputManager.SUPER_SHOOT, InputManager.isDown(InputManager.keyMap.get(InputManager.SUPER_SHOOT)));
        InputManager.inputState.set(InputManager.USE_POWERUP, InputManager.isDown(InputManager.keyMap.get(InputManager.USE_POWERUP)));
        InputManager.inputState.set(InputManager.SHIELD, InputManager.isDown(InputManager.keyMap.get(InputManager.SHIELD)));
        InputManager.inputState.set(InputManager.XTRA, InputManager.isDown(InputManager.keyMap.get(InputManager.XTRA)));
	}

	static checkInputState(keyMapIndex: number): boolean {
		return InputManager.inputState.get(keyMapIndex);
	}

/*
	Key.BACKSPACE  The key code value for the Backspace key. 8
	Key.CAPSLOCK  The key code value for the Caps Lock key. 20
	Key.CONTROL  The key code value for the Control key. 17
	Key.DELETEKEY  The key code value for the Delete key. 46
	Key.DOWN  The key code value for the Down Arrow key. 40
	Key.END  The key code value for the End key. 35
	Key.ENTER  The key code value for the Enter key. 13
	Key.ESCAPE  The key code value for the Escape key. 27
	Key.HOME  The key code value for the Home key. 36
	Key.INSERT  The key code value for the Insert key. 45
	Key.LEFT  The key code value for the Left Arrow key. 37
	Key.PGDN  The key code value for the Page Down key. 34
	Key.PGUP  The key code value for the Page Up key. 33
	Key.RIGHT  The key code value for the Right Arrow key. 39
	Key.SHIFT  The key code value for the Shift key. 16
	Key.SPACE  The key code value for the Spacebar. 32
	Key.TAB  The key code value for the Tab key. 9
	Key.UP  The key code value for the Up Arrow key. 38
*/

}
