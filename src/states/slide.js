class Slide extends Phaser.State {

  constructor() {
    super();
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
    //TODO: make this go to another slide until the timer is up.
    this.game.state.start('gameover', Phaser.Plugin.StateTransition.Out[transitionName], Phaser.Plugin.StateTransition.In[transitionName]);
  }

}

export default Slide;
