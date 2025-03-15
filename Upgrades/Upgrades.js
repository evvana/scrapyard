/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Upgrades extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("R", "./Upgrades/costumes/R.svg", {
        x: -29.100014999999985,
        y: 68.77510758773803,
      }),
    ];

    this.sounds = [new Sound("pop", "./Upgrades/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-203, -109);
    while (true) {
      if (this.touching("mouse")) {
        this.size = (330 - this.size) / 2;
      } else {
        this.size = (300 - this.size) / 2;
      }
      yield;
    }
  }
}
