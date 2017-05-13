import Title from '../prefabs/slideTitle'
import SlideNumber from '../prefabs/slideNumber'
import OneBigWord from '../prefabs/oneBigWord'

class Slide extends Phaser.State {

  constructor() {
    super();
  }

  init(slideNumber) {
    this.slideNumber = slideNumber;
  }

  create() {
    new Title(this.game, this.game.global.title);
    new SlideNumber(this.game, this.slideNumber);
    new OneBigWord(this.game, this.game.global.slideTitles[this.slideNumber]);
    this.game.time.events.add(this.game.config.transition_timeout, this.progress, this);
  }

  update() {

  }

  progress() {
    var transitionName = Phaser.ArrayUtils.getRandomItem(this.game.config.transition_list)
    console.log("Slide:", this.slideNumber, "(of ", this.game.config.total_slides, ") Timeout: ", this.game.config.transition_timeout, 'Using:', transitionName)
    if(this.slideNumber && this.slideNumber > 0){
      return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false, this.slideNumber - 1);
    }
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false)
  }

}

export default Slide;
