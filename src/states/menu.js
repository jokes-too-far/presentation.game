class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    var grammar = tracery.createGrammar({
      'presentation': ['presentment',' demonstration',' display',' introduction',' intro',' attitude',' ceremony',' informing',' making known',' position',' posture',' proposal',' proposition',' representation', 'show'],
      'on': ['on', 'about', 'regarding'],
      'theme': ['ducks', 'synergy', 'robots', 'the future', 'why our economy is failing', '12th century spanish literature'],
      'generated-title':['#presentation.a# #on# #theme#'],
    });

    grammar.addModifiers(tracery.baseEngModifiers);

    const output = grammar.flatten('#generated-title#');
    console.log(output);


    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, toTitleCase(output), {
      font: '42px Arial',
      fill: '#ffffff',
      align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame() {
    this.game.state.start('game');
  }

}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export default Menu;
