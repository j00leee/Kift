var theGame = function(game){
	var basket;
	var fruit; 
	var cursors;
	var scoreText;
	var platform;
	var ground;
	var fruits;
	var emitter;
	var score;
	var emitter1;
	var dia;
	var music;
	var sodacol;
	var sodacolText;
}

theGame.prototype = {
	create:function(){
	sodacol = 0;
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.add.sprite(0,0, 'sky');
	platform = this.game.add.group();
	platform.enableBody = true;
	ground = platform.create(0, this.game.world.height - 64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	this.game.physics.arcade.enable(ground);
	basket = this.game.add.sprite(32, this.game.world.height - 150, 'pail');
	this.game.physics.arcade.enable(basket);
	basket.body.collideWorldBounds = true;
	fruit = this.game.add.group();
	fruit.enableBody = true;
	score = 0;
	emitter = this.game.add.emitter(this.game.world.centerX, 0, 100);
	emitter.makeParticles('banana');
	emitter.start(false, 5000, 750);
	emitter1 = this.game.add.emitter(this.game.world.centerX, 0, 100);
	emitter1.makeParticles('soda');
	emitter1.start(false, 5000, 750);
	this.frequency = 5;
	scoreText = this.game.add.text(16,16,'Score:0');
	sodacolText = this.game.add.text(200,16, 'Score:0');
	cursors = this.game.input.keyboard.createCursorKeys();
	music = this.game.add.audio('bmusic');
	music.play();

	},
	update:function(){
	this.game.physics.arcade.overlap(basket, emitter, collectFruit, null, this );
	this.game.physics.arcade.overlap(basket, emitter1, loseFruit,null, this);
	//this.game.physics.arcade.overlap(basket, emitter1, enterNumber,null, this);
	basket.body.velocity.x = 0;
	if(cursors.left.isDown){
		basket.body.velocity.x=-150;
		basket.animations.play('left');
	}
	else if(cursors.right.isDown){
		basket.body.velocity.x = 150;
		basket.animations.play('right');
	}
	
	else{
	}
	
	function collectFruit(basket,emitter){
		emitter.kill();
		score = score + 100;
		scoreText.text = 'Score: ' + score;
	}
	function loseFruit(basket, emitter1){
		emitter1.kill();
		score-= 50;
		sodacol += 1;
		scoreText.text = 'Score: ' + score;
		sodacolText.text = 'Sodas: ' + sodacol;
		if (sodacol > 5){	
			alert("You Scored: " + score)
			this.game.state.start("GameOver");
			music.stop();
		}
	}
	
	
	
	/*function enterNumber(basket, emitter1){
		if (sodacol > 5){	
			this.game.state.start("GameOver");
		}
		else{
			//score += 10;
			//scoreText.text = 'Score: ' + score;
			
		}*/
	}
	}
	


