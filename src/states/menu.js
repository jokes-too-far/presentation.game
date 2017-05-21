import themes from '../contentGeneration/themes'
import titleGenerator from '../contentGeneration/titleGenerator'
import relatedWords from '../contentGeneration/relatedWords'
import uiThemes from '../contentGeneration/uiThemes'

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    uiThemes(this.game);
    const theme = Phaser.ArrayUtils.getRandomItem(themes.themes);
    this.game.global.title = titleGenerator(theme);
    this.game.global.slideTitles = relatedWords(theme, this.game.global.total_slides + 1);
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, this.game.global.title, {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 5,
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame() {
    this.game.state.start('slide', null, null, true, false, this.game.global.total_slides);
  }

}

export default Menu;
