import 'phaser';
import config from './config';
import TitleScene from './Scenes/Title';
import WinScene from './Scenes/Win';
import GameScene from './Scenes/Game';
import BootScene from './Scenes/Boot';
import UIScene from "./Scenes/UI"; 

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Title', TitleScene);
    this.scene.add('Win', WinScene);
    this.scene.add('Boot', BootScene);
    this.scene.add('Game', GameScene);
    this.scene.add('UI', UIScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
window.addEventListener('resize', (event) => {
	// console.log(window.innerWidth)
	game.scale.resize(window.innerWidth, window.innerHeight);
});
