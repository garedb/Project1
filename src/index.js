// import 'phaser';
// import config from './config';
// import TitleScene from './Scenes/Title';
// import WinScene from './Scenes/Win';
// import GameScene from './Scenes/Game';
// import BootScene from './Scenes/Boot';
// import UIScene from "./Scenes/UI";
const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  }
};

// game = new Phaser.Game(config)


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
