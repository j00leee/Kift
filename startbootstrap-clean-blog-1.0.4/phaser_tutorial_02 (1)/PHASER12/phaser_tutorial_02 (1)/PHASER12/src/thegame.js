var theGame = function(game){
var player;
var platforms;
var cursors;
var music;
var stars;
var stars2;
var gamemusic;
var score;
var scoreText;
var jumpsound;
var hamburgers;
var s;

}
theGame.prototype = {
create:function(){

    //  We're going to be using physics, so enable the Arcade Physics system
   this.game.physics.startSystem(Phaser.Physics.ARCADE);
score =0;
s=9;
    //  A simple background for our game
    this.game.add.sprite(0, 0, 'sky');
	
	music = this.game.add.audio('sound');
	gamemusic = this.game.add.audio('gamesound');
	jumpsound = this.game.add.audio('jumpsound');
	gamemusic.play();
	
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.game.add.group();
	
    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;
	
    // Here we create the ground.
    var ground = platforms.create(0, this.game.world.height - 64, 'bottom');

	
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-30, 300, 'ground');
	ledge.body.immovable = true;
	
	
//	ledge.body.velocity.x=100;
	
//	ledge.body.collideWorldBounds = true;
	//  ledge.body.bounce.set(1);
	
	ledge = platforms.create(450,200, 'ground');
	
    ledge.body.immovable = true;
	
	ledge = platforms.create(1050,400, 'ground');
	
    ledge.body.immovable = true;
	
	ledge = platforms.create(900,180, 'ground');
	
    ledge.body.immovable = true;

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
	

    //  Finally some stars to collect
    stars = this.game.add.group();
	stars2 = this.game.add.group();
	
	hamburgers = this.game.add.group();
	
	hamburgers.enableBody = true;
	var ham = hamburgers.create(500,500,'hamburger');
	
	ham.body.velocity.x = 500;
	
		ham.body.collideWorldBounds = true;
		ham.body.bounce.set(1);
    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;
	stars2.enableBody = true;
	
	var ham = hamburgers.create(100,200,'hamburger');
	
	ham.body.velocity.x = 250;
	
		ham.body.collideWorldBounds = true;
		ham.body.bounce.set(1);
	
    
        //  Create a star inside of the 'stars' group
		
		
        var star = stars.create(30,250, 'star');
		var star2 = stars.create(80,250,'star');
		var star3 = stars.create(130,250,'star');
		
		
		var star5 = stars2.create(930,130,'star2');
		
		stars2.create(1030,130,'star2');
		
		
		
		stars.create(480,150,'star');
		stars.create(530,150,'star');
		stars.create(580,150,'star');
		stars.create(630,150,'star');
		
	
  
    //  The score
    scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
	
    //  Our controls.
    cursors = this.game.input.keyboard.createCursorKeys();
	
	
    
},

update: function() {

    //  Collide the player and the stars with the platforms

    this.game.physics.arcade.collide(stars, platforms);
	this.game.physics.arcade.collide(stars2, platforms);
	this.game.physics.arcade.collide(hamburgers, platforms);
	this.game.physics.arcade.collide(player, platforms);


    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
	  this.game.physics.arcade.overlap(player, stars, collectStar, null, this);
	  this.game.physics.arcade.overlap(player, stars2, collectStar2, null, this);
	  this.game.physics.arcade.overlap(player, hamburgers, losepoints, null, this);
    //  Reset the players velocity (movement)
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
	s-=1;
    scoreText.text = 'Score: ' + score;
	if(s==0){
		  star.kill();
	
		
		this.game.state.start("thegame2");
		gamemusic.stop();
	}

}
function collectStar2 (player, star2) {
    
    // Removes the star from the screen
    star2.kill();
	
	music.play();

    //  Add and update the score
    score += 100;
    scoreText.text = 'Score: ' + score;
	s-=1;
	if(s==0){
		  star2.kill();
	
		
		this.game.state.start("thegame2");
		gamemusic.stop();
	}

}
function losepoints (player,hamburgers){

	//score-=20;
	hamburgers.kill();
	scoreText.text = 'Score: ' + score;
//	alert("You scored: " +score);
	this.game.state.start("GameOver");
	gamemusic.stop();
}
}
}