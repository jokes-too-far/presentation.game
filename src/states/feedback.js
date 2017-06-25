const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    new GradientBG(this.game);

    const feedbackText = contentGeneration.makeFeedbackSlide();
    new CenteredContent(this.game, feedbackText);

    this.saveVarsToLocalStorage();

    this.input.onDown.add(this.restartGame, this);
  }

  saveVarsToLocalStorage(){

  }

  resetGlobalVariables(){

  }


  update() {}

  restartGame () {
    this.resetGlobalVariables();
    this.game.state.start('menu');
  }

}

module.exports = Menu;
