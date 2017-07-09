const CenteredContent = require('./centeredContent')
const styles = require('../styles');

//Documentation for Phaser's (2.6.2) group:: phaser.io/docs/2.6.2/Phaser.Group.html
class BulletPointSlide extends Phaser.Group {

  //initialization code in the constructor
  constructor(game, preTitleText, titleText, bulletPoints) {
    super(game, null);
    const title = new CenteredContent(game, preTitleText);
    const mediumStyle = styles.fonts.medium(game)
    title.setStyle(mediumStyle);
    title.y = 0;
    title.anchor.setTo(0.5, 0);

    const name = new CenteredContent(game, titleText);
    name.y = 2 * mediumStyle.fontHeight
    name.anchor.setTo(0.5, 0);
    this.add(name);

    for (let i = 0; i < bulletPoints.length; ++i) {
        const point = new CenteredContent(game, bulletPoints[i]);
        point.setStyle(mediumStyle);
        point.align = 'left';
        point.y = game.height * 0.3 + ((1 + i) * 2 * mediumStyle.fontHeight)
        this.add(point);
    }

    this.add(title);
  }

}

module.exports = BulletPointSlide;
