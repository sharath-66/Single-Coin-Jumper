//We Are creating everything from beginning
myRunner.MainMenu = function () {

}

myRunner.MainMenu.prototype = {
    create: function () {
        this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
        this.background.autoScroll(-100, 0);

        this.foreground = this.game.add.tileSprite(0, 280, this.game.width, this.game.height - 200, 'foreground');
        this.foreground.autoScroll(-100, 0);

        this.ground = this.game.add.tileSprite(0, 320, this.game.width, 40, 'ground');
        this.ground.autoScroll(-240, 0);

        this.player = this.add.sprite(50, this.game.height / 2, 'player');
        this.player.anchor.setTo(0.5);
        this.player.scale.setTo(0.2);

        this.player.animations.add('fly', [0, 1, 2, 3, 2, 1]);
        this.player.animations.play('fly', 8, true);

        this.game.add.tween(this.player).to({ y: this.player.y - 16 }, 500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

        this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'tap to start', 28);
        this.startText.x = 300 - this.startText.textWidth / 2;
        this.startText.y = 150

    },

    update: function () {
        if (this.game.input.activePointer.justPressed()) {
            this.game.state.start('Game');
        }
    }
}