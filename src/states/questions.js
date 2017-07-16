const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const ClickToProceedIndicator = require('../prefabs/clickToProceedIndicator')

class Questions extends Phaser.State {

  constructor() {
    super();
  }

  init() {
      new GradientBG(this.game);
      if (!JSON.parse(localStorage.getItem(this.game.global.key_pauseForQuestions))) {
          this.goToFeedback();
      }
  }

  create() {
    new CenteredContent(this.game, contentGeneration.makeQuestionsTitle(this.game));
    new ClickToProceedIndicator(this.game);

    this.input.onDown.add(this.goToFeedback, this);
  }


  update() {}

  goToFeedback () {

    return this.game.state.start('feedback');
  }

}

module.exports = Questions;
