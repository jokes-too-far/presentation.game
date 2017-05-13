class Slide extends Phaser.State {

  constructor() {
    super();
  }

  init(slideNumber) {
    this.slideNumber = slideNumber || (slideNumber === 0 ? 0 : this.game.config.total_slides)
  }

  create() {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);
    this.game.time.events.add(this.game.config.transition_timeout, this.progress, this);
  }

  update() {

  }

  progress() {
    var transitionName = Phaser.ArrayUtils.getRandomItem(this.game.config.transition_list)
    console.log("Slide:", this.slideNumber, "(of ", this.game.config.total_slides, ") Timeout: ", this.game.config.transition_timeout, 'Using:', transitionName)
    if(this.slideNumber && this.slideNumber > 0){
      return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false, this.slideNumber -1);
    }
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false)
  }

}

export default Slide;
