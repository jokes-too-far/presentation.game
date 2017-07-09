const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')

class Menu extends Phaser.State {

  create() {
    new GradientBG(this.game);

    const feedbackText = contentGeneration.makeFeedbackSlide();
    new CenteredContent(this.game, feedbackText);

    this.input.onDown.add(this.restartGame, this);
  }

  update() {}

  restartGame () {
    this.game.state.start('menu');
  }

}

module.exports = Menu;
