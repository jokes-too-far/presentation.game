import Transitions from '../transitions'

class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {
    this.game.input.maxPointers = 1;

    //setup device scaling
    if (this.game.device.desktop) {
      this.game.scale.pageAlignHorizontally = true;
    } else {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.minWidth =  480;
      this.game.scale.minHeight = 260;
      this.game.scale.maxWidth = 640;
      this.game.scale.maxHeight = 480;
      this.game.scale.forceOrientation(true);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.setSize();
    }

    this.initGlobalVariables();

    this.game.state.start('preloader');
  }

  initGlobalVariables(){
    var transistions = new Transitions()
    transistions.initCustomTransitions()
    this.game.global = {
      title: 'a placeholder title for a talk',
      bonusSlideChancePercent: 20,
      total_slides: 10,
      transition_timeout: 25000,
      transition_list: transistions.getTransitions(),
      themes: [
         'agriculture',
         'beard-care',
         'breakfast',
         'computer-literacy',
         'conspiracies',
         'corporate-strategies',
         'dental-hygiene',
         'dessert',
         'ducks',
         'extreme-fitness',
         'greek-mythology',
         'marine-biology',
         'millennials',
         'modern-city-life',
         'multi-level-marketing',
         'parenting-a-teen',
         'pets',
         'ponies',
         'pop-music',
         'product-reviews',
         'reconsidering-stereotypes',
         'romance',
         'treating-illnesses',
       ]
    };
  }

}

export default Boot;
