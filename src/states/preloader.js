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
  }

  onLoadComplete() {
    this.game.state.start('menu')
  }
}

export default Preloader;
