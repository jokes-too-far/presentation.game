class Slide extends Phaser.State {

  constructor() {
    super();
  }

  init(slideNumber) {
    this.slideNumber = slideNumber || (slideNumber === 0 ? 0 : 10)
  }

  create() {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.progress, this);
  }

  update() {

  }

  progress() {
    var transitions = ['SlideLeft', 'SlideRight', 'SlideTop', 'SlideBottom', 'ScaleUp']
    var transitionName = Phaser.ArrayUtils.getRandomItem(transitions)
    if(this.slideNumber && this.slideNumber > 0){
      return this.game.state.start('slide', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName], false, false, this.slideNumber -1);
    }
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName])
  }

}

export default Slide;
