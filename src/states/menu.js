import contentGeneration from '../contentGeneration'
import uiThemes from '../contentGeneration/uiThemes'

import CenteredContent from '../prefabs/centeredContent'

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    uiThemes(this.game);
    const theme = Phaser.ArrayUtils.getRandomItem(contentGeneration.themes);
    this.game.global.title = contentGeneration.generateTitle(theme);
    this.game.global.slideTitles = contentGeneration.getWords(theme, this.game.global.total_slides + 1);
    new CenteredContent(this.game, this.game.global.title);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame() {
    this.game.state.start('slide', null, null, true, false, this.game.global.total_slides);
  }

}

export default Menu;
