const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const ClickToProceedIndicator = require('../prefabs/clickToProceedIndicator')

class Menu extends Phaser.State {

    init() {
        new GradientBG(this.game);
        if (!JSON.parse(localStorage.getItem(this.game.global.key_askForFeedback))) {
            this.restartGame();
        }
    }

  create() {
    new ClickToProceedIndicator(this.game);
    this.add.existing(contentGeneration.makeFeedbackSlide(this.game));

    this.input.onDown.add(this.restartGame, this);
  }

  update() {}

  restartGame () {
      return this.game.state.start('menu');
  }

}

module.exports = Menu;
