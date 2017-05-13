import themes from './themes'

const getRelatedWord = (theme) => {
  const sourceObject = themes.dictionary[theme];
  const grammar = tracery.createGrammar(sourceObject);
  grammar.addModifiers(tracery.baseEngModifiers);

  return grammar.flatten('#synonyms.capitalize#');
};

module.exports = getRelatedWord;
