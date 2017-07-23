const GradientBG = require('../prefabs/gradientBG')
const SlideNumber = require('../prefabs/slideNumber')
const SlideTimer = require('../prefabs/slideTimer')
const TextButton = require('../prefabs/textButton')

const contentGeneration = require('../contentGeneration')
const transition = require('../transition')

class Introduction extends Phaser.State {

  init(slides) {
    new GradientBG(this.game);
    this.slides = slides;
    this.slideNumber = 0;
    if (!JSON.parse(localStorage.getItem(this.game.global.key_shouldDoIntroSlide))) {
        this.game.state.start('slide', slides);
        //this.progress();
    }
  }

  create() {
    const tweenedUI = [];
    // Actual content
    const content = contentGeneration.makeIntroductionSlide(this.game);
    this.game.add.existing(content);

    // Meta slide stuff
    const slideNumber = new SlideNumber(this.game, this.slideNumber);

    if (JSON.parse(localStorage.getItem(this.game.global.key_shouldPlaySounds))) {
        const timer = this.game.time.create(true);
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND - 3000, () => {
          this.game.sound.play('boop');
        });
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND - 2000, () => {
          this.game.sound.play('boop');
        });
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND - 1000, () => {
          this.game.sound.play('boop');
        });
        timer.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND, () => {
          if (Math.random() < this.game.global.differentSoundPercentChance / 100) {
            console.log('different');
            this.game.sound.play(this.game.rnd.pick(this.game.global.transition_sounds));
          } else {
            this.game.sound.play('beep');
          }
        });
        timer.start();
    }

    const event = this.game.time.events.add(JSON.parse(localStorage.getItem(this.game.global.key_timeOnSlide)) * Phaser.Timer.SECOND, () => {
        transition.out(this.game, [content], 'slide', this.slides)}
        , this);
    const timer = new SlideTimer(this.game, event);

    const returnButton = new TextButton(this.game, 0, 'Back to menu', 'menu', tweenedUI);

    tweenedUI.push(content);
    tweenedUI.push(slideNumber);
    tweenedUI.push(returnButton);
    tweenedUI.push(timer);

    transition.in(this.game, tweenedUI);
  }

  update() {}


}

module.exports = Introduction;
