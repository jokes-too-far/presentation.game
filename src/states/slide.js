import SlideTitle from '../prefabs/slideTitle'
import SlideNumber from '../prefabs/slideNumber'
import SlideTimer from '../prefabs/slideTimer'

class Slide extends Phaser.State {

  constructor() {
    super();
  }

  init(slideNumber) {
    this.slideNumber = slideNumber;
  }

  create() {
    // Meta slide stuff
    new SlideTitle(this.game, this.game.global.title);
    new SlideNumber(this.game, this.slideNumber);
    const event = this.game.time.events.add(this.game.global.transition_timeout, this.progress, this);
    new SlideTimer(this.game, event);

    // Actual content
    const content = this.game.global.slides[this.slideNumber];
    this.game.add.existing(content);
  }

  update() {

  }

  progress() {
    var transitionName = Phaser.ArrayUtils.getRandomItem(this.game.global.transition_list)
    console.log("Slide:", this.slideNumber, "(of ", this.game.global.total_slides, ") Timeout: ", this.game.global.transition_timeout, 'Using:', transitionName)
    if(this.slideNumber && this.slideNumber > 0){
      return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false, this.slideNumber - 1);
    }
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false)
  }

}

export default Slide;
