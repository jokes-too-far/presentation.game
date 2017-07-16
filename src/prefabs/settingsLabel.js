const styles = require('../styles')
//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SettingsLabel extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, x, y, text) {
    super(game, x, y, text, styles.fonts.medium(game));
    game.add.existing(this);
    this.anchor.set(1, 0.5);
  }

  //Code ran on each frame of game
  update() {

  }

}

module.exports = SettingsLabel;
