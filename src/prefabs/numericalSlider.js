const numericalSliderLabel = require('./numericalSliderLabel')
const numericalSliderButton = require('./numericalSliderButton')

class NumericalSlider extends Phaser.Group {

  constructor(game, y, text, linkedStorageKey, lowerBound, upperBound) {
    super(game);

    const valueDisplay = new numericalSliderLabel(game, y, JSON.parse(localStorage.getItem(linkedStorageKey)));
    this.add(valueDisplay);
    this.update = () => {
        valueDisplay.text = JSON.parse(localStorage.getItem(linkedStorageKey));
    }

    const label = new numericalSliderLabel(game, y, text);
    label.anchor.set(0.5, 1);
    this.add(label);

    this.add(new numericalSliderButton(game, game.world.centerX - game.width * 1/10, y, '-', linkedStorageKey, false, lowerBound, upperBound));
    this.add(new numericalSliderButton(game, game.world.centerX + game.width * 1/10, y, '+', linkedStorageKey, true, lowerBound, upperBound));

    game.add.existing(this);
  }

}

module.exports = NumericalSlider;
