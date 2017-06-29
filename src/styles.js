const GradientBG = require('./prefabs/gradientBG')

const titleSizedFont = (game) => {
    return {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 5,
      wordWrap: true,
      wordWrapWidth: game.width * 0.8,
    };
};

const labelFont = (game) => {
    return {
        font: '32px Arial',
        fill: '#ffffff',
        align: 'center',
        strokeThickness: 4,
    };
};

const supportingSizedFont = (game) => {
    return {
        font: '16px Arial',
        fill: '#ffffff',
        align: 'center',
        strokeThickness: 3,
        wordWrap: true,
        wordWrapWidth: game.width * 0.7,
    };
};

const randomTheme = (game) => {
  const bgColor = '#' + Math.random().toString(16).slice(2,8);
  game.stage.backgroundColor = bgColor;
  new GradientBG(game, gradientDestination(game.stage.backgroundColor, 0.3));
};

const gradientDestination = (hexString, percentChange) => {
    const trimmed = hexString.toString(16).replace('#', '');
    const rString = trimmed.substring(0,2);
    const gString = trimmed.substring(2,4);
    const bString = trimmed.substring(4,6);
    const r = parseInt(rString, 16);
    const g = parseInt(gString, 16);
    const b = parseInt(bString, 16);
    const hsl = Phaser.Color.RGBtoHSL(r,g,b);
    if (hsl.l < 0.5) {
        hsl.l = Math.min(1, hsl.l + (percentChange));
    } else {
        hsl.l = Math.max(0, hsl.l - (percentChange));
    }
    const darker = Phaser.Color.HSLtoRGB(hsl.h, hsl.s, hsl.l);
    let newR = darker.r.toString(16);
    let newG = darker.g.toString(16);
    let newB = darker.b.toString(16);
    newR = '0' + newR;
    newG = '0' + newG;
    newB = '0' + newB;
    return Phaser.Color.hexToRGB('#' + newR.slice(-2) + newG.slice(-2) + newB.slice(-2));
};


module.exports = {
    backgroundColor: randomTheme,
    fonts: {
        big: titleSizedFont,
        medium: labelFont,
        small: supportingSizedFont,
    }
};
