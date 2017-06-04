import CenteredContent from './prefabs/centeredContent'

const commonTheme = {
  'slides': ['My list of #noun# puns', 'A list of all the #noun# I can think of', 'Examples of #noun#', 'How #noun# contributes to society','#gerund#: how much is enough?'],
  'noun': ['freedom','happiness','your mom','children','young adults','older adults','distant ancestors'],
  'verb': ['live','work','play','eat','replace','concern'],
  'gerund': ['living','working','playing','eating','replacing','concerning'],
};

const dictionary = {
   'ducks': {
    'slides': ['They quack, but can they #verb#?', 'don\'t ever #verb# with geese (especially canadian)', '<PRESENTER WILL NOW DEMONSTRATE #noun# DUCK CALL>', 'replace traditional decoys with #noun#', 'The difference between a female duck and a mallard: #noun#', 'woo orinthologists with quackers and #noun#','do they fly south just to #verb#?','attract ducks to your local park with #noun#','visit ponds in early spring to catch a glimpse of #noun# nests','rubber vs real: a tale of #noun#'],
    'noun': ['mallard', 'duck egg', 'darkwing duck', 'majestic space duck', 'quackers', 'delicious, smoked duck', 'fowl play', 'duck call', 'bread crumbs','feathered friends','flocks'],
    'verb': ['quack', 'fly','roast','migrate','nest', 'frolick','flock'],
    'gerund':['flying','roasting','quacking','migrating','nesting', 'frolicking','flocking'],
  },
  'corporate strategies': {
    'slides': ['synergy via #noun#', '1. pitch idea\n2. #verb#\n3. ???\n4. profit!', 'collaboration =\ncoordination =\n#noun#', 'key performance indicators for your #noun#', 'Think outside the #noun#', 'embrace #noun# and lack of #noun#', 'be proactive; #verb# with #noun#', 'forming storming norming #gerund#','your company needs to #verb#! right now!!','90% of successful companies #verb#','shareholders are watching for #noun#'],
    'noun': ['synergy', 'key performance indicators', 'action items', 'collaboration', 'paradigm shift', 'holistic approaches', 'big data', 'fully digital strategies', 'generation x', 'millennials', 'globalization', 'outsourced labor'],
    'verb': ['synergize', 'maintain peak', 'dogfood', 'diversify', 'algorithmically enhance', 'leverage', 'right-size'],
    'gerund': ['synergizing','diversifying','leveraging','right-sizing'],
  },
  'parenting a teen': {
    'slides': ['top extracurricular activities:\n1. #noun# club\n2. sports\n3. #gerund#', 'do you need to supervise #verb# time?', '#noun# concerns:\n 1. Safety\n 2. #noun#', 'making time to #verb# together','condoms, condoms, condoms!','tough love vs #noun#','their future depends on #noun#','parenting studies on #noun#','do their friends #verb#?','back in my day: when the worst-case scenario was #noun#','yes, your teen still loves you, even if he\'s #gerund#'],
    'noun':['your teen','drugs','top colleges','parties','family values','family dinnertime','ankle monitor'],
    'verb':['rebel','nurture','spend quality time','heart to heart','ground','spank','love','discipline','sex'],
    'gerund':['spending quality time','rebelling','grounding','spanking','nurturing'],
  },
  'treating illnesses': {
    'slides': ['the uncommon cold and your #noun#', 'doctors hate him! one neat trick about #noun#', '#noun# and side effects?', 'when do you need to call for #noun#?', 'living with chronic #noun#','10 glasses of #noun# a day','controversial studies on adults who #verb#','suffering from #noun#? try #gerund#!','consult your doctor if you #verb#','#gerund#: how much is enough?','do apples help you #verb#?','can vaccines cause #noun#?'],
    'noun':['fatigue','homeopathic remedies','cure for cancer','balanced diet','headache','cramps','ancient chinese remedies','jaundice','western medicine'],
    'verb':['sneeze','cough','dilute','home-brew','vomit','vaccinate','diagnose','juice-cleanse'],
    'gerund':['diluting','vomiting','coughing','diagnosing','juice-cleansing'],
  },
  'heartthrobs': {
    'slides':['tall, dark & #noun#','of course you want to meet #noun#, but what about #noun#?','does your crush #verb#?','meet your crush:\n1. #verb# him\n2. find #noun#\n3. happily ever after','#noun# and unrealistic body standards','do all movie stars #verb#?','unique names like "#noun# George" = way hotter','#noun# in hollywood','what if papparazzi caught your crush #gerund#?','most movie stars = secretly #verb# fans!','#noun# = squeeeeeee!','you know you want your crush to #verb#...and (spoiler!) he probably already does!'],
    'noun':['celebrity crush','single movie stars','sexy movie villains','dreamy blondes','dreamboat','mr. right','badonk-a-donk','sea-blue eyes','perfect teeth'],
    'verb':['stalk','moisturize','date','idolize','gossip','propose','break up'],
    'gerund':['idolizing','dating','stalking','gossipping','proposing','breaking up'],
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
    'verb':['rent','party','retire','scooter','dine','date','ride-share','recycle'],
    'gerund':['renting','partying','retiring','scootering','dining','dating','ride-sharing','recycling'],
  },
  'ponies':{
    'slides':['every little girl dreams of #noun# of her very own','my little pony: friendship is #noun#','everyone likes ponies that #verb#','preteens and #gerund# ponies','top pony colors:\n1. Pink\n2. Purple\n3. #noun# blue','merchandising and #noun#!','could boys like ponies if they #verb#?','#gerund# for the "brony" demographic','hooves and cute #noun#','can you #verb# ponies? yes. but should you?','#noun# can teach girls self-esteem'],
    'noun':['magic','rainbows','sparkles','pretty mares','best friends','friendship','unicorns','pegasus'],
    'verb':['prance','resolve conflict','canter','neigh','gallop','trot'],
    'gerund':['prancing','resolving conflict','cantering','neighing','galloping','trotting'],
  },
  'multi-level marketing':{
    'slides':['never say "pyramid": try "#noun#" instead!','growing your percentages by #gerund#','attend my #gerund# seminar on march 19th!','how to talk to police about #noun#','when the jig is up, #verb#','desperate + #noun# = ideal hire', '#noun# = trickle-up','#noun# and salesperson attrition','look reputable by #gerund#','sell to friends, family, #noun#','it isn\'t illegal if you #verb#','own it! be proud when you #verb#','#noun# and #noun# = top sellers!','consider #noun# when picking a product line'],
    'noun':['quality product','obscene profit','salesperson','unemployed youth','lawyer','college student','gullible housewives','seminar','start-up fee'],
    'verb':['market','recruit','evangelize','profit','flee','lie','money-launder'],
    'gerund':['marketing','recruiting','evangelizing','profiting','fleeing','lying','money-laundering'],
  },
  'greek mythology':{
    'slides':['did zeus just turn #noun# into #noun#?','myths to explain the origin of #noun#','greek gods and their #gerund# escapades','poseidon is also the god of #noun#','hera punishes infidelity with #gerund#','tragedy, comedy, and #gerund# #noun#','#noun#: all greek to me!','athena sprang full-formed from the #noun# of zeus','hades, persephone, and #gerund# =  why we have winter now','cronus likes to #verb#. Yes, even his kids', '#noun#, god of the #noun#','#noun# + #noun# = pegasus'],
    'noun':['fiery chariot','doric, ionic, and corinthian columns','extra-marital demigod babby','oracle','cerberus','river styx','lightning bolt','homemade, heat-sensitive wings'],
    'verb':['murder','seduce','kidnap','cannibalize','curse','prophesy','escape','battle'],
    'gerund':['murdering','seducing','kidnapping','cannibalizing','cursing','prophesying','escaping','battling'],
  },
  'reconsidering stereotypes':{
    'slides':['impressions of #noun# formed in early childhood','worried about #noun#? are you just afraid because you\'re underexposed?', 'stereotypes are holding you back from #gerund#','going against your gut and #gerund#','top #noun# myths:\n1. Like to #verb#\n2. afraid of #noun#','#verb# and question your preconceptions','imagine how you would feel if someone told you that you #verb#','statistically, #noun# will only rarely #verb#','many people learn to #verb# from their parents','put yourself in someone else\'s shoes before you #verb#'],
    'noun':['in-group','thugs','token <X>','racial stereotype','W.A.S.P.','N.I.M.B.Y.','strangers','weirdos'],
    'verb':['bully','wear black', 'pierce', 'steal','exclude','follow the crowd'],
    'gerund':['bullying','wearing black', 'piercing','stealing','excluding','following the crowd'],
  },
  'computer literacy':{
    'slides':['#gerund# the mouse is easier than it looks!','monitor, keyboard, and #noun#','#gerund.a# speed of 120 is quite respectable','be careful not to #verb# while navigating the internet','secure #noun#:\n1. at least 8 characters\n2. at least 1 #noun#\n3. capital and lower case','search engines help you find #noun#','antivirus or #noun#?','your own printer, or shared #noun#?','your grandchildren can answer questions about #noun#','don\'t be discouraged if you #verb# once in a while'],
    'noun':['mouse','keyboard','password','username','advertisement','wobsite','internet browser','file system','monitor','central processing unit','graphics card','computer fan'],
    'verb':['mis-type','forget','key','click','doubleclick','restart','brick','diassemble'],
    'gerund':['mis-typing','forgetting','keying','clicking','doubleclicking','restarting','bricking','disassembling'],
  },
  'pop music':{
    'slides':['"baby, baby, #noun#"','"don\'t go #gerund# my heart"','chart-topper: "i want to #verb#"','why so many songs about #noun#?','top-selling artist of 2017: "justin #noun#"','vocals > guitar > #noun#','lip-synching and #gerund#','sources of band revenue:\n1. #noun# sales\n2. concerts \n3. #noun#','#noun#: they just don\'t get it','#gerund#: so last year','grammy-nominated #noun#','live in concert! "#noun# and the #noun#"','free tickets: are they worth your #noun#?','"#noun# and the #noun#": better than the beatles?'],
    'noun':['heart','sweet love','li\'l somethin-somethin','sugar daddy','teen idol','teeny-bopper','raving fans','teenage girls','lips','eyes','hair','heartbreak'],
    'verb':['love 5-ever','smooch','sing','lip-synch','croon','touch','"dance" (you know what it really means)'],
    'gerund':['loving 5-ever','smooching','singing','lip-synching','crooning','touching','necking', '"dancing" (you know what it really means)'],
  },
'just desserts':{
  'slides':['behind the perfect petit-fours: #noun#','choosing between trifles and #noun#','#verb# ahead of time = crisper pies!','#noun#: overrepresented in the dessert course?','avoid "raw-inside" bakes by #gerund#','baking the perfect #noun# takes patience','if the #noun# is off, your souffle may deflate','#noun#: over 1,000 calories!','#noun# has a long history in the British Isles','#verb# cookies, or #verb# brownies?','wedding cakes need to #verb#','top your #noun# creation with #noun#!'],
  'noun':['chocolate','buttercream','raspberry','sponge','cake','icing','cookie','fondant','crisp crust','nutty goodness'],
  'verb':['bake','mix','taste','decorate','whip','burn','glaze'],
  'gerund':['baking','mixing','whipping','decorating','burning','glazing'],
},
  'the truth':{
    'slides':['what you don\'t know about #noun# may kill you', '#noun# + #noun# = cancer','if the moon landing was real, explain #noun#?','the government doesn\'t want you to #verb#','#gerund# = put on a list', 'restricted books:\n1. #gerund#\n2. my life as #noun#\n 3. catcher in the #noun#','#noun#: what\'s the real agenda?','can #noun# melt steel beams?','#noun# secret ritual exposed: #gerund#','every reporter to #verb# has mysteriously vanished','wake up to the #gerund# epidemic, sheeple!','if they #verb#, they\'re hiding something','#verb# for the truth!'],
    'noun':['masons','illuminati','ladies garment workers of america','government conspiracy','chemtrails','bugged microwaves','spies','aliens','lost city of atlantis','the amish'],
    'verb':['silence','uncover','expose','genocide','embezzle','sleuth','abduct','torture'],
    'gerund':['silencing','uncovering','exposing','genociding','embezzling','sleuthing','abducting','torturing'],
  },
  'extreme fitness':{
    'slides':['real men #verb#! every day!','#noun#: what your muscles crave!','sure, my grandma could #verb#. That\'s why I #verb#!','crossfit guru Mike says to #verb#','#noun# before bros (but after lifting)','never skip #verb# day!','want a twelve-pack? spend time #gerund#','#verb# + #verb# = 24-pack in days!','can you ever get so swole that you cannot #verb# anymore?','let\'s talk diet: #noun# and eggs for protein','how to deal with being called shallow: show them your #noun#','getting discouraged? #verb# for a day','#noun# highest in early twenties!  Now is the time!','lifting > #gerund#'],
    'noun':['protein powder','whey','barbells','man-mode','parkour','crossfit','sick gainz','quads','pecs','eight-pack','testosterone','brawn'],
    'verb':['crossfit','pump up','swell','bulk','cut calories','weightlift','sprint','chin-up','flex'],
    'gerund':['crossfitting','pumping up','swelling','bulking','cutting calories','weightlifting','sprinting','flexing'],
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
  const themes = combineThemes(theme);
  const templates = commonTheme.slides.concat(dictionary[theme.primary].slides, dictionary[theme.secondary].slides);
  Phaser.ArrayUtils.shuffle(templates);

  const slides = [];

  const slidesRemaining = game.global.total_slides;
  for (let i=0; i < slidesRemaining; ++i) {
    slides.push(makeWordSlide(game, templates[i], themes));
  }

  if (game.global.addBonusSlide) {
    slides.push(new CenteredContent(game, 'BONUS SLIDE INCOMING!', true));
    slides.push(makeWordSlide(game, templates[i], themes));
  }

  return slides;
};

const combineThemes = (themes) => {
  const amalgam = {};  
  amalgam.noun = commonTheme.noun.concat(dictionary[themes.primary].noun, dictionary[themes.secondary].noun);
  amalgam.verb = commonTheme.verb.concat(dictionary[themes.primary].verb, dictionary[themes.secondary].verb);
  amalgam.gerund = commonTheme.gerund.concat(dictionary[themes.primary].gerund, dictionary[themes.secondary].gerund);
  return createGrammar(amalgam);
}

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
