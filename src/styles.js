const titleSizedFont = {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 5,
    };

const supportingSizedFont = {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center',
      strokeThickness: 3,
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