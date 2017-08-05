const styles = require('../styles')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SlideTimer extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, title) {
    super(game, game.world.centerX, 0, title, styles.fonts.medium(game));
    this.anchor.set(0.5, 0);
    game.add.existing(this);
  }

}

module.exports = SlideTimer;
