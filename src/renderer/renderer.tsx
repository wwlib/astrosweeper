import * as React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';

import * as PIXI from 'pixi.js'
import animate = require('pixi-animate');

const findRoot = require('find-root');
const root = findRoot(__dirname);
const shipClassPath = root + '/assets/ship/ship.js';
const basePath = root + '/assets/ship';
const shipClass: any = require(shipClassPath);
let shipInstance: any = null;

const canvasElement: HTMLCanvasElement = document.getElementById("stage") as HTMLCanvasElement;

let renderer = PIXI.autoDetectRenderer(1280, 720, {
    view: canvasElement,
    backgroundColor: 0x0,
    antialias: true
});

let stage: PIXI.Container = new PIXI.Container();
animate.load(shipClass.library.ship, stage, loaderCallback as any, basePath);
function update() {
    renderer.render(stage);
    requestAnimationFrame(update);
}
update();

function loaderCallback(instance: any, loader: any):void {
    console.log(instance);
    shipInstance = instance;
    shipInstance.ship.gotoAndStop(0);
    shipInstance.ship.ship_anim.gotoAndStop('idle');
    shipInstance.ship.ship_shield.visible = false;
    shipInstance.ship.hit_target.visible = false;

    render(
        <Application shipInstance={shipInstance}/>,
        document.getElementById('app')
    );
}
