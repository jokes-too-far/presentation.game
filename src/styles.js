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
};


module.exports = {
    backgroundColor: randomTheme,
    fonts: {
        big: titleSizedFont,
        small: supportingSizedFont,
    }
};
