const contentGeneration = require('../contentGeneration')
const styles = require('../styles')

const GradientBG = require('../prefabs/gradientBG')
const CenteredContent = require('../prefabs/centeredContent')
const TextButton = require('../prefabs/textButton')

class Settings extends Phaser.State {

  create() {
      new GradientBG(this.game);

      const leaveButton = new TextButton(this.game, this.game.world.width, 'Back to game', () => {
        const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
        return this.game.state.start('menu', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
      });
      leaveButton.setAnchor(1);
  }

  update() {}
}

module.exports = Settings;