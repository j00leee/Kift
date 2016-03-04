var preload = function(game){}

preload.prototype = {
	preload: function(){
	this.game.load.image('pail', 'assets/pail1.png');
	this.game.load.image('banana', 'assets/banana.png');
	this.game.load.image('sky', 'assets/sky.png');
	this.game.load.image('ground', 'assets/platform.png');
	this.game.load.image("gametitle","assets/bgame.png");
	this.game.load.image("gameover","assets/gameova.png");
	this.game.load.image("soda", "assets/soda.png");
	this.game.load.image("play", "assets/playb.png");
	this.game.load.audio('bmusic', "assets/bananagame.mp3");
	},
	create: function(){
		this.game.state.start("GameTitle");
	}
}