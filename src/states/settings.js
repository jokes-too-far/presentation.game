const contentGeneration = require('../contentGeneration')
const styles = require('../styles')
const transition = require('../transition')

const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

const CheckBox = require('../prefabs/checkBox')
const NumericalSlider = require('../prefabs/numericalSlider')

class Settings extends Phaser.State {

  create() {
      const tweenedUI = [];

      const leaveButton = new TextButton(this.game, this.game.world.width, 'Back to game', 'menu', tweenedUI);
      leaveButton.setAnchor(1);

      let yOffset = 1;
      tweenedUI.push(new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Play sound effects', this.game.global.key_shouldPlaySounds));
      yOffset++;
      tweenedUI.push(new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Introduction Slide', this.game.global.key_shouldDoIntroSlide));
      tweenedUI.push(new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Pause for questions', this.game.global.key_pauseForQuestions));
      tweenedUI.push(new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Ask for feedback', this.game.global.key_askForFeedback));
      tweenedUI.push(new NumericalSlider(this.game, this.game.height * (0.05 + (yOffset++ / 10)), 'Slides', this.game.global.key_totalSlides, 2, 30));
      yOffset++
      tweenedUI.push(new NumericalSlider(this.game, this.game.height * yOffset++ / 10, 'Seconds per Slide', this.game.global.key_timeOnSlide, 5, 60));

      transition.in(this.game, tweenedUI);
  }

  update() {}
}

module.exports = Settings;
