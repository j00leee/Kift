var preload = function(game){}

preload.prototype = {
	preload: function(){
	this.game.load.image('pail', 'assets/pails.png');
	this.game.load.image('banana', 'assets/banana.png');
	this.game.load.image('sky', 'assets/sky.png');
	this.game.load.image('ground', 'assets/platform.png');
	this.game.load.image("gametitle","assets/gametitle.png");
	this.game.load.image("gameover","assets/gameover.png");
	},
	create: function(){
		this.game.state.start("GameTitle");
	}
}