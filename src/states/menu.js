import contentGeneration from '../contentGeneration'
import styles from '../styles'

import GradientBG from '../prefabs/gradientBG'
import CenteredContent from '../prefabs/centeredContent'

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    styles.backgroundColor(this.game);
    new GradientBG(this.game);

    const theme = contentGeneration.pickTheme();
    this.game.global.title = contentGeneration.generateTitle(this.game, theme);
    if (Math.random() < (this.game.global.bonusSlideChancePercent/100)){
      this.game.global.addBonusSlide = 1;
    }else{
      this.game.global.addBonusSlide = 0;
    };

    const slides = contentGeneration.makeSlides(this.game, theme);
    new CenteredContent(this.game, this.game.global.title);

    this.input.onDown.add(() => {
      this.game.state.start('slide', null, null, true, false, slides);
    });
  }

  update() {}
}

export default Menu;
