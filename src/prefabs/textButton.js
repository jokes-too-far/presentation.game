const styles = require('../styles')
const TextButtonBorder = require('./textButtonBorder')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class TextButton extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, x, text, callback) {
    super(game, x, game.height * 2, text, styles.fonts.medium(game));

    this.anchor.set(0, 1);
    this.border = new TextButtonBorder(game, this, callback);

    game.add.existing(this);
    game.add.tween(this).to({y: game.height}, 750 + Math.random() * 250, Phaser.Easing.Elastic.InOut).start();
  }

  setAnchor(x) {
      this.anchor.set(x, this.anchor.y);
      this.border.anchor.set(x, this.anchor.y);
  }

  //Code ran on each frame of game
  update() {

  }

}

module.exports = TextButton;
