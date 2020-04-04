import "phaser";
 
export default class BootScene extends Phaser.Scene {
  constructor(key){
    super(key);
  }
 
  preload () {
    this.levels = {
      1: 'level1'
    };
    // load in the tilemap
    this.load.tilemapTiledJSON('level1', '/assets/tilemaps/level1.json');
 
    // load in the tileset spritesheet
    this.load.spritesheet('level1', '/assets/images/tiles_dungeon_v1.1.png', { frameWidth: 16, frameHeight: 16 });
 
    // load in the player spritesheet
    this.load.spritesheet('characters', 'assets/images/chara_hero.png', { frameWidth: 20, frameHeight: 34 });

    // load in the enemy spritesheet
    this.load.spritesheet('baddy', 'assets/images/chara_slime.png', { frameWidth: 21, frameHeight: 34});
    
    //load coin sprite
    this.load.image('coin', 'assets/images/coin_01.png');

    // load in our bullet sprite
    this.load.image('bullet', 'assets/images/Fireball.png');

  }
 
  create () {
    this.scene.start('Game', {level: 1, newGame: true, levels: this.levels});
  }
};
