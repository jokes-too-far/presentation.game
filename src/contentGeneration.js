import CenteredContent from './prefabs/centeredContent'

const commonWordSlides = ['My list of #noun# puns', 'A list of all the #noun# I can think of', 'Examples of #noun#', 'How #noun# contributes to society'];

const dictionary = {
   'ducks': {
    'slides': ['They quack, but do they #verb#? with #noun#?', 'do not confuse #noun# with geese (especially canadian)', '<PRESENTER WILL NOW IMITATE #noun# DUCK CALL FOR REMAINDER OF SLIDE>', 'replace traditional decoys with #noun#', 'The difference between your mother and a mallard with a #noun#', 'woo your houseguests with quakers and #noun#','do they fly south just to #verb#?','attract ducks to your local park with #noun#'],
    'noun': ['mallard', 'duck eggs', 'darkwing duck', 'majestic space duck', 'quackers', 'delicious, smoked duck', 'fowl play', 'duck call', 'bread crumbs'],
    'verb': ['quack', 'fly','roast','migrate','nest'],
    'gerund':['flying','roasting','quacking','migrating','nesting'],
  },
  'corporate strategies': {
    'slides': ['synergy via #noun#', '1. pitch idea\n2. #verb#\n3. ???\n4. profit!', 'collaboration =\ncoordination =\n#noun#', 'key performance indicators for your #noun#', 'Think outside the #noun#', 'embrace #noun# and their lack of #noun#', 'be proactive; #verb# with #noun#', 'forming storming norming #gerund#','your company needs to #verb#! right now!!'],
    'noun': ['synergy', 'key performance indicators', 'action items', 'collaboration', 'paradigm shift', 'diversity', 'a holistic approach', 'big data', 'fully digital strategies', 'generation x', 'millennials', 'globalization', 'outsourced labor'],
    'verb': ['synergize', 'maintain peak', 'dogfood', 'diversify', 'algorithmically enhance', 'leverage'],
    'gerund': ['synergizing','diversifying','leveraging'],
  },
  'parenting a teen': {
    'slides': ['top extracurricular activities:\n1. #noun# club\n2. sports\n3. #gerund# with #noun#', 'do you need to supervise #verb# time?', '#noun# concerns:\n 1. Safety\n 2. Morality\n 3. #noun#', 'making time to #verb# together','condoms, condoms, condoms!','tough love vs #noun#','their future depends on #noun#','parenting studies on #noun#','do their friends #verb#?'],
    'noun':['your teen','drugs','top colleges','parties','family values','family dinnertime','ankle monitor'],
    'verb':['rebel','nurture','spend quality time','heart to heart','ground','spank','love','discipline','sex'],
    'gerund':['spending quality time','rebelling','grounding','spanking'],
  },
  'treating illnesses': {
    'slides': ['the uncommon cold and your #noun#', 'doctors hate him! one neat trick about #noun#', '#noun# and side effects?', 'when do you need to call for #noun#?', 'living with chronic #noun#','10 glasses of #noun# a day','controversial studies on adults who #verb#','suffering from #noun#? try #noun#!','consult your doctor if you #verb#','#gerund#: how much is enough?','do apples help you #verb#?','can vaccines cause #noun#?'],
    'noun':['bloating','fatigue','homeopathic remedies','cure for cancer','balanced diet','headache','cramps','ancient chinese remedies'],
    'verb':['sneeze','cough','dilute','home-brew','vomit'],
    'gerund':['diluting','vomiting','coughing'],
  },
  'heartthrobs': {
    'slides':['tall, dark & #noun#','everyone wants to meet #noun#, but what about #noun#?','does your crush #verb#?','meet your crush:\n1.#verb# him\n2.find #noun#\n3. happily ever after','#noun# and unrealistic body standards','do all movie stars #verb#?','unique names like #noun# George = more popular with teen girls','#noun# in hollywood','#verb# + #verb# = 24-pack in days!'],
    'noun':['celebrity crush','movie stars','sexy movie villains','rogue with a heart of gold','dreamboat'],
    'verb':['weightlift','stalk','moisturize','date','idolize','crush on'],
    'gerund':['weightlifting','idolizing','stalking'],
  },
  'product reviews':{
    'slides':['the dreaded one-star: did you remember to #verb#?','10% of reviewers actually tried #noun#','flashy packaging vs\ncontent vs\n#noun#','#gerund# increases word of mouth','search engine optimization with #noun#','successful unboxing videos #verb#!','check for #noun# daily','#noun# making cheap knock-offs','is it ever okay to #verb# for likes?'],
    'noun':['target audience','competitive price','craftsmanship','cheap foreign knock-offs','giveaway'],
    'verb':['unbox','complain','return','review','bribe'],
    'gerund':['complaining','reviewing','bribing'],
  },
  'millennials':{
    'slides':['harry potter and the #noun# of the #noun#','#noun# in coffeeshops','locally-produced #noun#','bigger eyeglasses make for bolder #noun#','#verb# with "that internet thing"','#noun#: sign of the apocalypse?','entry level #noun#','#gerund#: new fad!','appeal to millennials with #noun#!','top millennial attractors:\n1. #noun#\n2. green #noun#\n3. easy to #verb#'],
    'noun':['hipster','cell phone','eyeglasses','social media','coffee','pizza','craft beer'],
    'verb':['conduct studies', 'frolf','socialize','play','post on facebook','trend-set'],
    'gerund':['frolfing','playing','trend-setting','socializing'],
  },
  'modern city life':{
    'slides':['keeping #noun# off your lawn','high-rises and #noun#','where is my flying #noun#?','#verb# or take public transportation?','feeling lost in a crowd? try\n1.#gerund#\n2.seeking #noun#\n 3. never ever #verb#!','the dating scene: singles that #verb#','renting vs #gerund#','the blight of urban #noun#'],
    'noun':['robocop','nightclub','skyscraper','urban blight','smog','tindr'],
    'verb':['rent','party','work','live','retire'],
    'gerund':['renting','working','living','retiring'],
  },
  'ponies':{
    'slides':['every little girl dreams of #noun# of her own','my little pony: friendship is #noun#','everyone likes ponies that #verb#','preteens and #gerund# ponies','pony colors:\n1. Pink\n2. Purple\n3. #noun# blue','merchandising and #noun#!','could boys like ponies if they #verb#?','#gerund# the "brony" demographic'],
    'noun':['magic','rainbow','sparkle','shy mares','best friends'],
    'verb':['prance','resolve conflict','race','canter','neigh'],
    'gerund':['prancing','resolving conflict','racing','cantering','neighing'],
  },
  'multi-level marketing':{
    'slides':['never say "pyramid": try "#noun#" instead!','growing your percentages by #gerund#','attend my #gerund# seminar on march 19th!','how to talk to police about #noun#','when the jig is up, #verb#','desperate + #noun# = ideal hire', '#noun# = trickle-up','#noun# and employee attrition','look reputable by #gerund#','sell to friends, family, #noun#','it is not illegal if you #verb#'],
    'noun':['quality product','obscene profit','salesperson','unemployed youth','easy mark','lawyer','college student'],
    'verb':['market','recruit','evangelize','profit','flee'],
    'gerund':['marketing','recruiting','evangelizing','profiting','fleeing'],
  },
  'greek mythology':{
    'slides':['did zeus just turn #noun# into #noun#?','myths to explain the origin of #noun#','greek gods and their #gerund# escapades','poseidon is also the god of #noun#','hera punishes infidelity with #gerund#','tragedy, comedy, and #gerund# #noun#','#noun#: all greek to me!','athena sprung full-formed from the #noun# of zeus','hades, persephone, and #gerund# =  why we have winter now','cronus likes to #verb#. Yes, even his kids'],
    'noun':['chariot','doric, ionic, and corinthian columns','extra-marital babby','satyr','mount olympus'],
    'verb':['murder','get it on','kidnap','cannibalize'],
    'gerund':['murdering','getting it on','kidnapping','cannibalizing'],
  },
  'reconsidering stereotypes':{
    'slides':['someone once told me that my #noun# will #verb#. really guys? really???','impressions of #noun# formed in early childhood','try to meet #noun# yourself!', 'stereotypes are holding you back from #gerund#','going against your gut and #gerund#','top myths about #noun#:\n1. Lazy\n2. Antisocial\n3. Like to #verb#','#verb# and question your preconceptions','imagine how you would feel if someone told you that you #verb#','statistically, #noun# will only rarely #verb#'],
    'noun':['in-group','sensitive tough guy','shy kid','token <X>','racial stereotype','W.A.S.P.'],
    'verb':['bully','wear black', 'pierce', 'steal','exclude','follow the crowd'],
    'gerund':['bullying','wearing black', 'piercing','stealing','excluding','following the crowd'],
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
