
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class TextButtonBorder extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, parent, callback) {
    super(game, parent.x, game.height, 'button-border');
    this.width = parent.width * 1.1;
    this.height = parent.height * 1.2;
    this.anchor.set(parent.anchor.x, parent.anchor.y);

    this.inputEnabled = true;
    this.events.onInputDown.add(() => {
      callback();
    });

    const shiftTween = Phaser.Timer.SECOND * 3/ 5 ;
    const shiftEase = Phaser.Easing.Exponential.Out;

    this.events.onInputOver.add(() => {
      parent.fill = '#e0f23a';
    });
    this.events.onInputOut.add(() => {
      parent.fill = '#fff';
    });

    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {}

}

module.exports = TextButtonBorder;
