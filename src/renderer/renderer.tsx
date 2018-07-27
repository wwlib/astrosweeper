import * as React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';

import * as PIXI from 'pixi.js'
import animate = require('pixi-animate');

import ObjectManager from './game/managers/ObjectManager';
import GameController from './game/GameController';
import InputManager from './game/managers/InputManager';
import Ship from './game/Ship';

// const findRoot = require('find-root');
// const root = findRoot(__dirname);
// const shipClassPath = root + '/assets/ship/ship.js';
// const basePath = root + '/assets/ship';
// const shipClass: any = require(shipClassPath);
// let shipInstance: any = null;
let gc: GameController = null;

// prevent scrolling
document.body.style.overflow = 'hidden';

const canvasElement: HTMLCanvasElement = document.getElementById("stage") as HTMLCanvasElement;

let renderer = PIXI.autoDetectRenderer(1280, 720, {
    view: canvasElement,
    backgroundColor: 0x0,
    antialias: true
});

let stage: PIXI.Container = new PIXI.Container();
ObjectManager.init(stage);

// animate.load(shipClass.library.ship, stage, loaderCallback as any, basePath);
function update() {
    if (gc && gc.ready) {
        gc.mainLoop();
    }
    renderer.render(stage);
    requestAnimationFrame(update);
}
update();

gc = new GameController(stage);
gc.start()
    .then((ship: Ship) => {
        render(
            <Application shipMc={ship.mc}/>,
            document.getElementById('app')
        );
    });


// function loaderCallback(instance: any, loader: any):void {
//     console.log(instance);
//     gc = new GameController(stage);
//     shipInstance = instance;
//     shipInstance.ship.gotoAndStop(0);
//     shipInstance.ship.ship_anim.gotoAndStop('idle');
//     shipInstance.ship.ship_shield.visible = false;
//     shipInstance.ship.hit_target.visible = false;
//
//
// }
