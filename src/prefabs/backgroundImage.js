class BackgroundImage extends Phaser.Sprite {

    constructor(game) {
        const key = game.rnd.pick(game.global.bgs);
        super(game, game.world.centerX, game.world.centerY, key);
        this.anchor.setTo(0.5);
        const widthRatio = game.width / this.width;
        const heightRatio = game.height / this.height;
        const ratio = Math.max(heightRatio, widthRatio);
        this.width = this.width * ratio;
        this.height = this.height * ratio;
        game.add.existing(this);
    }

    update() {}

}

module.exports = BackgroundImage;
