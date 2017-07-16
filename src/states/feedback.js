const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')

class Menu extends Phaser.State {

    init() {
        if (!JSON.parse(localStorage.getItem(this.game.global.key_askForFeedback))) {
            this.restartGame();
        }
    }

  create() {
    new GradientBG(this.game);

    this.add.existing(contentGeneration.makeFeedbackSlide(this.game));

    this.input.onDown.add(this.restartGame, this);
  }

  update() {}

  restartGame () {
      const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
      return this.game.state.start('menu', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
  }

}

module.exports = Menu;
