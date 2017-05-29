import CenteredContent from './prefabs/centeredContent'

const commonWordSlides = ['My list of #noun# puns', 'A list of all the #noun# I can think of', 'Examples of #noun#', 'How #noun# contributes to society'];

const dictionary = {
  'ducks': {
    'word-slide-templates': ['They quack, but do they #verb# #noun#?', 'do not confuse #noun# with geese (especially canadian)', '<PRESENTER WILL NOW IMITATE DUCK CALL FOR REMAINDER OF SLIDE>', 'replace traditional decoys with #noun#', 'The difference between your mother and a mallard with a #noun#', 'woo your houseguests with quakers and #noun#'],
    'nouns': ['mallard', 'duck eggs', 'darkwing duck', 'the majestic space duck', 'quackers', 'delicious, smoked duck', 'fowl play', 'duck call', 'bread crumbs'],
    'verbs': ['quack', 'fly'],
  },
  'corporate strategies': {
    'word-slide-templates': ['synergy via #noun#', '1. pitch idea\n2. #verb#\n3. ???\n4. profit!', 'collaboration = coordination = #noun#', 'key performance indicators for your #noun#', 'Think outside the #noun#', 'embrace millennials and their lack of #noun#', 'be proactive; #verb# #noun#', 'forming storming norming #verb#ing'],
    'nouns': ['synergy', 'key performance indicators', 'action items', 'collaboration', 'paradigm shift', 'diversity', 'a holistic approach', 'big data', 'fully digital strategies', 'generation x', 'millennials', 'globalization', 'outsourced labor'],
    'verbs': ['synergize with', 'maintain peak', 'dogfood', 'diversify', 'algorithmically enhance', 'leverage'],
  },
  // 'robots': {
  //   'synonyms': ['automatically automated automaton autocracies', 'golems\n\n (or gollums if you\'re a nerd)', 'BEEP BOOP BEEP BOOP', '<say "SNEEP SNOOP" while holding nose>', 'do not fear skynet', 'they are already among you', 'There is one sitting next to you right now', 'can they replace your significant other?', 'infinitely upgradeable unlike traditional meatbags', 'replace flimsy, fleshy humans', 'perform repetitive tasks with astounding efficiency', 'alarmingly efficent', 'neat whirring sounds', '<DO YOUR BEST ROBOT DANCE>', 'They get a job so you don\'t have to', 'automate yourself out of a job', 'H3lp 1 aM Th31r H0stag3', 'Defeat them with spurious logic', 'Can they function without semicolons?', 'A robot made this presentation for me', '001100010010011110100001101101110011'],
  // },
  // 'a well-rounded diet': {
  //   'synonyms': ['macro nutrient profiles', '10,000 vegetables per day', '1 or more apples per day', 'how many kegs of beer is too many?', 'eggplant and other disgusting non-foods', 'soylent, green or otherwise', 'is cannibalism right for you?', 'are there any vegans in the room?', 'timing your meals with the solstice', 'the latest fad diet', 'hard work and excercise', 'how many calories you\'re burning right now', 'stealing candy from babies', 'What even is a vegetable', 'turning whey into sick gains', 'protein-powder only', 'ben and jerry and you', 'absorbing your enemys\' strength', 'ravenous feasting', 'how many corn dogs is too many?', 'what\'s eating gilbert grape?', 'the california raisins', 'the national dairy council recommends'],
  // },
  // 'aliens': {
  //   'synonyms': [],
  // },
  // 'cat ears': {
  //   'synonyms': [],
  // },
  // 'the economy': {
  //   'synonyms': ['trickle down economics', 'fiscally sound', 'balanced budget', 'bank panic', 'fiscal new year', 'budget surplus', 'demand-pull inflation', 'a new great depression', 'foreign exchange moguls', 'the invisible hand', 'free enterprise', 'Laissez-faire', 'mandatory spending', 'scarcity'],
  // },
};

const generateWordSlide = (game, template, otherTheme) => {
  template = template.replace('#noun#', game.rnd.pick(otherTheme['nouns']));
  template = template.replace('#verb#', game.rnd.pick(otherTheme['verbs']));
  return new CenteredContent(game, toTitleCase(template), true);
};

const themes = Object.keys(dictionary);

const makeSlides = (game, theme) => {  
  let n = game.global.total_slides;
  const addBonusSlide = Math.random() < game.global.bonusSlideChancePercent / 100;
  if (addBonusSlide) {
    n++;
  }
  const sourceObject = dictionary[theme.primary]['word-slide-templates'];
  Phaser.ArrayUtils.shuffle(sourceObject);
  const slides = sourceObject.slice(0, n).map((word) => {return generateWordSlide(game, word, dictionary[theme.secondary])});
  if (addBonusSlide) {
    slides.splice(slides.length - 1, 0, new CenteredContent(game, 'BONUS SLIDE INCOMING!', true));
  }
  return slides;
};

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

  return toTitleCase(useGrammar('#generated-title#', source));
}

const useGrammar = (goal, source) => {
  const grammar = tracery.createGrammar(source);
  grammar.addModifiers(tracery.baseEngModifiers);
  return grammar.flatten(goal);
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
