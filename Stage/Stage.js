/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("4118106", "./Stage/costumes/4118106.svg", { x: 0, y: 0 }),
      new Costume("image", "./Stage/costumes/image.svg", {
        x: 240.5000000000001,
        y: 180.00000000000009,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.totalCookies = -25;
    this.vars.xspeed = -2;
    this.vars.yspeed = -37;

    this.watchers.totalCookies = new Watcher({
      label: "Total Cookies",
      style: "large",
      visible: true,
      value: () => this.vars.totalCookies,
      x: 440,
      y: 174,
    });
  }
}
