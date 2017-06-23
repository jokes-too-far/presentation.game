
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

    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {}

}

export default TextButtonBorder;
