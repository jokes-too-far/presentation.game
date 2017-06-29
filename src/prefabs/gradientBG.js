
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class GradientBG extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, color) {
    super(game, 0, 0, 'gradient');
    this.width = game.width;
    this.height = game.height;
    this.tint = color;
    game.add.existing(this);
  }
}

module.exports = GradientBG;
