import BarChartBar from './barChartBar'

//Documentation for Phaser's (2.6.2) group:: phaser.io/docs/2.6.2/Phaser.Group.html
class BarChart extends Phaser.Group {

  //initialization code in the constructor
  constructor(game) {
    super(game, null);
    const barsToMake = 4;
    const width = game.world.width * 0.8;
    const height = game.world.height * 0.9;
    for (let i = 1; i < barsToMake + 1; ++i) {
      const bar = new BarChartBar(game);
      this.add(bar);
      bar.width = 50;
      bar.height = (height * 0.7) * (1 / i);      
      bar.anchor.set(0.5,1)
      console.log(bar.x, bar.y, width, height);
    }

    const positions = [];
    for (let i = 1; i < barsToMake + 1; ++i) {
      const x = width / barsToMake * i;
      const y = height - 50;
      positions.push({x: x, y:y});
    }
    Phaser.ArrayUtils.shuffle(positions);

    for (let i = 1; i < barsToMake + 1; ++i) {
      this.children[i - 1].x = positions[i - 1].x;
      this.children[i - 1].y = positions[i - 1].y;
    }
  }

  update() {
    console.log(this.inWorld);
  }
}

export default BarChart;
