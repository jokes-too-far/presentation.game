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
  const backroundColors = ['#34495e', '#8e44ad', '#c0392b', '#16a085', '#7f8c8d', '#d35400'];
  game.stage.backgroundColor = Phaser.ArrayUtils.getRandomItem(backroundColors);
};

module.exports = {
    backgroundColor: randomTheme,
    fonts: {
        big: titleSizedFont,
        small: supportingSizedFont,
    }
};