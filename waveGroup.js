import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 6;
    this.color = ["rgba(0,199,235,0.4)", "rgba(0,146,199,0.4)", "rgba(0,87,158,0.4)"];
    this.waves = Array.from({ length: this.totalWaves }, (v, i) => i).map((index) => new Wave(index, this.totalPoints, this.color[index]));
    // for (let i = 0; i < this.totalWaves; i++) {
    //   const wave = new Wave();
    // }
  }

  resize(stageWidth, stageHeight) {
    this.waves.forEach((wave) => wave.resize(stageWidth, stageHeight));
  }
  draw(ctx) {
    this.waves.forEach((wave) => wave.draw(ctx));
  }
}
