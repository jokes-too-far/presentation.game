import CenteredContent from './prefabs/centeredContent'

const commonWordSlides = ['My list of #noun# puns', 'A list of all the #noun# I can think of', 'Examples of #noun#', 'How #noun# contributes to society'];

const dictionary = {
  'ducks': {
    'slides': ['They quack, but do they #verb# #noun#?', 'do not confuse #noun# with geese (especially canadian)', '<PRESENTER WILL NOW IMITATE DUCK CALL FOR REMAINDER OF SLIDE>', 'replace traditional decoys with #noun#', 'The difference between your mother and a mallard with a #noun#', 'woo your houseguests with quakers and #noun#'],
    'noun': ['mallard', 'duck eggs', 'darkwing duck', 'the majestic space duck', 'quackers', 'delicious, smoked duck', 'fowl play', 'duck call', 'bread crumbs'],
    'verb': ['quack', 'fly'],
  },
  'corporate strategies': {
    'slides': ['synergy via #noun#', '1. pitch idea\n2. #verb#\n3. ???\n4. profit!', 'collaboration = coordination = #noun#', 'key performance indicators for your #noun#', 'Think outside the #noun#', 'embrace millennials and their lack of #noun#', 'be proactive; #verb# #noun#', 'forming storming norming #verb#ing'],
    'noun': ['synergy', 'key performance indicators', 'action items', 'collaboration', 'paradigm shift', 'diversity', 'a holistic approach', 'big data', 'fully digital strategies', 'generation x', 'millennials', 'globalization', 'outsourced labor'],
    'verb': ['synergize with', 'maintain peak', 'dogfood', 'diversify', 'algorithmically enhance', 'leverage'],
  },
  // 'robots': {
  // },
  // 'a well-rounded diet': {
  // },
  // 'aliens': {
  // },
  // 'cat ears': {
  // },
  // 'the economy': {
  // },
};

const themes = Object.keys(dictionary);

const makeSlides = (game, theme) => {  
  const primaryTemplates = dictionary[theme.primary]['slides'];
  const secondaryTemplates = dictionary[theme.secondary]['slides'];
  const primaryWords = createGrammar(dictionary[theme.primary]);
  const secondaryWords = createGrammar(dictionary[theme.secondary]);
  Phaser.ArrayUtils.shuffle(primaryTemplates);
  Phaser.ArrayUtils.shuffle(secondaryTemplates);

  const slides = [];

  slides.push(makeWordSlide(game, primaryTemplates[0], secondaryWords));
  slides.push(makeWordSlide(game, primaryTemplates[1], secondaryWords));
  const slidesRemaining = game.global.total_slides;
  for (let i=2; i < slidesRemaining; ++i) {
    if (Math.random() < 0.5) {
      slides.push(makeWordSlide(game, primaryTemplates[i], secondaryWords));
    } else {
      slides.push(makeWordSlide(game, secondaryTemplates[i], primaryWords));
    }
  }

  const addBonusSlide = Math.random() < game.global.bonusSlideChancePercent / 100;
  if (addBonusSlide) {
    slides.push(new CenteredContent(game, 'BONUS SLIDE INCOMING!', true));
    slides.push(makeWordSlide(game, primaryTemplates[game.global.total_slides], secondaryWords));
  }

  return slides;
};

const makeWordSlide = (game, template, grammar) => {
  return new CenteredContent(game, toTitleCase(grammar.flatten(template)), true);
}

const generateTitle = (game, theme) => {
  const source = {
    'primary-theme': theme.primary,
    'secondary-theme': theme.secondary,
    'ridiculous-claim': ['saved my life', 'will ruin #affected#', 'will change #affected#', 'are so 1999', 'are a match made in heaven'],
    'question': ['why', 'how', 'when'],
    'linking': ['the #superlative# link between', 'what you don\'t know about', 'the truth behind', 'examining', 'the future of', 'the importance of', 'the uselessness of'],
    'superlative': ['amazing', 'unbelievable', '<INSERT SUPERLATIVE>', 'astounding', 'life-changing', 'hidden'],
    'affected': ['you', 'the future', 'the world of tomorrow', 'everything', 'nothing'],
    'x-will-y-z': ['will forever change', 'is interlocked with', ''],
    'meme': ['MIND BLOWN', 'Amazeballs', 'when?'],
    'generated-title': [
      '#linking# #primary-theme# and #secondary-theme#',
      '#question# #secondary-theme# #x-will-y-z# #primary-theme#',
      '#question# #primary-theme# and #secondary-theme# #ridiculous-claim#',
      '#primary-theme# + #secondary-theme# = #meme#',
      game.global.total_slides + ' #superlative# slides about #primary-theme#, #secondary-theme#, and #affected#',
      ],
  };

  return toTitleCase(createGrammar(source).flatten('#generated-title#'));
}

const createGrammar = (source) => {
  const grammar = tracery.createGrammar(source);
  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar;
}

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const pickTheme = () => {
  Phaser.ArrayUtils.shuffle(themes);
  return {
    primary: themes[0],
    secondary: themes[1],
  };
}

module.exports = {
  dictionary: dictionary,
  makeSlides: makeSlides,
  generateTitle: generateTitle,
  pickTheme: pickTheme,
};
