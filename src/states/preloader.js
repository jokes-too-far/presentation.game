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
       this.game.load.audio('boop', 'assets/boop.ogg');
       this.game.load.audio('beep', 'assets/beep.ogg');

       this.game.load.image('gradient', 'assets/gradient.png');

       const themeList = this.game.global.themes; 
       for (const theme of themeList) {
        this.game.load.json('theme-' + theme, 'assets/themes/'+theme+'.json');
       }

       for (const theme of themeList) {
         for (let i=1; i<=30; ++i) {
          this.game.load.image('theme-picture-' + theme + i, 'assets/pictures/'+theme+i+'.jpg');
         }
       }
  }

  onLoadComplete() {
    this.game.state.start('menu')
  }
}

export default Preloader;
