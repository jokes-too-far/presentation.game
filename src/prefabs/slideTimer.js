const styles = require('../styles')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SlideTimer extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, event) {
    super(game, game.world.centerX, game.height, game.global.transition_timeout / 1000 + ' seconds remaining', styles.fonts.medium(game));
    this.timer = event.timer;
    this.anchor.set(0.5, 1);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {
    this.text = Math.ceil(this.timer.duration / 1000) + ' seconds remaining';
  }

}

module.exports = SlideTimer;
