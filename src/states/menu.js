const contentGeneration = require('../contentGeneration')
const styles = require('../styles')
const transition = require('../transition')

const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

class Menu extends Phaser.State {

  create() {
    const tweenedUI = [];

    styles.backgroundColor(this.game);
    new GradientBG(this.game);

    const theme = contentGeneration.pickTheme(this.game);
    if (Math.random() < (this.game.global.bonusSlideChancePercent/100)){
      this.game.global.addBonusSlide = 1;
    }else{
      this.game.global.addBonusSlide = 0;
    };

    const title = new CenteredContent(this.game, contentGeneration.generateTitle(this.game, theme));

    const startButton = new TextButton(this.game, 0, 'Start', 'introduction', tweenedUI, contentGeneration.makeSlides(this.game, theme));

    const rerollButton = new TextButton(this.game, this.game.world.centerX, 'Reroll Theme', 'menu', tweenedUI);
    rerollButton.setAnchor(0.5);

    const settingsButton = new TextButton(this.game, this.world.width - 20, 'Settings', 'settings', tweenedUI);

    tweenedUI.push(title);
    tweenedUI.push(startButton);
    tweenedUI.push(rerollButton);
    tweenedUI.push(settingsButton);

    transition.in(this.game, tweenedUI);

    settingsButton.setAnchor(1);
  }

  update() {}
}

module.exports = Menu;
