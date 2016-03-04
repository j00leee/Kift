
var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(950,160,"gamet");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(725,520,"playb",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
		//this.game.stage.backgroundColor="#0000";
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}

