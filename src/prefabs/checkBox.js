const SettingsLabel = require('./settingsLabel')

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class CheckBox extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, y, labelText, defaultState) {
      let frame = 0;
      if (defaultState) {
          frame = 1;
      }
      const x = game.width * 2/3;
      super(game, x + 10, y, 'checkBox', frame);
      this.anchor.set(0, 0.5);

      new SettingsLabel(game, x - 10, y, labelText);
      game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {

  }

}

module.exports = CheckBox;
