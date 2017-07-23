const contentGeneration = require('../contentGeneration')
const transition = require('../transition')

const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const ClickToProceedIndicator = require('../prefabs/clickToProceedIndicator')

class Menu extends Phaser.State {

    init() {
        new GradientBG(this.game);
        if (!JSON.parse(localStorage.getItem(this.game.global.key_askForFeedback))) {
            this.game.state.start('menu');
        }
    }

  create() {
    const idicator = new ClickToProceedIndicator(this.game);
    const content = contentGeneration.makeFeedbackSlide(this.game)
    this.add.existing(content);

    const tweenedUI = [idicator, content];
    transition.in(this.game, tweenedUI);

    this.input.onDown.add(() => {
        transition.out(this.game, tweenedUI, 'menu');
    });
  }

}

module.exports = Menu;
