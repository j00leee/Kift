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
}

theGame.prototype = {
	create:function(){
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.add.sprite(0,0, 'sky');
	platform = this.game.add.group();
	platform.enableBody = true;
	ground = platform.create(0, this.game.world.height - 64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	this.game.physics.arcade.enable(ground);
	//ground.body.collideWorldBounds = true;
	basket = this.game.add.sprite(32, this.game.world.height - 150, 'pail');
	this.game.physics.arcade.enable(basket);
	basket.body.collideWorldBounds = true;
	fruit = this.game.add.group();
	fruit.enableBody = true;
	score = 0;
	//for(var i = 0; i<12; i++){
	//fruits = fruit.create(i*70, 0, 'banana');
	//fruits.body.gravity.y = 100;
	//}
	emitter = this.game.add.emitter(this.game.world.centerX, 0, 100);
	emitter.makeParticles('banana');
	emitter.start(false, 5000, 750);
	this.frequency = 5;
	scoreText = this.game.add.text(16,16,'score:0');
	cursors = this.game.input.keyboard.createCursorKeys();
	/*function update(){	
	this.game.physics.arcade.overlap(basket, fruit, collectFruit, null, this );
	this.game.physics.arcade.overlap(basket, emitter, collectFruit, null, this );
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
	}
	*/
	},
	update:function(){
		
	//this.game.phsyics.arcade.overlap(fruit, ground, loseFruit, null, this);
	//this.game.physics.arcade.overlap(basket, fruit, collectFruit, null, this );
	this.game.physics.arcade.overlap(basket, emitter, collectFruit, null, this );
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
		//fruit.kill();
		emitter.kill();
		score = score + 100;
		scoreText.text = 'Score: ' + score;
	}
	/*function collectEmitter(basket, emitter){
		emitter.kill();
		score += 10;
		scoreText.text = 'Score:' + score;
		
	}*/
	},
	
	
/*	enterNumber: function(){
		if(score > 2000){	
			this.game.state.start("GameOver");
		}
		else{
			score += 10;
			scoreText.text = 'Score: ' + score;
			
		}
	}*/
	
}

