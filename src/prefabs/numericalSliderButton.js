const styles = require('../styles')

class NumericalSliderButton extends Phaser.Text {

  constructor(game, x, y, text, linkedStorageKey, goUpOnPress, lowerBound, upperBound) {
    super(game, x, y, text, styles.fonts.medium(game));
    this.anchor.set(0.5, 0);

    const border = game.add.sprite(this.x, this.y, 'button-border');
    border.width = this.width * 1.2;
    border.height = this.height * 1.2;
    border.anchor.set(this.anchor.x, this.anchor.y);

    border.inputEnabled = true;
    border.events.onInputDown.add(() => {
        let value = JSON.parse(localStorage.getItem(linkedStorageKey));
        if (goUpOnPress) {
            if (value < upperBound) {
                value++;
            }
        } else {
            if (value > lowerBound) {
                value--;
            }
        }
        localStorage.setItem(linkedStorageKey, value);
    });
  }

  update() {}

}

module.exports = NumericalSliderButton;
