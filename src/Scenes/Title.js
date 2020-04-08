class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  preload () {

  }

  create () {
    // create title text
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Going for Gold', {fontSize: '64px', fill: '#fff'});
    this.titleText.setOrigin(0.5);
    this.button = this.add.image(this.scale.width / 2, this.scale.height / 1.5, 'button1');
    this.button.setInteractive();

    this.buttonText = this.add.text(0,0, 'Start', {fontSize: '26px', fill:'#fff'});
    Phaser.Display.Align.In.Center(this.buttonText, this.button);

    this.button.on('pointerdown', () => {
      this.scene.start('Game');
    });

    this.button.on('pointerover', () => {
      this.button.setTexture('button2');
    });

    this.button.on('pointerout', () => {
      this.button.setTexture('button1');
    });
  }

};
