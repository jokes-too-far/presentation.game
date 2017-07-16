const contentGeneration = require('../contentGeneration')
const styles = require('../styles')
const GradientBG = require('../prefabs/gradientBG')

const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

class Menu extends Phaser.State {

  create() {
    styles.backgroundColor(this.game);
    new GradientBG(this.game);

    const theme = contentGeneration.pickTheme(this.game);
    this.game.global.title = contentGeneration.generateTitle(this.game, theme);
    if (Math.random() < (this.game.global.bonusSlideChancePercent/100)){
      this.game.global.addBonusSlide = 1;
    }else{
      this.game.global.addBonusSlide = 0;
    };

    const slides = contentGeneration.makeSlides(this.game, theme);
    new CenteredContent(this.game, this.game.global.title);

    const startButton = new TextButton(this.game, 0, 'Start', () => {
        return this.game.state.start('introduction', true, false, slides);
    });
    this.game.add.tween(startButton.scale).to(
        {x: 1.1, y: 1.1,},
        1500,
        Phaser.Easing.Linear.In,
        true
    ).yoyo(true, 0).repeatAll(-1);

    const rerollButton = new TextButton(this.game, this.game.world.centerX, 'Reroll Theme', () => {
      return this.game.state.start('menu');
    });
    rerollButton.setAnchor(0.5);

    const settingsButton = new TextButton(this.game, this.world.width - 20, 'Settings', () => {
      return this.game.state.start('settings', true, false, slides);
    });
    settingsButton.setAnchor(1);
  }

  update() {}
}

module.exports = Menu;
