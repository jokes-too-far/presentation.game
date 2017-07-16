
class CenteredSprite extends Phaser.Sprite {

  constructor(game, key) {
    super(game, game.world.centerX, game.world.centerY, key);
    this.anchor.set(0.5, 0.5);
    game.add.existing(this);
  }

  update() {}

}

module.exports = CenteredSprite;
