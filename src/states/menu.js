const contentGeneration = require('../contentGeneration')
const styles = require('../styles')

const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    styles.backgroundColor(this.game);

    const theme = contentGeneration.pickTheme(this.game);
    this.game.global.title = contentGeneration.generateTitle(this.game, theme);
    if (Math.random() < (this.game.global.bonusSlideChancePercent/100)){
      this.game.global.addBonusSlide = 1;
    }else{
      this.game.global.addBonusSlide = 0;
    };

    const slides = contentGeneration.makeSlides(this.game, theme);
    new CenteredContent(this.game, this.game.global.title);

    new TextButton(this.game, 25, this.game.world.height* 0.9, 'Start Presentation', () => {
      this.game.state.start('introduction', null, null, true, false, slides);
    });

    new TextButton(this.game, 25, this.game.world.height, 'Reroll Theme', () => {
      this.game.state.start('menu', null, null, true, false, slides);
    });
  }

  update() {}
}

module.exports = Menu;
