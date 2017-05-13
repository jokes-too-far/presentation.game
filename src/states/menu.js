import themes from '../contentGeneration/themes'
import titleGenerator from '../contentGeneration/titleGenerator'

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    this.theme = Phaser.ArrayUtils.getRandomItem(themes);
    this.title = titleGenerator(this.theme);
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, this.title, {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame() {
    this.game.state.start('slide', null, null, true, false, this.game.config.total_slides, this.theme);
  }

}

export default Menu;
