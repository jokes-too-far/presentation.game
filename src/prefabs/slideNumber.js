//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SlideNumber extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, number) {
    const text = (game.config.total_slides - number + 1) + '/' + game.config.total_slides
    super(game, game.width - 20, game.height - 20, text, {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 3,
    });
    this.anchor.set(0.5);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default SlideNumber;
