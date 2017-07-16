const numericalSliderLabel = require('./numericalSliderLabel')
const numericalSliderButton = require('./numericalSliderButton')

class NumericalSlider extends Phaser.Group {

  constructor(game, y, text, linkedStorageKey, lowerBound, upperBound) {
    super(game);

    const valueDisplay = new numericalSliderLabel(game, y, JSON.parse(localStorage.getItem(linkedStorageKey)));
    this.add(valueDisplay);
    this.update = () => {
        const newValue = JSON.parse(localStorage.getItem(linkedStorageKey));
        if (valueDisplay.text != newValue) {
            valueDisplay.scale.set(1.3);
            game.add.tween(valueDisplay.scale).to({x:1, y:1}, 200).start();
            valueDisplay.text = newValue;
        }
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
