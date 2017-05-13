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

module.exports = {
  themes: themes,
  dictionary: dictionary
};
