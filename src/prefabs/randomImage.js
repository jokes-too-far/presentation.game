
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class RandomImage extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'randomImage', frame);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default RandomImage;
