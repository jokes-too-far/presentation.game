class Slide extends Phaser.State {

  constructor() {
    super();
  }

  init(slideNumber, theme) {
    this.slideNumber = slideNumber;
    this.theme = theme;
  }

  create() {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, this.theme + this.slideNumber, {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);
    console.log("Slide:", this.slideNumber, "(of ", this.game.config.total_slides, ") Timeout: ", this.game.config.transition_timeout)
    this.game.time.events.add(this.game.config.transition_timeout, this.progress, this);
  }

  update() {

  }

  progress() {
    var transitions = ['SlideLeft', 'SlideRight', 'SlideTop', 'SlideBottom', 'ScaleUp']
    var transitionName = Phaser.ArrayUtils.getRandomItem(transitions)
    if(this.slideNumber && this.slideNumber > 0){
      return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], true, false, this.slideNumber -1, this.theme);
    }
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName])
  }

}

export default Slide;
