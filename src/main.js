const Boot = require('./states/boot');
const Preloader = require('./states/preloader');
const SplashScreen = require('./states/splashScreen');

const Menu = require('./states/menu');
const Settings = require('./states/settings');
const Introduction = require('./states/introduction');
const Slide = require('./states/slide');
const Questions = require('./states/questions');
const Feedback = require('./states/feedback');

const globalConfig = require('./globalConfig');

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'presentation.game-game');
game.state.add('boot', new Boot());
game.state.add('preloader', new Preloader());
game.state.add('splashScreen', new SplashScreen());

game.state.add('menu', new Menu());
game.state.add('settings', new Settings());
game.state.add('introduction', new Introduction());
game.state.add('slide', new Slide());
game.state.add('questions', new Questions());
game.state.add('feedback', new Feedback());

game.global = globalConfig;

game.state.start('boot');
