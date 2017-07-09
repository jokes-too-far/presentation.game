const GradientBG = require('../prefabs/gradientBG')
const SlideNumber = require('../prefabs/slideNumber')
const SlideTimer = require('../prefabs/slideTimer')
const TextButton = require('../prefabs/textButton')

const contentGeneration = require('../contentGeneration')

class Introduction extends Phaser.State {

  init(slides) {
    this.slides = slides;
    this.slideNumber = 0;
  }

  create() {
    new GradientBG(this.game);
    // Meta slide stuff
    new SlideNumber(this.game, this.slideNumber);

    const timer = this.game.time.create(true);
    timer.add(this.game.global.transition_timeout - 3000, () => {
      this.game.sound.play('boop');
    });
    timer.add(this.game.global.transition_timeout - 2000, () => {
      this.game.sound.play('boop');
    });
    timer.add(this.game.global.transition_timeout - 1000, () => {
      this.game.sound.play('boop');
    });
    timer.add(this.game.global.transition_timeout, () => {
      if (Math.random() < this.game.global.differentSoundPercentChance / 100) {
        console.log('different');
        this.game.sound.play(this.game.rnd.pick(this.game.global.transition_sounds));
      } else {
        this.game.sound.play('beep');
      }
    });
    timer.start();

    const event = this.game.time.events.add(this.game.global.transition_timeout, this.progress, this);
    new SlideTimer(this.game, event);

    new TextButton(this.game, 0, this.game.world.height, 'Back to menu', () => {
        this.game.state.start('menu')
    });

    // Actual content
    this.game.add.existing(contentGeneration.makeIntroductionSlide(this.game));
  }

  update() {}

  progress() {
    const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
    return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false, this.slides);
  }

}

module.exports = Introduction;
