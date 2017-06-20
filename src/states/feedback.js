import contentGeneration from '../contentGeneration'
import GradientBG from '../prefabs/gradientBG'
import CenteredContent from '../prefabs/centeredContent'

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

export default Menu;