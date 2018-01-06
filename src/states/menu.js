const contentGeneration = require('../contentGeneration')
const styles = require('../styles')
const transition = require('../transition')

const BackgroundImage = require('../prefabs/BackgroundImage')
const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

class Menu extends Phaser.State {

  create() {
    const tweenedUI = [];

    const theme = contentGeneration.pickTheme(this.game);
    if (Math.random() < (this.game.global.bonusSlideChancePercent/100)){
      this.game.global.addBonusSlide = 1;
    }else{
      this.game.global.addBonusSlide = 0;
    };

    const titleText = contentGeneration.generateTitle(this.game, theme)
    this.game.global.talkTitle = titleText
    const title = new CenteredContent(this.game, titleText);

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
    new BackgroundImage(this.game);
    console.log(this.game.stage.children);
  }

  update() {}
}

module.exports = Menu;
