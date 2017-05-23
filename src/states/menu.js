import contentGeneration from '../contentGeneration'
import styles from '../styles'

import CenteredContent from '../prefabs/centeredContent'

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    styles.backgroundColor(this.game);
    const theme = Phaser.ArrayUtils.getRandomItem(contentGeneration.themes);
    this.game.global.title = contentGeneration.generateTitle(theme);
    const slides = contentGeneration.getWords(this.game, theme, this.game.global.total_slides + 1);
    new CenteredContent(this.game, this.game.global.title);

    this.input.onDown.add(() => {
      this.game.state.start('slide', null, null, true, false, slides);
    });
  }

  update() {}
}

export default Menu;
