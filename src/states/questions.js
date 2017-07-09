const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')

class Questions extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    new GradientBG(this.game);
    new CenteredContent(this.game, 'Questions?');

    this.input.onDown.add(this.displayFeedback, this);
  }


  update() {}

  displayFeedback () {
    const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
    return this.game.state.start('feedback', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
  }

}

module.exports = Questions;
