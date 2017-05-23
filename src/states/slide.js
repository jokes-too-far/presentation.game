import SlideTitle from '../prefabs/slideTitle'
import SlideNumber from '../prefabs/slideNumber'
import SlideTimer from '../prefabs/slideTimer'

class Slide extends Phaser.State {

  init(slides) {
    this.slides = slides;
    this.slideNumber = this.game.global.total_slides - (this.slides.length - 2);
    console.log('slides:', slides);
  }

  create() {
    // Meta slide stuff
    new SlideTitle(this.game, this.game.global.title);
    new SlideNumber(this.game, this.slideNumber);
    const event = this.game.time.events.add(this.game.global.transition_timeout, this.progress, this);
    new SlideTimer(this.game, event);

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

export default Slide;
