const contentGeneration = require('../contentGeneration')
const styles = require('../styles')

const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

const CheckBox = require('../prefabs/checkBox')
const NumericalSlider = require('../prefabs/numericalSlider')

class Settings extends Phaser.State {

  create() {
      new GradientBG(this.game);

      const leaveButton = new TextButton(this.game, this.game.world.width, 'Back to game', () => {
        const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
        return this.game.state.start('menu', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
      });
      leaveButton.setAnchor(1);

      let yOffset = 1;
      new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Play sound effects', this.game.global.key_shouldPlaySounds);
      yOffset++;
      new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Introduction Slide', this.game.global.key_shouldDoIntroSlide);
      new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Pause for questions', this.game.global.key_pauseForQuestions);
      new CheckBox(this.game, this.game.height * yOffset++ / 10, 'Ask for feedback', this.game.global.key_askForFeedback);
      yOffset++;
      new NumericalSlider(this.game, this.game.height * yOffset++ / 10, 'Slides', this.game.global.key_totalSlides, 2, 30);
  }

  update() {}
}

module.exports = Settings;
