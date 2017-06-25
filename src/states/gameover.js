const contentGeneration = require('../contentGeneration')
const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')

class Menu extends Phaser.State {

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
    this.game.state.start('feedback')
  }

}

module.exports = Menu;
