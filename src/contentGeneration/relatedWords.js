import themes from './themes'

const getWords = (theme, n) => {
  const sourceObject = themes.dictionary[theme]['synonyms'];
  Phaser.ArrayUtils.shuffle(sourceObject);
  return sourceObject.slice(0, n);
};

module.exports = getWords;
