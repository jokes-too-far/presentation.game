import Boot from './states/boot';
import Slide from './states/slide';
import Menu from './states/menu';
import Preloader from './states/preloader';
import Gameover from './states/gameover';

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'presentation.game-game');
game.config = {
    total_slides: 10,
    transition_timeout: 30*1000
}

game.state.add('boot', new Boot());
game.state.add('slide', new Slide());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');
