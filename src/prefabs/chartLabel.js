const styles = require('../styles')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class ChartLabel extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, x, y, text) {
    super(game, x, y, text, styles.fonts.medium(game));
    this.anchor.set(0.5, 0.5);
  }

  //Code ran on each frame of game
  update() {}

}

module.exports = ChartLabel;
