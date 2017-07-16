const fs = require('fs');

class Preloader extends Phaser.State {

  preload() {
    //setup loading bar
    const asset = this.game.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.9, 'preloader');
    this.load.setPreloadSprite(asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  loadResources() {
       this.game.load.audio('boop', 'assets/boop.ogg');
       this.game.load.audio('beep', 'assets/beep.ogg');

       for (const filename of fs.readdirSync(__dirname + '/../../assets/transition_sounds/')) {
        const key = filename.replace('.ogg', '');
        this.game.load.audio(key, 'assets/transition_sounds/' + key + '.ogg');
        this.game.global.transition_sounds.push(key);
       }

       this.load.image('logo-stl', 'assets/logos/stl.png');
       this.load.spritesheet('logo-studio', 'assets/logos/studio.png', 128, 128);

       this.game.load.image('gradient', 'assets/gradient.png');
       this.game.load.image('pixel', 'assets/pixel.png');
       this.game.load.image('button-border', 'assets/button-border.png');

       this.game.load.json('feedbackQuestions', 'assets/feedbackQuestions.json');
       this.game.load.json('introductions', 'assets/introductions.json');
       this.game.load.json('questionsVariations', 'assets/questionsVariations.json');

       for (const filename of fs.readdirSync(__dirname + '/../../assets/themes/')) {
        const theme = filename.replace('.json', '');
        this.game.global.themes.push(theme);
        this.game.load.json('theme-' + theme, 'assets/themes/'+filename);

        for (let i=1; i<=30; ++i) {
         this.game.load.image('theme-picture-' + theme + i, 'assets/pictures/'+theme+i+'.jpg');
        }
       }

       this.game.load.spritesheet('checkBox', 'assets/checkBox.png', 32, 32);
  }

  onLoadComplete() {
    this.game.state.start('splashScreen')
  }
}

module.exports = Preloader;
