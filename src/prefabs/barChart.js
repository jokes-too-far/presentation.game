const BarChartBar = require('./barChartBar')
const ChartLabel = require('./chartLabel')

//Documentation for Phaser's (2.6.2) group:: phaser.io/docs/2.6.2/Phaser.Group.html
class BarChart extends Phaser.Group {

  //initialization code in the constructor
  constructor(game, words) {
    super(game, null);
    const barsToMake = 4;
    const width = game.world.width * 0.8;
    const height = game.world.height * 0.8;

    // Make bars
    for (let i = 1; i < barsToMake + 1; ++i) {
      const bar = new BarChartBar(game);
      this.add(bar);
      bar.width = 50;
      bar.height = (height * 0.7) * (1 / i);
      bar.anchor.set(0.5, 1);
    }

    // Randomize the positions of the bars
    const positions = [];
    const labelPositions = [];
    for (let i = 1; i < barsToMake + 1; ++i) {
      const x = width / barsToMake * i;
      const y = height - 50;
      positions.push({x: x, y:y});
      labelPositions.push({x: x, y:y});
    }
    Phaser.ArrayUtils.shuffle(positions);

    for (let i = 1; i < barsToMake + 1; ++i) {
      this.children[i - 1].x = positions[i - 1].x;
      this.children[i - 1].y = positions[i - 1].y;
    }

    const originalBars = this.children.slice();


    // Make labels, in order
    let labelY = 0;
    for (let i = 1; i < barsToMake + 1; ++i) {
      if (labelY == labelPositions[i - 1].y + 20){
        labelY = labelPositions[i - 1].y + 80;
      } else {
        labelY = labelPositions[i - 1].y + 20;
      }
      const label = new ChartLabel(game, labelPositions[i - 1].x, labelY + 20, words.flatten('#noun#'));
      this.add(label);
    }

    // Make shadows
    for (const linkedChild of originalBars) {
      const bar = new BarChartBar(game);
      this.add(bar);
      this.sendToBack(bar);
      bar.tint = 0x0;
      bar.x = linkedChild.x + 5;
      bar.y = linkedChild.y;
      bar.height = linkedChild.height + 5;
      bar.width = linkedChild.width;
      bar.anchor.set(0.5, 1);
    }
  }
}

module.exports = BarChart;
