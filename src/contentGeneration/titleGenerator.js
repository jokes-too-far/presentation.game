const generateTitle = (theme) => {
  var grammar = tracery.createGrammar({
    'presentation': ['presentment', 'demonstration', 'display', 'introduction', 'intro', 'attitude', 'ceremony', 'informing', 'making known', 'position', 'posture', 'proposal', 'proposition', 'representation', 'show'],
    'on': ['on', 'about', 'regarding', 'concerning'],
    'importance': ['the future of', 'the importance of', 'the uselessness of'],
    'theme': theme,
    'ridiculous-claim': ['will save your life', 'is ruining the future', 'is the future', 'will change everything'],
    'question': ['why', 'how'],
    'generated-title': ['#presentation.a# #on# #importance# #theme#', '#question# #theme# #ridiculous-claim#'],
  });

  grammar.addModifiers(tracery.baseEngModifiers);

  const output = grammar.flatten('#generated-title#');
  return toTitleCase(output);
}

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

module.exports = generateTitle;
