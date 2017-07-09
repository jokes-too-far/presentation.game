const contentGeneration = require('../contentGeneration')
const styles = require('../styles')

const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

class Settings extends Phaser.State {

  create() {
      new GradientBG(this.game);

      new TextButton(this.game, 0, 'Back to game', () => {
        this.game.state.start('menu');
      });
  }

  update() {}
}

module.exports = Settings;
