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
      const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
      return this.game.state.start('menu', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
  }

}

module.exports = Menu;
