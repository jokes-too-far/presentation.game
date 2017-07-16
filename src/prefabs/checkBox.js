const SettingsLabel = require('./settingsLabel')

class CheckBox extends Phaser.Sprite {

  constructor(game, y, labelText, linkedStorageKey) {
      const x = game.width * 2/3;
      super(game, x + 10, y, 'checkBox');
      this.anchor.set(0, 0.5);

      new SettingsLabel(game, x - 10, y, labelText);

      const initialValue = JSON.parse(localStorage.getItem(linkedStorageKey));
      this.setFrameByState(initialValue);

      this.inputEnabled = true;
      this.events.onInputDown.add(() => {
          const value = JSON.parse(localStorage.getItem(linkedStorageKey));
          localStorage.setItem(linkedStorageKey, !value);
          this.setFrameByState(!value);
      });
      
      game.add.existing(this);
  }

  update() {}

  setFrameByState(state) {
      let frame = 0;
      if (state) {
          frame = 1;
      }
      this.frame = frame;
  }

}

module.exports = CheckBox;
