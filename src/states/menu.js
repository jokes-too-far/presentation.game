import titleGenerator from '../titleGenerator'

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {

    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, titleGenerator(), {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame() {
    this.game.state.start('slide');
  }

}

export default Menu;
