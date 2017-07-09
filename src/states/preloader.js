const fs = require('fs');

class Preloader extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    //setup loading bar
    const asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  update() {}

  loadResources() {
       this.game.load.audio('boop', 'assets/transition_sounds/boop.ogg');
       this.game.load.audio('beep', 'assets/transition_sounds/beep.ogg');

       for (const key of this.game.global.transition_sounds) {
        this.game.load.audio(key, 'assets/transition_sounds/' + key + '.ogg');
       }

       this.game.load.image('gradient', 'assets/gradient.png');
       this.game.load.image('pixel', 'assets/pixel.png');
       this.game.load.image('button-border', 'assets/button-border.png');

       this.game.load.json('feedbackQuestions', 'assets/feedbackQuestions.json');
       this.game.load.json('introductions', 'assets/introductions.json');

       for (const filename of fs.readdirSync(__dirname + '/../../assets/themes/')) {
        const theme = filename.replace('.json', '');
        this.game.global.themes.push(theme);
        this.game.load.json('theme-' + theme, 'assets/themes/'+filename);

        for (let i=1; i<=30; ++i) {
         this.game.load.image('theme-picture-' + theme + i, 'assets/pictures/'+theme+i+'.jpg');
        }
       }
  }

  onLoadComplete() {
    this.game.state.start('menu')
  }
}

module.exports = Preloader;
