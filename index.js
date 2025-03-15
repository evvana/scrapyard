import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import SprCookie from "./SprCookie/SprCookie.js";
import Upgrades from "./Upgrades/Upgrades.js";
import Upgrades2 from "./Upgrades2/Upgrades2.js";
import Upgrades3 from "./Upgrades3/Upgrades3.js";
import Caseoh from "./Caseoh/Caseoh.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  SprCookie: new SprCookie({
    x: 0,
    y: 17.6424293204,
    direction: 87.6424293204,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Upgrades: new Upgrades({
    x: -203,
    y: -109,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Upgrades2: new Upgrades2({
    x: -72,
    y: -109,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Upgrades3: new Upgrades3({
    x: 60,
    y: -109,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Caseoh: new Caseoh({
    x: 11,
    y: 51,
    direction: 45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
