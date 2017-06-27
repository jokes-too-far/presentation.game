const Boot = require('./states/boot');
const Slide = require('./states/slide');
const Menu = require('./states/menu');
const Preloader = require('./states/preloader');
const Gameover = require('./states/gameover');
const Feedback = require('./states/feedback');
const globalConfig = require('./globalConfig');

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'presentation.game-game');
game.state.add('boot', new Boot());
game.state.add('slide', new Slide());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());  

game.state.add('gameover', new Gameover());
game.state.add('feedback', new Feedback());

game.global = globalConfig;

game.state.start('boot');
