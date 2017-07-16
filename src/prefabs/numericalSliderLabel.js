const styles = require('../styles')

class NumericalSliderLabel extends Phaser.Text {

  constructor(game, y, text) {
    super(game, game.world.centerX, y, text, styles.fonts.medium(game));
    this.anchor.set(0.5, 0);
  }

  update() {}

}

module.exports = NumericalSliderLabel;
