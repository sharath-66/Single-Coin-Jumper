var game = new Phaser.Game(640, 360, Phaser.AUTO, '');

game.state.add('Boot', myRunner.Boot);
game.state.add('Preloader', myRunner.Preload);
game.state.add('MainMenu', myRunner.MainMenu);
game.state.add('Game', myRunner.Game);

game.state.start('Boot');