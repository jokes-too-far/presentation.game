const generateTitle = () => {
  var grammar = tracery.createGrammar({
    'presentation': ['presentment',' demonstration',' display',' introduction',' intro',' attitude',' ceremony',' informing',' making known',' position',' posture',' proposal',' proposition',' representation', 'show'],
    'on': ['on', 'about', 'regarding'],
    'theme': ['ducks', 'synergy', 'robots', 'the future', 'why our economy is failing', '12th century spanish literature'],
    'generated-title':['#presentation.a# #on# #theme#'],
  });

  grammar.addModifiers(tracery.baseEngModifiers);

  const output = grammar.flatten('#generated-title#');
  return toTitleCase(output);
}

const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

module.exports = generateTitle;
