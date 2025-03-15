/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SprCookie extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Cookie_JE2_BE2", "./SprCookie/costumes/Cookie_JE2_BE2.jpg", {
        x: 160,
        y: 160,
      }),
    ];

    this.sounds = [new Sound("pop", "./SprCookie/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.stage.vars.totalCookies = 0;
  }

  *whenthisspriteclicked() {
    this.stage.vars.totalCookies--;
    this.size = (350 - this.size) / 2;
    this.createClone();
    for (let i = 0; i < 5; i++) { // Create 5 smaller cookies
      this.createClone();
    }
  
  }

  *whenGreenFlagClicked2() {
    this.goto(0, 20);
    this.stage.vars.totalCookies = 0;
    while (true) {
      this.y = 20 + Math.sin(this.degToRad(this.timer * 100)) * 3;
      this.direction = 90 + Math.sin(this.degToRad(this.timer * 100)) * 3;
      this.size = (300 - this.size) / 2;
      yield;
    }
  }

  *startAsClone() {
    this.effects.ghost = 0;
    this.size = this.random(30, 50);
    this.stage.vars.xspeed = this.random(-8, 8);
    this.stage.vars.yspeed = -this.random(8, 16);
    while (true) {
      this.x += this.toNumber(this.stage.vars.xspeed);
      this.y += this.toNumber(this.stage.vars.yspeed);
      this.effects.ghost += 1;
      this.stage.vars.yspeed--;
      yield;
      if (this.touching("edge")) {
        yield* this.wait(0.03);
        this.deleteThisClone();
      }
      yield;
    }
  }
}
