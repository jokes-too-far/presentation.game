const styles = require('../styles')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class CenteredContent extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, text, delayedAdd) {
    super(game, game.world.centerX, game.world.centerY, text, styles.fonts.big(game));
    this.anchor.set(0.5);
    if (!delayedAdd) {
      game.add.existing(this);
    }
  }

  //Code ran on each frame of game
  update() {}

}

module.exports = CenteredContent;
