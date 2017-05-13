import Title from '../prefabs/slideTitle'
import SlideNumber from '../prefabs/slideNumber'
import OneBigWord from '../prefabs/oneBigWord'

import relatedWord from '../contentGeneration/relatedWord'

class Slide extends Phaser.State {

  constructor() {
    super();
  }

  init(slideNumber, theme, presentationTitle) {
    this.slideNumber = slideNumber;
    this.theme = theme;
    this.presentationTitle = presentationTitle;
  }

  create() {
    new Title(this.game, this.presentationTitle);
    new SlideNumber(this.game, this.slideNumber);
    new OneBigWord(this.game, relatedWord(this.theme));
    console.log("Slide:", this.slideNumber, "(of ", this.game.config.total_slides, ") Timeout: ", this.game.config.transition_timeout)
    this.game.time.events.add(this.game.config.transition_timeout, this.progress, this);
  }

  update() {

  }

  progress() {
    var transitions = ['SlideLeft', 'SlideRight', 'SlideTop', 'SlideBottom', 'ScaleUp']
    var transitionName = Phaser.ArrayUtils.getRandomItem(transitions)
    if(this.slideNumber && this.slideNumber > 0){
      return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false, this.slideNumber -1, this.theme, this.presentationTitle);
    }
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName])
  }

}

export default Slide;
