import Boot from './states/boot';
import Slide from './states/slide';
import Menu from './states/menu';
import Preloader from './states/preloader';
import Gameover from './states/gameover';
import Feedback from './states/feedback';

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'presentation.game-game');
game.state.add('boot', new Boot());
game.state.add('slide', new Slide());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());
game.state.add('feedback', new Feedback());

game.state.start('boot');
