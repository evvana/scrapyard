/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Upgrades3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Raw_Chicken_JE3_BE3",
        "./Upgrades3/costumes/Raw_Chicken_JE3_BE3.svg",
        { x: -29.10003999999998, y: 68.77510258773805 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Upgrades3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(60, -109);
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
