const styles = require('../styles')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SlideNumber extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, number) {
    const text = number + '/' + game.global.total_slides
    super(game, game.width, game.height, text, styles.fonts.small(game));
    this.anchor.set(1,1);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {

  }

}

module.exports = SlideNumber;
