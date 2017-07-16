const GradientBG = require('../prefabs/gradientBG')
const SlideNumber = require('../prefabs/slideNumber')
const SlideTimer = require('../prefabs/slideTimer')
const TextButton = require('../prefabs/textButton')

class Slide extends Phaser.State {

  init(slides) {
    this.slides = slides;
    this.slideNumber = JSON.parse(localStorage.getItem(this.game.global.key_totalSlides)) - (this.slides.length - 1);
    if (this.game.global.addBonusSlide){
      this.slideNumber = this.slideNumber + 2;
    }
    new GradientBG(this.game);
  }

  create() {
    // Meta slide stuff
    new SlideNumber(this.game, this.slideNumber);

    if (JSON.parse(localStorage.getItem(this.game.global.key_shouldPlaySounds))) {
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
    }

    const event = this.game.time.events.add(this.game.global.transition_timeout, this.progress, this);
    new SlideTimer(this.game, event);

    new TextButton(this.game, 0, 'Back to menu', () => {
        this.game.state.start('menu')
    });

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
    this.game.state.start('questions', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false)
  }

}

module.exports = Slide;
