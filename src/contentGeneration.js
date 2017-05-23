import CenteredContent from './prefabs/centeredContent'

const dictionary = {
  'ducks': {
    'synonyms': ['quackers', 'quack', 'mallard', 'delicious, smoked duck', 'eggs', 'darkwing duck', 'venomous?', 'decoy', 'breasting out', 'keel', 'waterfowl'],
  },
  'synergy': {
    'synonyms': ['synergism', 'action', 'activity', 'pecking order', 'collaboration', 'paradigm shifts', 'key performance indicators', 'outside the box', 'be proactive', 'globalized diversity', 'eat your own dogfood', 'holistic approach', 'embrace millennials', 'leverage generation x', 'higher-order thinking', 'algorithmically enhanced', 'fully digital'],
  },
  'robots': {
    'synonyms': ['automaton', 'golem', 'droid', 'replicants', 'skynet', 'are they already among you?', 'can they replace your girlfriend?', 'error-prone', 'redundant', 'well-oiled machines', 'replace flimsy humans', 'repetitive tasks'],
  },
  'the economy': {
    'synonyms': ['trickle down economics', 'fiscally sound', 'balanced budget', 'bank panic', 'fiscal new year', 'budget surplus', 'demand-pull inflation', 'a new great depression', 'foreign exchange moguls', 'the invisible hand', 'free enterprise', 'Laissez-faire', 'mandatory spending', 'scarcity'],
  },
  // '12th century spanish literature': {
  //   'synonyms': [],
  // },
  // 'aliens': {
  //   'synonyms': [],
  // },
  // 'a well-rounded diet': {
  //   'synonyms': [],
  // },
  // 'cat ears': {
  //   'synonyms': [],
  // },
};
const themes = Object.keys(dictionary);

const makeSlides = (game, theme) => {
  const n = game.global.total_slides + 1;
  const sourceObject = dictionary[theme]['synonyms'];
  Phaser.ArrayUtils.shuffle(sourceObject);
  return sourceObject.slice(0, n).map((word) => {return new CenteredContent(game, word, true)});
};

const generateTitle = (theme) => {
  var grammar = tracery.createGrammar({
    'presentation': ['presentment', 'demonstration', 'display', 'introduction', 'intro', 'attitude', 'ceremony', 'informing', 'making known', 'position', 'posture', 'proposal', 'proposition', 'representation', 'show'],
    'on': ['on', 'about', 'regarding', 'concerning'],
    'importance': ['the future of', 'the importance of', 'the uselessness of'],
    'theme': theme,
    'ridiculous-claim': ['will save your life', 'is ruining the future', 'is the future', 'will change everything'],
    'question': ['why', 'how'],
    'generated-title': ['#presentation.a# #on# #importance# #theme#', '#question# #theme# #ridiculous-claim#'],
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
