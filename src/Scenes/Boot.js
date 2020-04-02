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
    this.load.spritesheet('RPGpack_sheet', '/assets/images/RPGpack_sheet.png', { frameWidth: 64, frameHeight: 64 });
 
    // load in the player spritesheet
    this.load.spritesheet('characters', 'assets/images/Extra_C.png', { frameWidth: 60, frameHeight: 76 });

    // load in the enemy spritesheet
    this.load.spritesheet('baddy', 'assets/images/Officer_Skeleton.png', { frameWidth: 95, frameHeight: 108});
    
    //load coin sprite
    this.load.image('coin', 'assets/images/coin_01.png');

    // load in our bullet sprite
    this.load.image('bullet', 'assets/images/Fireball.png');

  }
 
  create () {
    this.scene.start('Game', {level: 1, newGame: true, levels: this.levels});
  }
};
