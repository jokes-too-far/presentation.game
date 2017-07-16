const styles = require('../styles')

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class ClickToProceedIndicator extends Phaser.Text {

  //initialization code in the constructor
  constructor(game) {
    super(game, game.world.centerX, game.height, 'Click anywhere to proceed', styles.fonts.medium(game));
    this.anchor.set(0.5, 1);
    this.game.add.tween(this.scale).to(
        {x: 1.1, y: 1.1,},
        1500,
        Phaser.Easing.Linear.In,
        true
    ).yoyo(true, 0).repeatAll(-1);
    game.add.existing(this);
  }

}

module.exports = ClickToProceedIndicator;
