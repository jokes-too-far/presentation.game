import styles from '../styles'

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class CenteredContent extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, text) {
    super(game, game.world.centerX, game.world.centerY, text, styles.fonts.big);
    this.anchor.set(0.5);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default CenteredContent;
