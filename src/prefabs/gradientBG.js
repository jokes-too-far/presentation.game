
//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class GradientBG extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game) {
    super(game, 0, 0, 'gradient');
    this.width = game.width;
    this.height = game.height;
    this.tint = Phaser.Color.hexToRGB(this.darkerColor(game.stage.backgroundColor, 0.3));
    game.add.existing(this);
  }

  darkerColor (hexString, percentDarker) {
    console.log(hexString.toString(16));
    const trimmed = hexString.toString(16).replace('#', '');
    const rString = trimmed.substring(0,2);
    const gString = trimmed.substring(2,4);
    const bString = trimmed.substring(4,6);
    const r = parseInt(rString, 16);
    const g = parseInt(gString, 16);
    const b = parseInt(bString, 16);
    const hsl = Phaser.Color.RGBtoHSL(r,g,b);
    hsl.l = Math.max(0, hsl.l - (percentDarker));
    const darker = Phaser.Color.HSLtoRGB(hsl.h, hsl.s, hsl.l);
    let newR = darker.r.toString(16);
    let newG = darker.g.toString(16);
    let newB = darker.b.toString(16);
    newR = '0' + newR;
    newG = '0' + newG;
    newB = '0' + newB;    
    return '#' + newR.slice(-2) + newG.slice(-2) + newB.slice(-2);
  };

}

export default GradientBG;
