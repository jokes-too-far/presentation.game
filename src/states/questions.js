const contentGeneration = require('../contentGeneration')
const transition = require('../transition')

const CenteredContent = require('../prefabs/centeredContent')
const ClickToProceedIndicator = require('../prefabs/clickToProceedIndicator')

class Questions extends Phaser.State {

  constructor() {
    super();
  }

  init() {
      if (!JSON.parse(localStorage.getItem(this.game.global.key_pauseForQuestions))) {
          this.game.state.start('feedback');
      }
  }

  create() {
    const tweenedUI = [];
    tweenedUI.push(new CenteredContent(this.game, contentGeneration.makeQuestionsTitle(this.game)));
    tweenedUI.push(new ClickToProceedIndicator(this.game));

    transition.in(this.game, tweenedUI);

    this.input.onDown.add(() => {
        transition.out(this.game, tweenedUI, 'feedback');
    });
  }


  update() {}

}

module.exports = Questions;
