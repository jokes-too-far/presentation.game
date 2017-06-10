import styles from '../styles'

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
class SlideTitle extends Phaser.Text {

  //initialization code in the constructor
  constructor(game, title) {
    super(game, game.width * 0.5, 20, title, styles.fonts.small(game));
    this.anchor.set(0.5, 0);
    game.add.existing(this);
  }

  //Code ran on each frame of game
  update() {

  }

}

export default SlideTitle;
