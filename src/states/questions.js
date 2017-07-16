const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')

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

    this.input.onDown.add(this.goToFeedback, this);
  }


  update() {}

  goToFeedback () {
    const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
    return this.game.state.start('feedback', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
  }

}

module.exports = Questions;
