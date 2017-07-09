const GradientBG = require('./prefabs/gradientBG')

const titleSizedFont = (game) => {
    const fontHeight =  game.height * 0.125;
    return {
      font: 'Arial',
      fontHeight: fontHeight,
      fontSize: fontHeight + 'px',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 5,
      wordWrap: true,
      wordWrapWidth: game.width * 0.8,
    };
};

const mediumFont = (game) => {
    const fontHeight =  game.height * 0.05;
    return {
        font: 'Arial',
        fontHeight: fontHeight,
        fontSize: fontHeight + 'px',
        fill: '#ffffff',
        align: 'center',
        strokeThickness: 4,
    };
};

const smallFont = (game) => {
    const fontHeight =  game.height * 0.025;
    return {
        font: 'Arial',
        fontHeight: fontHeight,
        fontSize: fontHeight + 'px',
        fill: '#ffffff',
        align: 'center',
        strokeThickness: 3,
        wordWrap: true,
        wordWrapWidth: game.width * 0.7,
    };
};

const randomTheme = (game) => {
  const newBgColor = parseInt(Math.random().toString(16).slice(2,8), 16);
  const newGradientColor = gradientDestination(newBgColor, 0.3);
  const bg = new GradientBG(game, newGradientColor);
  tweenTint(game, game.stage, game.stage.backgroundColor, newBgColor, Phaser.Timer.SECOND / 2);
  tweenTint(game, bg, game.stage.backgroundColor, newGradientColor, Phaser.Timer.SECOND / 2);
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

const tweenTint = (game, obj, startColor, endColor, time) =>  {
    // create an object to tween with our step value at 0
    const colorBlend = {step: 0};

    // create the tween on this object and tween its step property to 100
    const colorTween = game.add.tween(colorBlend).to({step: 100}, time);

    // run the interpolateColor function every time the tween updates, feeding it the
    // updated value of our tween each time, and set the result as our tint
    colorTween.onUpdateCallback(() => {
        nextColor = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
        if (obj.tint) {
            obj.tint = nextColor;
        } else {
            game.stage.backgroundColor = nextColor;
        }
    });

    // start the tween
    colorTween.start();
}


module.exports = {
    backgroundColor: randomTheme,
    fonts: {
        big: titleSizedFont,
        medium: mediumFont,
        small: smallFont,
    }
};
