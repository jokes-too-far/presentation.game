const CenteredContent = require('./prefabs/centeredContent')
const BarChart = require('./prefabs/barChart')
const RandomImage = require('./prefabs/randomImage')
const tracery = require('./vendor/tracery')

const commonTheme = {
  'slides': ['Unusual examples of #noun#', 'Uses for #noun# you may not know about', 'How #noun# contributes to society','#gerund#: how much is enough?','the subtle link between #noun# and #noun#','< live demonstration >','#noun#: have you tried #gerund#?',"#noun# + #noun#?"],
  'noun': [],
  'verb': [],
  'gerund': [],
};

const presenterName = {
  'firstname':['darryl','smitty','leo','gargantua','emmalina','dee dee','carl','mike','sue','carol','llana','brunhilda','xavier "x"','pierce','john','maryanne','edward','bella',
                'renesmee','fabio','carlisle','rainbow','lakey','hermione','rusev','sammy','kevin','"fudge"','roman','becky','bayley','charlotte','sasha'],
  'lastname1':['open','smith','john','sky','rose','handcart','hard','apple','east','west','round','dither','shoe','rein'],
  'lastname2':['bottom','hammer','son','tailor','smith','ee','lin','heimer','wick','s','ski','y','man','ther','bag'],
  'profession':['homemaker','architect','beekeeper','scientist','self employed','businessman','president','professional lecturer','flight attendant','handyman','plumber','dentist','retiree',
                'boat captain','ski-jump instructor','professional wrestler','encyclopedia salesman','acupuncturist','pet psychologist','sports announcer','interpretive dancer','c-list celebrity',
                'e-sports player','lawyer','med student'],
  'trivia':['2 kids', 'woodworker','feeling a little sick today','think i\'m losing my voice','allergic to 5 things','amateur wine-taster','coffee addict','sommellier (wine snob)',
            'avid gardener','speak 4 languages','taking the bar exam right after this','hold a guinness world record: can you guess what it is?','own a chain restaurant','briefly owned an elephant',
            '39 teeth','had a conjoined twin','scorpio','gemini','halfway between a virgo and a libra','lactose intolerant','8-pack','volunteer mascot','won the lottery',
            'this is my 200th presentation!', 'this is my first ever presentation','type a blood','little league coach','amateur astronomer','didn\'t get much sleep last night',
            'raise corgis', 'related to abraham lincoln', 'visited 6 continents','no hobbies of interest','afraid of loud noises','avid bodybuilder','rhodes scholar',
            'going skydiving after this presentation','I\'m proposing after this presentation','moving across the country after this presentation','forgot to eat breakfast',
            'looooooooooooooooooooooooove puppies','12 cats','<3 a certain celebrity...','amateur chef','won "best moonshine in the county" 3 years running','have had the hiccups for 3 years',
            'once met my namesake','love smooth jazz','play the trumpet','donated my spare kidney','make and sell custom handbags','breed chihuahuas','breed finches','collect stuffed animals'],
};

const feedbackQuestions = {
  'question':['presenter knew the subject matter well',
              'pacing of the presentation was good',
              'i learned a lot from this presentation',
              'presenter captured my interest',
              'presenter was able to answer questions',
              'presenter was devilishly handsome',
              'appropriate use of visual aids',
              'presentation was appropriate for my age group',
              'presentation was coherent',
              'presentation was relevant to my interests',
              'presenter made good use of the daily vocabulary words',
              'i can apply what i learned from this presentation to my daily life',
              'presentation reinforced family values',
              'presentation seemed well rehearsed',
              'presentation inspired me to give 110 %',
              'presenter covered both sides of the controversy',
              'i could not tell that presenter was in witness protection'],
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

  slides.push(makeWordSlide(game, primaryTemplates[0], secondaryWords));
  slides.push(makeWordSlide(game, primaryTemplates[1], secondaryWords));
  let primariesUsed = 2;
  let secondariesUsed = 0;
  let commonsUsed = 0;
  const slidesRemaining = game.global.total_slides;
  for (let i=primariesUsed; i < slidesRemaining; ++i) {
    if (Math.random() < 0.5 && i <= Object.keys(primaryTemplates).length) {
      slides.push(makeSlide(game, dictionary[theme.primary]['internal_id'], primaryTemplates[primariesUsed++], secondaryWords));
      //console.log('primary', i, Object.keys(primaryTemplates).length);
    } else {
      if (Math.random() >= 0.8 && commonsUsed <= Object.keys(commonTemplates).length){
        slides.push(makeSlide(game, dictionary[theme.primary]['internal_id'], commonTemplates[commonsUsed++], primaryWords));
      } else {
        slides.push(makeSlide(game, dictionary[theme.secondary]['internal_id'], secondaryTemplates[secondariesUsed++], primaryWords));
        //console.log('secondary', i-primariesUsed, Object.keys(secondaryTemplates).length);
      }
    }
  }

  if (game.global.addBonusSlide) {
    console.log('bonus slide generated');
    slides.push(new CenteredContent(game, 'BONUS SLIDE INCOMING!', true));
    if (primariesUsed < Object.keys(primaryTemplates).length){
      slides.push(makeSlide(game, dictionary[theme.primary]['internal_id'], primaryTemplates[primariesUsed++], secondaryWords));
    } else {
      slides.push(makeSlide(game, dictionary[theme.secondary]['internal_id'], secondaryTemplates[secondariesUsed++], primaryWords));
    }
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
    'question': ['why', 'how', 'when'],
    'linking': ['the #superlative# link between', 'what you don\'t know about', 'the truth behind', 'examining', 'the future of', 'the importance of', 'the uselessness of'],
    'superlative': ['amazing', 'unbelievable', '<INSERT SUPERLATIVE>', 'astounding', 'life-changing', 'hidden'],
    'affected': ['you', 'the future', 'the world of tomorrow', 'everything', 'nothing'],
    'x-will-y-z': ['will forever change', 'is interlocked with', 'are'],
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

const makeFeedbackSlide = () => {
  const questions = feedbackQuestions.question;
  Phaser.ArrayUtils.shuffle(questions);
  const str = 'Audience: please discuss and answer the following questions:\n\n1. ' + questions[0] + '\n2. ' + questions[1] + '\n3. ' + questions[2]  + '\n4. name one thing you learned from this presentation';
  return toTitleCase(str);
}

const makeIntroductionSlide = (game) => {

    const presenter = presenterName;
    Phaser.ArrayUtils.shuffle(presenter.firstname);
    Phaser.ArrayUtils.shuffle(presenter.lastname1);
    Phaser.ArrayUtils.shuffle(presenter.lastname2);
    Phaser.ArrayUtils.shuffle(presenter.profession);
    Phaser.ArrayUtils.shuffle(presenter.trivia);
    let duration = 'years';
    if (Math.random() < 0.5){
      duration = 'months';
    };

    const str = 'First, a little bit about me, ' + presenter.firstname[0] + ' ' + presenter.lastname1[0] + presenter.lastname2[0] +  ':\n\n' +
                presenter.profession[0] + ' for ' + Math.round(Math.random() * 10) + ' ' + duration + '\n\n' + presenter.trivia[0];
    return new CenteredContent(game, toTitleCase(str), true) ;
}

module.exports = {
  // dictionary: dictionary,
  makeSlides: makeSlides,
  generateTitle: generateTitle,
  pickTheme: pickTheme,
  makeFeedbackSlide: makeFeedbackSlide,
  makeIntroductionSlide: makeIntroductionSlide,
};
