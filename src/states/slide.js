const GradientBG = require('../prefabs/gradientBG')
const SlideTitle = require('../prefabs/slideTitle')
const SlideNumber = require('../prefabs/slideNumber')
const SlideTimer = require('../prefabs/slideTimer')
const TextButton = require('../prefabs/textButton')

class Slide extends Phaser.State {

  init(slides) {
    this.slides = slides;
    if (this.game.global.addBonusSlide){
      this.slideNumber = this.game.global.total_slides + 2 - (this.slides.length - 1);
    } else {
      this.slideNumber = this.game.global.total_slides - (this.slides.length - 1);
    }
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

    const backButton = new TextButton(this.game, 0, this.game.world.height, 'Back to menu', () => {
        this.game.state.start('menu')
    });
    backButton.anchor.setTo(0, 1);

    // Actual content
    const content = this.slides[0];
    this.game.add.existing(content);

  }

  update() {}

  progress() {
    const transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
    const remainingSlides = this.slides.splice(1, this.slides.length - 1);
    if(remainingSlides.length){
      return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false, remainingSlides);
    }
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false)
  }

}

module.exports = Slide;
