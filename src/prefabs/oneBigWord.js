
//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class OneBigWord extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, text) {
    super(game, game.world.centerX, game.world.centerY, text, {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 5,
    });
    this.anchor.set(0.5);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default OneBigWord;
