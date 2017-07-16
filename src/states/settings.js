const contentGeneration = require('../contentGeneration')
const styles = require('../styles')

const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

const CheckBox = require('../prefabs/checkBox')

class Settings extends Phaser.State {

  create() {
      new GradientBG(this.game);

      const leaveButton = new TextButton(this.game, this.game.world.width, 'Back to game', () => {
        const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
        return this.game.state.start('menu', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
      });
      leaveButton.setAnchor(1);

      new CheckBox(this.game, this.game.height * 0.2, 'Introduction Slide', this.game.global.key_shouldDoIntroSlide);
      new CheckBox(this.game, this.game.height * 0.3, 'Pause for questions', this.game.global.key_pauseForQuestions);
      new CheckBox(this.game, this.game.height * 0.4, 'Ask for feedback', this.game.global.key_askForFeedback);
  }

  update() {}
}

module.exports = Settings;
