//We Are creating everything from beginning
var myRunner = function () { };
myRunner.Boot = function () { };
myRunner.Boot.prototype = {
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
            
    },

    preload: function () {
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    },
    create: function () {
        this.game.stage.backgroundColor = "#fff";

        this.input.maxPointer = 1;

        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
        } else {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceLandscape = true;
            this.scale.setScreenSize(true);
        }


        this.state.start('Preloader');

    },
}