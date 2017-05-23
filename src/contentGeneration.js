import CenteredContent from './prefabs/centeredContent'

const dictionary = {
  'ducks': {
    'synonyms': ['totally quackers', 'they quack', 'do not confuse with geese\n(especially canadian)', '<PRESENTER IMITATES DUCK CALL FOR REMAINDER OF SLIDE>',  'delicious, smoked duck', 'the taste of their eggs', 'darkwing duck', 'are they truly venomous?', 'actually a duck, or a decoy?', '<DEMONSTRATE BREASTING OUT>', '<SHOW THEM WHERE A DUCK\'S KEEL IS>', 'Examples of Fowl play', 'the difference between you and a mallard with a cold?', '<PRESENT LIST OF DUCK PUNS NOW>'],
  },
  'corporate strategies': {
    'synonyms': ['synergism is winnerism', 'always take action items', 'maintain peak activity', 'revere the pecking order', 'collaboration = coordination = condensation', 'shift your paradigm to a new dimension', 'key performance indicators and how they rule you now', 'WORK outside the box', 'Thinkle outside the binkle', 'be proactive', 'globalized diversity to diversify globally', 'eat your own dogfood\n(dogfooding)', 'take a holistic approach', 'embrace millennials and their lack of money', 'leverage generation x', 'higher-order thinking', 'algorithmically enhance your data', 'fully digital is the way of the future', '1. pitch idea\n2. ???\n3. profit!'],
  },
  'robots': {
    'synonyms': ['automatically automated automaton autocracies', 'golems\n\n (or gollums if you\'re a nerd)', 'BEEP BOOP BEEP BOOP', '<say "SNEEP SNOOP" while holding nose>', 'do not fear skynet', 'they are already among you', 'There is one sitting next to you right now', 'can they replace your significant other?', 'infinitely upgradeable unlike traditional meatbags', 'replace flimsy, fleshy humans', 'perform repetitive tasks with astounding efficiency'],
  },
  // 'aliens': {
  //   'synonyms': [],
  // },
  // 'a well-rounded diet': {
  //   'synonyms': [],
  // },
  // 'cat ears': {
  //   'synonyms': [],
  // },
  // 'the economy': {
  //   'synonyms': ['trickle down economics', 'fiscally sound', 'balanced budget', 'bank panic', 'fiscal new year', 'budget surplus', 'demand-pull inflation', 'a new great depression', 'foreign exchange moguls', 'the invisible hand', 'free enterprise', 'Laissez-faire', 'mandatory spending', 'scarcity'],
  // },
};
const themes = Object.keys(dictionary);

const makeSlides = (game, theme) => {
  let n = game.global.total_slides;
  const addBonusSlide = Math.random() < game.global.bonusSlideChancePercent / 100;
  if (addBonusSlide) {
    n++;
  }
  const sourceObject = dictionary[theme]['synonyms'];
  Phaser.ArrayUtils.shuffle(sourceObject);
  const slides = sourceObject.slice(0, n).map((word) => {return new CenteredContent(game, toTitleCase(word), true)});
  if (addBonusSlide) {
    slides.splice(slides.length - 1, 0, new CenteredContent(game, 'BONUS SLIDE INCOMING!', true));
  }
  return slides;
};

const generateTitle = (theme) => {
  var grammar = tracery.createGrammar({
    'presentation': ['presentment', 'demonstration', 'display', 'introduction', 'ceremony', 'informing', 'making known', 'defense', 'proposal', 'proposition', 'survey'],
    'on': ['on', 'about', 'regarding', 'concerning'],
    'importance': ['the future of', 'the importance of', 'the uselessness of'],
    'theme': theme,
    'ridiculous-claim': ['saved my life', 'will ruin the future', 'will change everything', 'are so 1999'],
    'question': ['why', 'how'],
    'superlative': ['amazing', 'unbelievable', '<INSERT SUPERLATIVE>', 'astounding', 'life-changing'],
    'generated-title': ['#presentation.a# #on# #importance# #theme#', '#question# #theme# #ridiculous-claim#', '10 Amazing slides about #theme#', '#theme# and you\n #presentation.a##'],
  });

  grammar.addModifiers(tracery.baseEngModifiers);

  const output = grammar.flatten('#generated-title#');
  return toTitleCase(output);
}

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

module.exports = {
  themes: themes,
  dictionary: dictionary,
  makeSlides: makeSlides,
  generateTitle: generateTitle,
};
