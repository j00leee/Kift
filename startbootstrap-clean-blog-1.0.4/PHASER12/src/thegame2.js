var thegame2 = function(game){
var player;
var platforms;
var cursors;
var ground;
var ground2;
var stars;
var stars2;
var pizza;
var s;
var gamemusic;
}
thegame2.prototype = {
create:function(){

    //  We're going to be using physics, so enable the Arcade Physics system
   this.game.physics.startSystem(Phaser.Physics.ARCADE);

	s=5;
    //  A simple background for our game
    this.game.add.sprite(0, 0, 'sky');
	
	gamemusic = this.game.add.audio('gamesound');
	gamemusic.play();
	
	
	platforms = this.game.add.group();
    platforms.enableBody = true;

	var ledge = platforms.create(700, 400, 'ground');
    ledge.body.immovable = true;
	ledge.body.collideWorldBounds = true;
	
		ledge.body.bounce.set(1);
		ledge.body.velocity.x=100;

    ledge = platforms.create(1060, 300, 'ground');
	ledge.body.immovable = true;
	
	ledge = platforms.create(620, 200, 'ground');
	ledge.body.immovable = true;
	
	ledge = platforms.create(150, 200, 'ground');
	ledge.body.immovable = true;
	
	ground = platforms.create(0, this.game.world.height - 64, 'bottom');
	ground2 = platforms.create(550, this.game.world.height - 64, 'bottom');
	ground.body.immovable = true;
	ground2.body.immovable = true;
    // The player and its settings
    player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 350;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [0,1,2,3], 10, true);
	

    //  Our controls.
    cursors = this.game.input.keyboard.createCursorKeys();
	
	stars = this.game.add.group();
	stars2 = this.game.add.group();
	stars.enableBody = true;
	stars2.enableBody = true;
	pizza = this.game.add.group();
	pizza.enableBody = true;
	
	stars.create(650,140,'star4');
	stars.create(255,140,'star4');
	stars.create(315,140,'star4');
	//stars.create(750,150,'star');
	stars.create(750,145,'star3');
	stars.create(195,145,'star3');
	
	var p = pizza.create(300,140,'pizza');
	
	p.body.velocity.x = 500;
	p.body.collideWorldBounds = true;
		p.body.bounce.set(1);
		
		pizza.create(1350,300,'pizza');
	
	
	
	
	 scoreText = this.game.add.text(16, 16, 'Score:' + score, { fontSize: '32px', fill: '#000' });
    
},

update: function() {

    
	
    //this.game.physics.arcade.collide(stars, platforms);
    this.game.physics.arcade.collide(player, platforms);
	this.game.physics.arcade.collide(player, ground);
	this.game.physics.arcade.collide(player, ground2);
	this.game.physics.arcade.collide(pizza, platforms);
    this.game.physics.arcade.overlap(player, stars, collectStar, null, this);
	this.game.physics.arcade.overlap(player, pizza, losepoints, null, this);
	
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 0;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
	jumpsound.play();
        player.body.velocity.y = -350;
    }



function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();
	
	music.play();

    //  Add and update the score
    score += 20;
	
    scoreText.text = 'Score: ' + score;
	s-=1;
	if(s==0){
		  star.kill();
	
		alert("You Win!");
		this.game.state.start("GameTitle");
		gamemusic.stop();
	}


}
function losepoints (player,pizza){

	//score-=20;
	pizza.kill();
	scoreText.text = 'Score: ' + score;
//	alert("You scored: " +score);
	this.game.state.start("GameOver");
	gamemusic.stop();
}
}
}