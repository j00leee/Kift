var gameOver = function(game){}
 
gameOver.prototype = {
	
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(950,100,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(725,360,"playb",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}