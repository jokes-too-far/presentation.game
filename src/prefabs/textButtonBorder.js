
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class TextButtonBorder extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, parent, callback) {
    super(game, parent.x, parent.y, 'button-border');
    this.width = parent.width * 1.1;
    this.height = parent.height * 1.2;
    this.anchor.set(0.5);

    this.inputEnabled = true;
    this.events.onInputDown.add(callback);

    const shiftTween = Phaser.Timer.SECOND * 3/ 5 ;
    const shiftEase = Phaser.Easing.Exponential.Out;

    this.events.onInputOver.add(() => {
      if (parent.animation) parent.animation.stop();
      parent.animation = game.add.tween(parent).to({x: parent.originalX + 20}, shiftTween, shiftEase);
      parent.animation.start();
    });
    this.events.onInputOut.add(() => {
      if (parent.animation) parent.animation.stop();
      parent.animation = game.add.tween(parent).to({x: parent.originalX}, shiftTween, shiftEase);
      parent.animation.start();
    });

    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {}

}

export default TextButtonBorder;
