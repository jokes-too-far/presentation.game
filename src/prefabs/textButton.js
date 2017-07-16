const styles = require('../styles')
const TextButtonBorder = require('./textButtonBorder')
const transition = require('../transition')

class TextButton extends Phaser.Text {

  constructor(game, x, text, destination, elementsToTransition, extraParams) {
    super(game, x, game.height, text, styles.fonts.medium(game));

    this.anchor.set(0, 1);
    this.border = new TextButtonBorder(game, this, () => {
        transition.out(game, elementsToTransition, () => {
            game.state.start(destination, true, false, extraParams);
        });
    });

    game.add.existing(this);
  }

  setAnchor(x) {
      this.anchor.set(x, this.anchor.y);
      this.border.anchor.set(x, this.anchor.y);
  }

}

module.exports = TextButton;
