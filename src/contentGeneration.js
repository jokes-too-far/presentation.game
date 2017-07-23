const CenteredContent = require('./prefabs/centeredContent')
const BulletPointSlide = require('./prefabs/bulletPointSlide')
const BarChart = require('./prefabs/barChart')
const RandomImage = require('./prefabs/randomImage')
const tracery = require('./vendor/tracery')

const commonTheme = {
  'slides': ['Unusual examples of #noun#', 'Uses for #noun# you may not know about', 'How #noun# contributes to society','#gerund#: how much is enough?','the subtle link between #noun# and #noun#','< live demonstration >','#noun#: have you tried #gerund#?',"#noun# + #noun#?"],
  'noun': [],
  'verb': [],
  'gerund': [],
};

let dictionary = {};

const makeSlides = (game, theme) => {
  const primaryTemplates = dictionary[theme.primary]['slides'];
  const secondaryTemplates = dictionary[theme.secondary]['slides'];
  const commonTemplates = commonTheme.slides;
  const primaryWords = createGrammar(dictionary[theme.primary]);
  const secondaryWords = createGrammar(dictionary[theme.secondary]);
  Phaser.ArrayUtils.shuffle(primaryTemplates);
  Phaser.ArrayUtils.shuffle(secondaryTemplates);
  Phaser.ArrayUtils.shuffle(commonTemplates);

  const slides = [];

  const slidesRemaining = JSON.parse(localStorage.getItem(game.global.key_totalSlides));

  let primarySlideCount = Math.ceil(slidesRemaining / 3);
  let secondarySlideCount = Math.ceil(slidesRemaining / 4);
  let secondaryPictureSlideCount = Math.floor(slidesRemaining / 10);
  let chartSlideCount = Math.floor(slidesRemaining / 10);
  let commonSlideCount = Math.floor(slidesRemaining / 8);
  //we'll have primary pictures make up the balance of slides
  let primaryPictureSlideCount = slidesRemaining - (primarySlideCount + secondarySlideCount + secondaryPictureSlideCount + chartSlideCount + commonSlideCount);

if (primaryPictureSlideCount < 0) {
  primaryPictureSlideCount = 0;
}

  console.log('primary ', primarySlideCount, ', secondary ',secondarySlideCount, ', primaryPicture ', primaryPictureSlideCount, ', secondaryPicture ', secondaryPictureSlideCount, ', common ', commonSlideCount, ', chart ', chartSlideCount);

  for (let i=0; i < primarySlideCount; ++i) {
    slides.push(makeWordSlide(game, primaryTemplates[i], secondaryWords));
    }
  for (let i=0; i < secondarySlideCount; ++i) {
    slides.push(makeWordSlide(game, secondaryTemplates[i], primaryWords));
    }
  for (let i=0; i < primaryPictureSlideCount; ++i) {
    slides.push(new RandomImage(game, dictionary[theme.primary]['internal_id']));
  }
  for (let i=0; i < secondaryPictureSlideCount; ++i) {
    slides.push(new RandomImage(game, dictionary[theme.secondary]['internal_id']));
  }
  for (let i=0; i < commonSlideCount; ++i) {
    slides.push(makeWordSlide(game, commonTemplates[i], secondaryWords));
  }
  for (let i=0; i < chartSlideCount; ++i) {
    if (i % 2 == 0){
      slides.push(new BarChart(game, primaryWords));
    }else {
      slides.push(new BarChart(game, secondaryWords));
    }
  }

  Phaser.ArrayUtils.shuffle(slides);

  if (game.global.addBonusSlide) {
    console.log('bonus slide generated');
    slides.push(new CenteredContent(game, 'BONUS SLIDE INCOMING!', true));
    slides.push(makeSlide(game, dictionary[theme.secondary]['internal_id'], secondaryTemplates[secondarySlideCount++], primaryWords));
  }

  return slides;
};

const makeSlide = (game, internal_id, slides, words) => {
  const whichSlide = Math.random();
  if (whichSlide < 0.2) {
    return new RandomImage(game, internal_id);
  } else if (whichSlide < 0.3) {
    return new BarChart(game, words);
  } else {
    return makeWordSlide(game, slides, words);
  }
};

const makeWordSlide = (game, template, grammar) => {
  return new CenteredContent(game, toTitleCase(grammar.flatten(template)), true);
}

const generateTitle = (game, theme) => {
  const source = {
    'primary-theme': theme.primary,
    'secondary-theme': theme.secondary,
    'ridiculous-claim': ['saved my life', 'will ruin #affected#', 'will change #affected#', 'are so 1999', 'are a match made in heaven'],
    'question': ['why', 'how'],
    'linking': ['the #superlative# link between', 'what you don\'t know about', 'the truth behind', 'examining', 'the future of', 'the importance of', 'the uselessness of','my lucrative startup idea:','my fanfiction of'],
    'superlative': ['amazing', 'unbelievable', '<INSERT SUPERLATIVE>', 'astounding', 'life-changing', 'hidden'],
    'affected': ['you', 'the future', 'the world of tomorrow', 'everything', 'nothing'],
    'x-will-y-z': ['will forever change', 'is interlocked with', 'are'],
    'meme': ['MIND BLOWN', 'Amazeballs', 'when?'],
    'generated-title': [
      '#linking# #primary-theme# and #secondary-theme#',
      '#question# #secondary-theme# #x-will-y-z# #primary-theme#',
      '#question# #primary-theme# and #secondary-theme# #ridiculous-claim#',
      '#primary-theme# + #secondary-theme# = #meme#',
      JSON.parse(localStorage.getItem(game.global.key_totalSlides)) + ' #superlative# slides about #primary-theme#, #secondary-theme#, and #affected#',
      ],
  };

  return toTitleCase(createGrammar(source).flatten('#generated-title#'));
}

const createGrammar = (source) => {
  const grammar = tracery.createGrammar(source);
  grammar.addModifiers(tracery.baseEngModifiers);
  Phaser.ArrayUtils.shuffle(grammar);
  return grammar;
}

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const pickTheme = (game) => {

  // TODO - extract method for initing dictionary
  for (const theme of game.global.themes) {
    const annotatedTheme = Object.assign({}, game.cache.getJSON('theme-' + theme));
    for (const prop in annotatedTheme) {
      if (annotatedTheme.hasOwnProperty(prop))
        annotatedTheme[prop]['internal_id'] = theme;
    }
    dictionary = Object.assign(dictionary, annotatedTheme);
  }
  const themes = Object.keys(dictionary);
  Phaser.ArrayUtils.shuffle(themes);
  return {
    primary: themes[0],
    secondary: themes[1],
  };
}

const makeFeedbackSlide = (game) => {
  const questions = game.cache.getJSON('feedbackQuestions');
  Phaser.ArrayUtils.shuffle(questions);
  const title = toTitleCase('Audience: please discuss and answer the following questions:');
  const bulletPoints = [];
  bulletPoints.push(toTitleCase('1. ' + questions[0]));
  bulletPoints.push(toTitleCase('2. ' + questions[1]));
  bulletPoints.push(toTitleCase('3. ' + questions[2]));
  bulletPoints.push(toTitleCase('4. name one thing you learned from this presentation'));
  return new BulletPointSlide(game, title, '', bulletPoints);
}

const makeIntroductionSlide = (game) => {
    const presenter = game.cache.getJSON('introductions');
    Phaser.ArrayUtils.shuffle(presenter.firstname);
    Phaser.ArrayUtils.shuffle(presenter.lastname1);
    Phaser.ArrayUtils.shuffle(presenter.lastname2);
    Phaser.ArrayUtils.shuffle(presenter.profession);
    Phaser.ArrayUtils.shuffle(presenter.trivia);
    let duration = 'years';
    if (Math.random() < 0.5){
      duration = 'months';
    };

    const title = toTitleCase('First, a little bit about me');
    const name = toTitleCase(presenter.firstname[0] + ' ' + presenter.lastname1[0] + presenter.lastname2[0]);
    const bulletPoints = [];
    bulletPoints.push(toTitleCase(presenter.profession[0] + ' for ' + Math.round(Math.random() * 10) + ' ' + duration));
    bulletPoints.push(toTitleCase(presenter.trivia[0]));
    return new BulletPointSlide(game, title, name, bulletPoints);
}
const makeQuestionsTitle = (game) => {
    const variations = game.cache.getJSON('questionsVariations');
    Phaser.ArrayUtils.shuffle(variations);
    return toTitleCase(variations[0]);
}

module.exports = {
  // dictionary: dictionary,
  makeSlides: makeSlides,
  generateTitle: generateTitle,
  pickTheme: pickTheme,
  makeFeedbackSlide: makeFeedbackSlide,
  makeIntroductionSlide: makeIntroductionSlide,
  makeQuestionsTitle: makeQuestionsTitle,
};
