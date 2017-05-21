import CenteredContent from '../prefabs/centeredContent'

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    new CenteredContent(this.game, 'Questions?');

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
