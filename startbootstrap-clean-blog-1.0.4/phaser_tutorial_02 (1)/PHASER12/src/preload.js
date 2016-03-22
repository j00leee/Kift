	

var preload = function(game){}

preload.prototype = {
	preload: function(){ 
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		this.game.load.image("gamet","assets/gamescr.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover2.png");
		
		
	this.game.load.image('sky', 'assets/cloud.jpg');
    this.game.load.image('ground', 'assets/grassplatform.png');
    this.game.load.image('star', 'assets/banana3.png');
	this.game.load.image('bottom', 'assets/white.jpg');
	this.game.load.image('star2', 'assets/apple.png');
	this.game.load.image('hamburger', 'assets/junk.png');
	this.game.load.image('playb', 'assets/playb.png');
	this.game.load.image('star3', 'assets/orangee.png');
	this.game.load.image('star4', 'assets/grapee.png');
	this.game.load.image('pizza', 'assets/pizzaa.png');
    this.game.load.spritesheet('dude', 'assets/pokemon.png', 32, 45);
	this.game.load.audio('sound', 'assets/BiteSound.mp3')
	this.game.load.audio('gamesound', 'assets/GameSound.mp3')
	this.game.load.audio('jumpsound', 'assets/JumpSound.mp3')
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
