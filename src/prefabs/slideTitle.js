
//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SlideTitle extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, title) {
    console.log('making title with text', title);
    super(game, game.width * 0.5, 20, title, {
      font: '16px Arial', fill: '#ffffff', align: 'center'
    });
    this.anchor.set(0.5);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default SlideTitle;
