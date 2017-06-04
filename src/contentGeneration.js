import CenteredContent from './prefabs/centeredContent'

const commonWordSlides = ['My list of #noun# puns', 'A list of all the #noun# I can think of', 'Examples of #noun#', 'How #noun# contributes to society'];

const dictionary = {
   'ducks': {
    'slides': ['They quack, but do they #verb#? with #noun#?', 'don\'t confuse #noun# with geese (especially canadian)', '<PRESENTER WILL NOW DEMONSTRATE #noun# DUCK CALL>', 'replace traditional decoys with #noun#', 'The difference between a mother duck and a mallard with a #noun#', 'woo orinthologists with quackers and #noun#','do they fly south just to #verb#?','attract ducks to your local park with #noun#','visit ponds in early spring to catch a glimpse of #noun# nests','rubber vs real: a tale of #noun#'],
    'noun': ['mallard', 'duck egg', 'darkwing duck', 'majestic space duck', 'quackers', 'delicious, smoked duck', 'fowl play', 'duck call', 'bread crumbs','feathered friends','flocks'],
    'verb': ['quack', 'fly','roast','migrate','nest', 'frolick','flock'],
    'gerund':['flying','roasting','quacking','migrating','nesting', 'frolicking','flocking'],
  },
  'corporate strategies': {
    'slides': ['synergy via #noun#', '1. pitch idea\n2. #verb#\n3. ???\n4. profit!', 'collaboration =\ncoordination =\n#noun#', 'key performance indicators for your #noun#', 'Think outside the #noun#', 'embrace #noun# and the lack of #noun#', 'be proactive; #verb# with #noun#', 'forming storming norming #gerund#','your company needs to #verb#! right now!!','90% of successful companies #verb#','shareholders are watching for #noun#'],
    'noun': ['synergy', 'key performance indicators', 'action items', 'collaboration', 'paradigm shift', 'holistic approaches', 'big data', 'fully digital strategies', 'generation x', 'millennials', 'globalization', 'outsourced labor'],
    'verb': ['synergize', 'maintain peak', 'dogfood', 'diversify', 'algorithmically enhance', 'leverage', 'right-size'],
    'gerund': ['synergizing','diversifying','leveraging','right-sizing'],
  },
  'parenting a teen': {
    'slides': ['top extracurricular activities:\n1. #noun# club\n2. sports\n3. #gerund#', 'do you need to supervise #verb# time?', '#noun# concerns:\n 1. Safety\n 2. #noun#', 'making time to #verb# together','condoms, condoms, condoms!','tough love vs #noun#','their future depends on #noun#','parenting studies on #noun#','do their friends #verb#?'],
    'noun':['your teen','drugs','top colleges','parties','family values','family dinnertime','ankle monitor'],
    'verb':['rebel','nurture','spend quality time','heart to heart','ground','spank','love','discipline','sex'],
    'gerund':['spending quality time','rebelling','grounding','spanking','nurturing'],
  },
  'treating illnesses': {
    'slides': ['the uncommon cold and your #noun#', 'doctors hate him! one neat trick about #noun#', '#noun# and side effects?', 'when do you need to call for #noun#?', 'living with chronic #noun#','10 glasses of #noun# a day','controversial studies on adults who #verb#','suffering from #noun#? try #gerund#!','consult your doctor if you #verb#','#gerund#: how much is enough?','do apples help you #verb#?','can vaccines cause #noun#?'],
    'noun':['fatigue','homeopathic remedies','cure for cancer','balanced diet','headache','cramps','ancient chinese remedies','jaundice','western medicine'],
    'verb':['sneeze','cough','dilute','home-brew','vomit','vaccinate','diagnose'],
    'gerund':['diluting','vomiting','coughing','diagnosing'],
  },
  'heartthrobs': {
    'slides':['tall, dark & #noun#','of course you want to meet #noun#, but what about #noun#?','does your crush #verb#?','meet your crush:\n1. #verb# him\n2. find #noun#\n3. happily ever after','#noun# and unrealistic body standards','do all movie stars #verb#?','unique names like "#noun# George" = more popular with teen girls','#noun# in hollywood','#verb# + #verb# = 24-pack in days!','most movie stars = secretly #verb# fans!'],
    'noun':['celebrity crush','movie stars','sexy movie villain','daring rogues','dreamboat',],
    'verb':['weightlift','stalk','moisturize','date','idolize','flex','gossip'],
    'gerund':['weightlifting','idolizing','dating','stalking','flexing','gossip'],
  },
  'product reviews':{
    'slides':['the dreaded one-star: did you remember to #verb#?','10% of reviewers actually tried your #noun#','flashy packaging vs\ncontent vs\n#noun#','#gerund# increases word of mouth','search engine optimization with #noun#','successful unboxing videos #verb#!','check for #noun# daily','#noun# making cheap knock-offs','is it ever okay to #verb# for likes?','get #noun# from wholesalers','listen to your customers: they need #noun#!','fast shipping = higher #noun# (on average)'],
    'noun':['target audiences','competitive price','craftsmanship','cheap foreign knock-offs','giveaway','ratings','rave reviews','unbelievable deals'],
    'verb':['unbox','complain','return','review','bribe','ship','copyright'],
    'gerund':['complaining','reviewing','bribing','shipping', 'copyrighting'],
  },
  'millennials':{
    'slides':['harry potter and the #noun# of the #noun#','#noun# in coffeeshops?','locally-produced #noun#','bigger eyeglasses make for bolder #noun#','#verb# with "that internet thing"','#noun#: sign of the apocalypse?','entry level #noun#','#gerund#: new fad!','appeal to millennials with #noun#!','top millennial attractors:\n1. #noun#\n2. green #noun#\n3. easy to #verb#','coloring books and #verb# time = comfort','how many millennials really #verb#?'],
    'noun':['hipster','cell phone','eyeglasses','social media','coffee','artisanal pizza','craft beer'],
    'verb':['conduct studies', 'frolf','socialize','color','post on facebook','trend-set'],
    'gerund':['frolfing','playing on phones','trend-setting','socializing','coloring'],
  },
  'modern city life':{
    'slides':['keeping #noun# off your lawn','high-rises and #noun#','whatever happened to my flying #noun#?','should you #verb#, or take public transportation?','feeling lost in a crowd? try\n1. #gerund#\n2. seek #noun#\n 3. never ever #verb#!','the dating scene: singles that #verb#','renting vs #gerund#','the blight of urban #noun#','fire: a serious #noun# risk','carry spare change to cover #gerund#','prestigious #noun# condos: the best place to #verb#'],
    'noun':['robocop','nightclubs','skyscraper','urban blight','smog','tindr','mayor','department store','traffic jam'],
    'verb':['rent','party','retire','scooter','dine','date','ride-share'],
    'gerund':['renting','partying','retiring','scootering','dining','dating','ride-sharing'],
  },
  'ponies':{
    'slides':['every little girl dreams of #noun# of her very own','my little pony: friendship is #noun#','everyone likes ponies that #verb#','preteens and #gerund# ponies','top pony colors:\n1. Pink\n2. Purple\n3. #noun# blue','merchandising and #noun#!','could boys like ponies if they #verb#?','#gerund# the "brony" demographic','hooves and cute #noun#','can you #verb# ponies? yes. but should you?','#noun# can teach girls self-esteem'],
    'noun':['magic','rainbow','sparkle','pretty mares','best friends','friendship','unicorn','pegasus'],
    'verb':['prance','resolve conflict','canter','neigh','gallop','trot'],
    'gerund':['prancing','resolving conflict','cantering','neighing','galloping','trotting'],
  },
  'multi-level marketing':{
    'slides':['never say "pyramid": try "#noun#" instead!','growing your percentages by #gerund#','attend my #gerund# seminar on march 19th!','how to talk to police about #noun#','when the jig is up, #verb#','desperate + #noun# = ideal hire', '#noun# = trickle-up','#noun# and salesperson attrition','look reputable by #gerund#','sell to friends, family, #noun#','it isn\'t illegal if you #verb#','own it! be proud when you #verb#','what product to pick? top sellers include #noun# and #noun#'],
    'noun':['quality product','obscene profit','salesperson','unemployed youth','lawyer','college student','gullible housewives','seminar','start-up fee'],
    'verb':['market','recruit','evangelize','profit','flee','lie'],
    'gerund':['marketing','recruiting','evangelizing','profiting','fleeing','lying'],
  },
  'greek mythology':{
    'slides':['did zeus just turn #noun# into #noun#?','myths to explain the origin of #noun#','greek gods and their #gerund# escapades','poseidon is also the god of #noun#','hera punishes infidelity with #gerund#','tragedy, comedy, and #gerund# #noun#','#noun#: all greek to me!','athena sprang full-formed from the #noun# of zeus','hades, persephone, and #gerund# =  why we have winter now','cronus likes to #verb#. Yes, even his kids', '#noun#, god of the #noun#','#noun# + #noun# = pegasus'],
    'noun':['chariot','doric, ionic, and corinthian columns','extra-marital demigod babby','satyr','oracle','cerberus','river styx','lightning bolt','homemade wings'],
    'verb':['murder','seduce','kidnap','cannibalize','curse','prophesy','escape','sail'],
    'gerund':['murdering','seducing','kidnapping','cannibalizing','cursing','prophesying','escaping','sailing'],
  },
  'reconsidering stereotypes':{
    'slides':['impressions of #noun# formed in early childhood','try to meet #noun# yourself!', 'stereotypes are holding you back from #gerund#','going against your gut and #gerund#','top #noun# myths:\n1. Like to #verb#\n2. afraid of #noun#','#verb# and question your preconceptions','imagine how you would feel if someone told you that you #verb#','statistically, #noun# will only rarely #verb#'],
    'noun':['in-group','thugs','token <X>','racial stereotype','W.A.S.P.','N.I.M.B.Y.','strangers','weirdos'],
    'verb':['bully','wear black', 'pierce', 'steal','exclude','follow the crowd'],
    'gerund':['bullying','wearing black', 'piercing','stealing','excluding','following the crowd'],
  },
  'computer literacy':{
    'slides':['#gerund# the mouse is easier than it looks!','monitor, keyboard, and #noun#','a #gerund# speed of 120 is quite respectable','be careful not to #verb# while navigating the internet','secure #noun#:\n1. at least 8 characters\n2. at least 1 #noun#\n3. capital and lower case','search engines help you find #noun#','antivirus or #noun#?','your own printer, or a shared #noun#?','your grandchildren can answer questions about #noun#','don\'t be discouraged if you #verb# your #noun# once or twice'],
    'noun':['mouse','keyboard','password','username','advertisement','wobsite','internet browser','file system','monitor','central processing unit','graphics card','computer fan'],
    'verb':['mis-type','forget','key','click','doubleclick','restart','brick','diassemble'],
    'gerund':['mis-typing','forgetting','keying','clicking','doubleclicking','restarting','bricking','disassembling'],
  },
  'pop music':{
    'slides':['"baby, baby, #noun#"','"don\'t go #gerund# my heart"','chart-topper: "i want to #verb#"','why so many songs about #noun#?','top artist of 2017: justin #noun#','vocals > guitar > #noun#','lip-synching and #gerund#','revenue:\n1. #noun# sales\n2. concerts \n3. #noun#','#noun#: they just don\'t get it','#verb#: so last year','grammy-nominated #noun#','live in concert! "#noun# and the #noun#"','free tickets: worth your #noun#?','"#noun# and the #noun#": better than the beatles?'],
    'noun':['heart','sweet love','somethin-somethin','sugar daddy','guitarist','teen idol','teeny-bopper','raving fans','teenage girls','lips','eyes','hair','heartbreak'],
    'verb':['break','love 5-ever','smooch','sing','lip-synch','croon','touch'],
    'gerund':['breaking','loving 5-ever','smooching','singing','lip-synching','crooning','touching','necking'],
  },
'just desserts':{
  'slides':['behind the perfect petit-fours: #noun#','choosing between trifles and #noun#','#verb# your #noun# ahead of time = crisper pies!','#noun#: overrepresented in the dessert course?','avoid "raw-inside" bakes by #gerund#','baking the perfect #noun# takes patience','if the temperature is off, your #noun# may #verb#','#noun#: over 1,000 calories!','#noun# has a long history in the British Isles','#verb# cookies, or #verb# brownies?','wedding cakes need to #verb#','top your #noun# creation with #noun#!'],
  'noun':['chocolate','buttercream','raspberry','sponge','cake','icing','cookie','fondant','crisp crust','nutty goodness'],
  'verb':['bake','mix','taste','decorate','whip','burn','glaze'],
  'gerund':['baking','mixing','whipping','decorating','burning','glazing'],
},
  'the truth':{
    'slides':['what you don\'t know about #noun# may kill you', '#noun# + #noun# = cancer','if the moon landing was real, explain #noun#?','the government doesn\'t want you to #verb#','#gerund# = put on a list', 'restricted books:\n1. #gerund#\n2. my life as #noun#\n 3. catcher in the #noun#','what are #noun# really up to?','can #noun# melt steel beams?','secret ritual exposed: #gerund# with #noun#','every reporter to #verb# mysteriously vanished','wake up to the #gerund# epidemic, sheeple!','if they #verb#, they\'re hiding something','#verb# for the truth!'],
    'noun':['masons','the illuminati','ladies garment workers of america','the government','chemtrails','bugged microwaves','spies','aliens','the lost city of atlantis','the amish'],
    'verb':['silence','uncover','expose','genocide','rob','sleuth','abduct','torture'],
    'gerund':['silencing','uncovering','exposing','genociding','robbing','sleuthing','abducting','torturing'],
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
  let primariesUsed = 2;
  const slidesRemaining = game.global.total_slides;
  for (let i=2; i < slidesRemaining; ++i) {
    if (Math.random() < 0.5 && i <= Object.keys(primaryTemplates).length) {
      slides.push(makeWordSlide(game, primaryTemplates[i], secondaryWords));
      primariesUsed++;
      //console.log('primary', i, Object.keys(primaryTemplates).length);
    } else {
      slides.push(makeWordSlide(game, secondaryTemplates[i - primariesUsed], primaryWords));
      //console.log('secondary', i-primariesUsed, Object.keys(secondaryTemplates).length);
    }
  }

  if (game.global.addBonusSlide) {
    slides.push(new CenteredContent(game, 'BONUS SLIDE INCOMING!', true));
    if (primariesUsed < Object.keys(primaryTemplates).length){
    slides.push(makeWordSlide(game, primaryTemplates[game.global.total_slides], secondaryWords));
    } else {
    slides.push(makeWordSlide(game, secondaryTemplates[game.global.total_slides], primaryWords));
    }
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
