
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class RandomImage extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, theme) {
    const i = Math.ceil(Math.random() * 30);
    console.log(i);
    super(game, game.world.centerX, game.world.centerY, 'theme-picture-' + theme + i);
    this.anchor.set(0.5);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default RandomImage;
