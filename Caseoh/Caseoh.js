/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Caseoh extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("OIP", "./Caseoh/costumes/OIP.svg", {
        x: -66.60271074314494,
        y: 122.43376087715441,
      }),
    ];

    this.sounds = [new Sound("pop", "./Caseoh/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(11, 51);
    while (true) {
      this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
      this.direction += 15;
      yield;
    }
  }
}
