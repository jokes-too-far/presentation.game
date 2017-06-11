import contentGeneration from '../contentGeneration'
import GradientBG from '../prefabs/gradientBG'
import CenteredContent from '../prefabs/centeredContent'

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

export default Menu;
