/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Upgrades2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "03e5ef53d1c2f614f95c6d92a2b5214867c231dc",
        "./Upgrades2/costumes/03e5ef53d1c2f614f95c6d92a2b5214867c231dc.svg",
        { x: -29.10003499999999, y: 68.77510258773805 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Upgrades2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-72, -109);
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
