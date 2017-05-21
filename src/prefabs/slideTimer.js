
//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SlideTimer extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, event) {
    super(game, 20, game.height-30, "0", {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 5,
    });
    this.timer = event.timer;
    this.anchor.set(0.5);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {
    this.text = Math.ceil(this.timer.duration / 1000);
  }

}

export default SlideTimer;
