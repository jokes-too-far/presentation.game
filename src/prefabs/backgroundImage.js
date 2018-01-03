class BackgroundImage extends Phaser.Sprite {

    constructor(game) {
        const key = game.rnd.pick(game.global.bgs);
        super(game, game.world.centerX, game.world.centerY, key);
        this.anchor.setTo(0.5);
        game.add.existing(this);
    }

    update() {}

}

module.exports = BackgroundImage;
