import CenteredContent from './prefabs/centeredContent'

const commonTheme = {
  'slides': ['Unusual examples of #noun#', 'Uses for #noun# you may not know about', 'How #noun# contributes to society','#gerund#: how much is enough?','the subtle link between #noun# and #noun#','< live demonstration >','#noun#: have you tried #gerund#?',"#noun# + #noun#?"],
  'noun': [],
  'verb': [],
  'gerund': [],
};

const presenterName = {
  'firstname':['darryl','smitty','leo','gargantua','emmalina','dee dee','carl','mike','sue','carol'],
  'lastname1':['open','smith','john','sky','rose','handcart','hard','apple','east'],
  'lastname2':['bottom','hammer','son','tailor','smith','ee','lin','heimer','wick','s','ski'],
  'profession':['housewife','architect','beekeeper','scientist','self employed','businessman','president','professional lecturer'],
  'trivia':['2 kids','avid gardener','72 teeth','this is my 200th presentation!','raise corgis','related to abraham lincoln','visited 6 continents','no hobbies of interest'],
};

const feedbackQuestions = {
  'question':['presenter knew the subject matter well','pacing of the presentation was good','i learned a lot from this presentation','presenter captured my interest','presenter was able to answer questions','presenter was devilishly handsome','appropriate use of visual aids','presentation was appropriate for my age group','presentation was coherent','presentation was relevant to my interests','presenter made good use of the daily vocabulary words','i can apply what i learned from this presentation to my daily life','presentation reinforced family values','presentation seemed well rehearsed','presentation inspired me to give 110 %','presenter covered both sides of the controversy'],
};

const dictionary = {
   'ducks': {
    'slides': ['They quack, but can they #verb#?', 'don\'t ever #verb# with geese (especially canadian)', '<PRESENTER WILL NOW DEMONSTRATE #noun# DUCK CALL>', 'replace traditional decoys with #noun#', 'The difference between a female duck and a mallard: #noun#', 'woo orinthologists with quackers and #noun#','do they fly south just to #verb#?','attract ducks to your local park with #noun#','visit ponds in early spring to catch a glimpse of #noun# nests','rubber vs real: a tale of #noun#'],
    'noun': ['mallard', 'duck egg', 'darkwing duck', 'majestic space duck', 'delicious, smoked duck', 'fowl play', 'duck call', 'bread crumbs','feathered friends','flocks'],
    'verb': ['quack', 'fly','roast','migrate','nest', 'frolick','flock'],
    'gerund':['flying','roasting','quacking','migrating','nesting', 'frolicking','flocking'],
  },
  'corporate strategies': {
    'slides': ['synergy via #noun#', '1. pitch idea\n2. #verb#\n3. ???\n4. profit!', 'collaboration =\ncoordination =\n#noun#', 'key performance indicators for your #noun#', 'Think outside the #noun#', 'embrace #noun# and lack of #noun#', 'be proactive; #verb# with #noun#', 'forming storming norming #gerund#','your company needs to #verb#! right now!!','90% of successful companies #verb#','shareholders are watching for #noun#'],
    'noun': ['synergy', 'key performance indicators', 'action items', 'collaboration', 'paradigm shift', 'holistic approaches', 'big data', 'fully digital strategies', 'generation x', 'globalization', 'outsourced labor'],
    'verb': ['synergize', 'maintain peak', 'dogfood', 'diversify', 'algorithmically enhance', 'leverage', 'right-size'],
    'gerund': ['synergizing','diversifying','leveraging','right-sizing','eating your own dogfood'],
  },
  'parenting a teen': {
    'slides': ['top extracurricular activities:\n1. #noun# club\n2. sports\n3. #gerund#', 'do you need to supervise #verb# time?', '#noun# concerns:\n 1. Safety\n 2. #noun#', 'making time to #verb# together','condoms, condoms, condoms!','tough love vs #noun#','their future depends on #noun#','parenting studies on #noun#','do their friends #verb#?','back in my day: when the worst-case scenario was #noun#','yes, your teen still loves you, even if he\'s #gerund#'],
    'noun':['your teen','drugs','top colleges','parties','family values','family dinnertime','ankle monitor'],
    'verb':['rebel','nurture','spend quality time','heart to heart','ground','spank','love','discipline','sex'],
    'gerund':['spending quality time','rebelling','grounding','spanking','nurturing'],
  },
  'treating illnesses': {
    'slides': ['the uncommon cold and your #noun#', 'doctors hate him!\n one neat trick about #noun#', '#noun# and serious side effects?', 'when do you need to call for #noun#?', 'living with chronic #noun#','10 glasses of #noun# a day','controversial health studies on adults who #verb#','suffering from #noun#? try #gerund#!','consult your doctor if you #verb#','do apples help you #verb#?','can vaccines cause #noun#?'],
    'noun':['fatigue','homeopathic remedies','cure for cancer','balanced diet','headache','cramps','ancient chinese remedies','jaundice','western medicine'],
    'verb':['sneeze','cough','dilute','home-brew','vomit','vaccinate','diagnose','juice-cleanse'],
    'gerund':['diluting','vomiting','coughing','diagnosing','juice-cleansing'],
  },
  'romance': {
    'slides':['tall, dark & #noun#','does your crush #verb#?','how to meet your crush:\n1. #verb# him\n2. find #noun#\n3. happily ever after','do all movie stars #verb#?','unique names like "#noun# George" = way hotter','#noun# in hollywood','what if papparazzi caught your crush #gerund#?','most movie stars = secretly #verb# fans!','#noun# = squeeeeeee!','you know you want your crush to #verb#...\n and (spoiler!) he probably already does!','learn what your crush likes:\n1. #noun#\n2. shy girls\n3. #gerund#','have you read "early evening: #gerund#"?','robert #noun#: hottest man of the year'],
    'noun':['celebrity crush','single movie stars','sexy movie villains','dreamy blondes','dreamboat','mr. right','badonk-a-donk','sea-blue eyes','perfect teeth'],
    'verb':['stalk','moisturize','date','idolize','gossip','propose','break up'],
    'gerund':['idolizing','dating','stalking','gossipping','proposing','breaking up'],
  },
  'product reviews':{
    'slides':['the dreaded one-star review: did you remember to #verb#?','10% of reviewers actually tried your #noun#','flashy packaging vs\ncontent vs\n#noun#','#gerund# increases word of mouth','search engine optimization with #noun#','successful unboxing videos #verb#!','check your virtual storefront for #noun# daily','#noun# making cheap knock-offs','is it ever okay to #verb# for likes?','get #noun# from wholesalers','listen to your customers: they need #noun#!','fast shipping = higher #noun# (on average)','get your friends and family to leave you #noun# reviews'],
    'noun':['target audiences','competitive price','craftsmanship','cheap foreign knock-offs','giveaway','ratings','rave reviews','unbelievable deals','return policy'],
    'verb':['unbox','bribe','ship','copyright','manufacture','advertise','complain on the internet','return your product','leave bad reviews'],
    'gerund':['unboxing','bribing','shipping', 'copyrighting','manufacturing','advertising','complaining on the internet','returning your product','leaving bad reviews'],
  },
  'millennials':{
    'slides':['the "harry potter" generation and the #noun# of the #noun#','#noun# in coffeeshops?','locally-produced #noun#','bigger eyeglasses make for bolder #noun#','#verb# with "that internet thing" millennials like','#noun#: sign of the apocalypse?','college degree = entry level #noun#','#gerund#: new fad with the college crowd!','appeal to millennials with #noun#!','top millennial attractors:\n1. #noun#\n2. green #noun#\n3. easy to #verb#','coloring books and #verb# time = comfort','how many millennials really #verb#?','show millennials #noun#, and they\'ll look away from their phones'],
    'noun':['hipsters','cell phones','social media','coffee','artisanal pizza','craft beer','safe spaces','fidget spinner'],
    'verb':['frolf','socialize','color','post on facebook','trend-set','use social media'],
    'gerund':['frolfing','playing on phones','trend-setting','socializing','coloring','using social media','dabbing'],
  },
  'modern city life':{
    'slides':['keeping #noun# off your lawn','high-rises and #noun#','it\'s the 21st century.\nwhatever happened to my flying #noun#?','should you #verb#, or take public transportation?','feeling lost in a crowd? try\n1. #gerund#\n2. seek #noun#\n 3. never ever #verb#!','the dating scene: singles that #verb#','renting vs #gerund#','the blight of urban #noun#','fire: a serious #noun# risk','carry spare change to cover #gerund#','condos: the best place to #verb#','#noun# in the urban jungle','longing for the suburbs? remember, in the city you can #verb#'],
    'noun':['robocop','nightlife','skyscrapers','urban blight','smog','tindr','your mayor','department stores','traffic jams','crowds','city parks'],
    'verb':['rent','work downtown','scooter','eat out','find love in the city','ride-share','recycle'],
    'gerund':['renting','working downtown','scootering','eating out','finding love in the city','ride-sharing','recycling'],
  },
  'ponies':{
    'slides':['every little girl dreams of #noun# of her very own','my pony\'s friendship is #noun#','everyone likes ponies that #verb#','preteens and #gerund# ponies','top pony colors:\n1. Pink\n2. Purple\n3. #noun# blue','merchandising and #noun#!','could boys like ponies if they #verb#?','#gerund# for the "brony" demographic','hooves and cute #noun#','can you #verb# with ponies? yes. but should you?','#noun# can teach girls self-esteem'],
    'noun':['magic','rainbows','sparkles','pretty mares','best friends','friendship','unicorns','pegasus','herd'],
    'verb':['prance','resolve conflict','canter','neigh','gallop','trot'],
    'gerund':['prancing','resolving conflict','cantering','neighing','galloping','trotting'],
  },
  'multi-level marketing':{
    'slides':['never say "pyramid": try "#noun#" instead!','growing your percentages by #gerund#','attend my #gerund# seminar on march 19th!','how to talk to police about #noun#','when the jig is up, #verb#','desperate + #noun# = ideal hire', '#noun# = trickle-up','#noun# and salesperson attrition','look reputable by #gerund#','sell to friends, family, #noun#','it isn\'t illegal if you #verb#','own it! be proud when you #verb#','#noun# and #noun# = top sellers!','consider #noun# when picking a product line'],
    'noun':['quality product','obscene profit','salesperson','unemployed youth','lawyer','college student','gullible housewives','seminar','start-up fee'],
    'verb':['market','recruit for the company','evangelize company values','profit','flee investigation','lie','money-launder'],
    'gerund':['marketing','recruiting for the company','evangelizing company values','profiting','fleeing investigations','lying','money-laundering'],
  },
  'greek mythology':{
    'slides':['did zeus just turn himself into #noun#?','myths to explain the origin of #noun#','greek gods and their #gerund# escapades','poseidon is also the god of #noun#','hera punishes infidelity with #gerund#','tragedy, comedy, and #gerund# with #noun#','#noun#: all greek to me!','athena sprang full-formed from the #noun# of zeus','hades, persephone, and #gerund# =  why we have winter now','cronus likes to #verb#. Yes, even his kids', '#noun#, god of the #noun#','#noun# + #noun# = pegasus','the ancient greeks would worship aphrodite by #gerund#'],
    'noun':['fiery chariot','doric, ionic, and corinthian columns','extra-marital demigod babby','oracle','cerberus','river styx','lightning bolt','homemade, heat-sensitive wings'],
    'verb':['murder','seduce','kidnap','cannibalize','curse','prophesy','escape','throw lightningbolts'],
    'gerund':['murdering','seducing','kidnapping','cannibalizing','cursing','prophesying','escaping','throwing lightningbolts'],
  },
  'reconsidering stereotypes':{
    'slides':['impressions of #noun# formed in early childhood','worried about #noun#? are you just afraid because you\'re underexposed?', 'stereotypes are holding you back from #gerund#','going against your gut and #gerund#','top #noun# myths:\n1. Like to #verb#\n2. afraid of #noun#','#verb# and question your preconceptions','imagine how you would feel if someone told you that you #verb#','statistically, #noun# will only rarely #verb#','many people learn to #verb# from their parents','put yourself in someone else\'s shoes before you #verb#'],
    'noun':['in-group','thugs','token < X > of the group','racial stereotype','W.A.S.P. (white anglo-saxon protestant)','N.I.M.B.Y. (not in my backyard)','strangers','weirdos'],
    'verb':['bully','wear black', 'pierce', 'steal','exclude','follow the crowd'],
    'gerund':['bullying','wearing black', 'piercing','stealing','excluding','following the crowd'],
  },
  'computer literacy':{
    'slides':['#gerund# the mouse is easier than it looks!','monitor, keyboard, and #noun#','#gerund.a# speed of 120 is quite respectable','be careful not to #verb# while navigating the internet','secure #noun#:\n1. at least 8 characters\n2. at least 1 #noun#\n3. capital and lower case','search engines help you find #noun#','antivirus or #noun#?','your own printer, or shared #noun#?','your grandchildren can answer questions about #noun#','don\'t be discouraged if you #verb# once in a while'],
    'noun':['mouse','keyboard','password','username','advertisement','wobsite','internet browser','file system','monitor','central processing unit','graphics card','computer fan'],
    'verb':['mis-type','forget','key','click','doubleclick','restart','disassemble'],
    'gerund':['mis-typing','forgetting','keying','clicking','doubleclicking','restarting','disassembling'],
  },
  'pop music':{
    'slides':['"baby, baby, #noun#"','"don\'t go #gerund# my heart"','chart-topper: "i want to #verb#"','why so many songs about #noun#?','top-selling artist of 2017: "justin #noun#"','vocals > guitar > #noun#','lip-synching and #gerund#','sources of band revenue:\n1. #noun# sales\n2. concerts \n3. #noun#','#noun#: they just don\'t get it','#gerund#: so last year','grammy-nominated #noun#','live in concert! "#noun# and the #noun#"','free tickets: are they worth your #noun#?','"#noun# and the #noun#": better than the beatles?'],
    'noun':['heart','sweet love','li\'l somethin-somethin','sugar daddy','teen idol','teeny-bopper','raving fans','teenage girls','lips','eyes','hair','heartbreak'],
    'verb':['love 5-ever','smooch','sing','lip-synch','croon','touch','"dance" (you know what it really means)'],
    'gerund':['loving 5-ever','smooching','singing','lip-synching','crooning','touching','"dancing" (you know what it really means)'],
  },
'just desserts':{
  'slides':['behind the perfect petit-fours: #noun#','choosing between trifles and #noun#','#verb# ahead of time = crisper pies!','#noun#: overrepresented in the dessert course?','avoid "raw-inside" bakes by #gerund#','baking the perfect #noun# takes patience','#noun# problems mean your souffle may deflate','#noun#: over 1,000 calories!','#noun# has a long history in the British Isles','do cookies or brownies benefit more from #gerund#?','wedding cakes need to #verb#','top your delicious #noun# creation with #noun#!','top chefs agree: you simply must #verb#'],
  'noun':['chocolate','buttercream','raspberry','sponge','cake','icing','cookie','fondant','crisp crust','nutty goodness'],
  'verb':['bake','mix','taste','decorate','whip','burn','glaze'],
  'gerund':['baking','mixing','whipping','decorating','burning','glazing'],
},
  'the truth':{
    'slides':['what you don\'t know about #noun# may kill you', '#noun# + #noun# = cancer','if the moon landing was real, explain #noun#?','the government doesn\'t want you to #verb#','#gerund# = put on a list', 'restricted books:\n1. #gerund#\n2. my life as #noun#\n 3. catcher in the #noun#','#noun#: what\'s the real agenda?','can #noun# melt steel beams?','#noun# secret ritual exposed: #gerund#','every reporter to #verb# has mysteriously vanished','wake up to the #gerund# epidemic, sheeple!','if they #verb#, they\'re hiding something','#verb# for the truth!'],
    'noun':['masons','illuminati','ladies garment workers of america union','chemtrails','bugged microwaves','spies','aliens','lost city of atlantis','the amish','pyramids','amelia earhart'],
    'verb':['silence us','uncover conspiracies','expose the truth','genocide','"disappear"','sleuth','abduct','torture'],
    'gerund':['silencing us','uncovering conspiracing','exposing the truth','genociding','"disappearing"','sleuthing','abducting','torturing'],
  },
  'extreme fitness':{
    'slides':['real men #verb#! every day!','#noun#: what your muscles crave!','even my grandma could crossfit. That\'s why I #verb#!','fitness guru Mike says you should #verb# 2 hours a day','#noun# before bros (but after lifting)','never skip #verb# day!','want an eight-pack? spend time #gerund#','#verb# + #verb# = 8-pack in days!','can you ever get so swole that you cannot #verb# anymore?','let\'s talk diet: #noun# for protein','how to deal with being called shallow: show them your #noun#','getting discouraged? #verb# for a day to mix up your exercise routine','studies show #noun# highest in early twenties.\n start early for more gains!','lifting > #gerund#'],
    'noun':['protein powder','whey','barbells','man-mode','parkour','crossfit','sick gainz','quads','pecs','eight-pack','testosterone','brawn'],
    'verb':['crossfit','pump up','swell','bulk','cut calories','weightlift','sprint','chin-up','flex'],
    'gerund':['crossfitting','pumping up','swelling','bulking','cutting calories','weightlifting','sprinting','flexing'],
  },
  'dental hygiene':{
    'slides':['so you\'re inconsistent about flossing.\nmake up for it by #gerund#','#noun#: full of cavity-causing sugar!','#verb# twice a day for great breath','modern dentist offices will have #noun#','yellowing teeth? consider #gerund#','#noun# now, or dentures in ten years?','use a pea-sized amount of toothpaste when you #verb#','toothache? your dentist may suggest #gerund#','alternatives to daily flossing: \n1. mouthwash\n2. #gerund#\n3. #noun#','be careful! sugary foods cause #noun#','local anesthesia or laughing gas for #noun# surgery?'],
    'noun':['toothbrush','toothpaste','silk floss','mouthwash','cavities','shiny chompers','dental fillings','root canal','bad breath','yellow teeth','canine teeth','wisdom teeth'],
    'verb':['brush','floss','gargle','pull teeth','drill cavities','use mouthwash'],
    'gerund':['brushing','flossing','gargling','pulling teeth','drilling cavities','using mouthwash'],
  },
  'agriculture':{
  'slides':['do you, or i, or anyone know\n how oats, peas, beans, and #noun# grow?','in the northern hemisphere, early march is prime #noun# season','pros of genetically modified crops:\n1. bigger #noun#\n2. resistant to #gerund#\n3. lovely color','cons of genetically modified crops: \n1. risk of #noun#\n2. health concerns\n3. worth the #noun#?','never use tractors in fields with #noun#!','#noun# = easy blue ribbon at the state fair','fertilize with #noun#?','you may disagree, but I say radishes > #noun#','leftover biomatter can fuel #noun#','#gerund#: good or bad for your fields?','believe it or not, eggs come from the #noun# of the chicken'],
  'noun':['corn','combine harvesters','heritage tomatoes','G.m.o.s (genetically modified organisms)','cows','sheep','prize-winning cucumber','rutabagas','sweetpeas','strawberries'],
  'verb':['harvest crops','fertilize','mulch','spray pesticide','till fields','genetically engineer'],
  'gerund':['harvesting crops','fertilizing','mulching','spraying pesticide','tilling fields','genetically engineering'],
},
'balanced breakfast':{
'slides':['new marshmallow shape: #noun#!','why fry up boring old eggs when you can #verb#?','#gerund# takes too long for a weekday breakfast','for a balanced breakfast:\n1. #noun#\n2. #noun#\n3. never forget to #verb# afterwards!','bangers and #noun#: the british way','need some citrus with your pancakes? try #noun#','#noun#: absolutely belongs in the most important meal of the day','#noun# > sugary cereals','#gerund#= more fiber in each bowl', 'can you still enjoy #noun# if it\'s after 10am?','kids love the taste of #noun#','#noun# for breakfast???','#noun# and diabetes in breakfast-loving youths'],
'noun':['sugar','wheat bran','burnt toast','milk and cereal','pancakes','breakfast','bacon and eggs','grapefruit','loaded omelettes'],
'verb':['pour cereal','juice oranges','chew bacon','fry flapjacks','peel oranges','sizzle','sniff savory aromas'],
'gerund':['pouring cereal', 'juicing oranges','chewing bacon','frying flapjacks','breakfasting','sizzling','sniffing savory aromas'],
},
'marine biology':{
'slides':['loch ness monster: new kind of #noun#?','can whales really #verb#?','#gerund# in the Atlantic ocean','whaling ships, #gerund#, and the environmental devastation','find missing clownfish by #gerund#','underwater caves: home to #noun# and #noun#','top-selling Pacific catch: #noun#','#gerund#: how the lanternfish finds prey','electric eels #verb# to generate 500 volts', 'are there more mysteries waiting in the depths of the oceans?\nonly #noun# can tell','treat jellyfish stings by #gerund#','snorkeling is a popular way to encounter #noun#','the deep ocean has over 50,000 different kinds of #noun#','whales "sing" to #verb#','healhty coral will have plenty of #noun#'],
'noun':['shark','octopus','angelfish','loch ness monster','great old ones in the deep','undiscovered species','shark cage','mermaids','coral','starfish','whales'],
'verb':['swim with dolphins','scuba dive','fish','splash around','use sonar'],
'gerund':['swimming with dolphins','scuba diving','fishing','splashing around','submarining','using sonar'],
},
  'beard care':{
  'slides':['5 inches > 2 inches > #noun#','do beards make you #noun#?','flower beards and #noun#','maintain manly stubble by #gerund#','help! my beard is #gerund#!','beard wash: worth giving up #gerund#?','save crumbs for later with your majestic chin-bush!','#noun# style beards: manliest thing ever?','for thicker beards, try\n1. #gerund#\n2. testosterone supplements\n3. #gerund#','men with beards = #noun#','why did all my hair migrate to my #noun#?','if you have 5 o\'clock shadows by 1, you may be #noun#','beard going gray? try #gerund#','#noun# or beard implants?','how often does your beard need to #verb#?','do you have to like #gerund# if you have a majestic beard?\n technically no. but maybe you should anyway.'],
  'noun':['wizard beard','muttonchops','soul patch','neckbeard','handlebar mustache','goatee'],
  'verb':['shave','trim','hedge-clip','proudly display your facial hair','tickle','groom'],
  'gerund':['shaving','trimming','hedge-clipping','proudly displaying your facial hair','tickling','balding','grooming'],
},
  'life with pets':{
  'slides':['fido barking too much? try #gerund#','cats mark their territory by #gerund#','cats + dogs = #noun#','#noun# and birds: great apartment pets','saying goodbye: when your pet has #noun#','obedience school tip: always #verb# before walks','that "free" puppy might have #noun#','corgis: little legs, big #noun#','exotic pet concerns:\n1. #noun#\n2. finding a vet\n3. #gerund#','your dog shows he really loves you by #gerund#','#verb# with your pet to make new friends!','leash-training a cat: easier to #verb#!','rabbits need #noun# to really thrive','fuzzy companionship and #noun#'],
  'noun':['german shepherds','little yappy dogs','fluffballs','doggie doo-doo','birdcage','great danes','yellow labs','bulldogs','siamese cats','hamsters','tropical fish'],
  'verb':['kennel','crate-train','play fetch','rub fuzzy bellies','sniff butts', 'clean litterboxes','teach tricks','scold with newspaper'],
  'gerund':['kennelling','crate-training','playing fetch','rubbing fuzzy bellies','sniffing butts','cleaning litterboxes','teaching tricks','scolding with newspaper'],
},
  /* --template for new slide topic
    '':{
    'slides':[],
    'noun':[],
    'verb':[],
    'gerund':[],
  },*/


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
      slides.push(makeWordSlide(game, primaryTemplates[primariesUsed], secondaryWords));
      primariesUsed++;
      //console.log('primary', i, Object.keys(primaryTemplates).length);
    } else {
      if (Math.random() >= 0.8 && commonsUsed <= Object.keys(commonTemplates).length){
        slides.push(makeWordSlide(game, commonTemplates[commonsUsed], primaryWords));
        commonsUsed++;
      } else {
        slides.push(makeWordSlide(game, secondaryTemplates[secondariesUsed], primaryWords));
        secondariesUsed++;
        //console.log('secondary', i-primariesUsed, Object.keys(secondaryTemplates).length);

      }
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
  Phaser.ArrayUtils.shuffle(grammar);
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

const makeFeedbackSlide = () => {
  const questions = feedbackQuestions.question;
  Phaser.ArrayUtils.shuffle(questions);
  const str = 'Audience: please discuss and answer the following questions:\n\n1. ' + questions[0] + '\n2. ' + questions[1] + '\n3. ' + questions[2]  + '\n4. name one thing you learned from this presentation';
  return toTitleCase(str);
}

module.exports = {
  dictionary: dictionary,
  makeSlides: makeSlides,
  generateTitle: generateTitle,
  pickTheme: pickTheme,
  makeFeedbackSlide: makeFeedbackSlide,
};
