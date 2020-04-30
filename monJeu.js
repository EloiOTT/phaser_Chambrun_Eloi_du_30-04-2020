var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);
var platforms;
var creu
var porte;
var player;
var cursors;
var bat;
var bat2;
var bat3;
var bat4;
var zombi;
var zombi2;
var zombi3;
var pv = 3;
var lv = 1;
var bbqPic;
var tranchoir;
var pvtext;
var lvtext;
var moula;
var rib = 0;
var ribtext;
var fin;
var fintext;
var fin2text;
var nbporte = 0;


function preload(){
	this.load.image('background','assets/maper.png');
	this.load.spritesheet('portes','assets/portes.png',{frameWidth: 32, frameHeight: 32});
	this.load.image('piece','assets/coin.png');
	this.load.image('sol','assets/mur.png');
	this.load.image('sol2','assets/murv2.png');
	this.load.image('sol3','assets/Murtop.png');
	this.load.image('sol4','assets/roc.png');
	this.load.spritesheet('perso','assets/toufik.png',{frameWidth: 32, frameHeight: 32});
	this.load.spritesheet('bate','assets/Bat.png',{frameWidth: 32, frameHeight: 32});
	this.load.image('zombie','assets/zman.png');
	this.load.image('pic','assets/bbq.png');
	this.load.image('sword','assets/kniff.png');
	this.load.image('invisible','assets/rien.png');
	this.load.image('black','assets/font.jpg');
	this.load.image('maison','assets/house.png');
	this.load.image('sol5','assets/broken.png');
	this.load.image('trou','assets/breche.png');
}



function create(){
	this.add.image(400,300,'background');

	platforms = this.physics.add.staticGroup();
	platforms.create(480,392,'sol');
	platforms.create(544,392,'sol');
	platforms.create(100,370,'sol2');
	platforms.create(35,370,'sol2');
	platforms.create(58,520,'sol');
	platforms.create(0,520,'sol');
	platforms.create(55,405,'sol');
	platforms.create(0,405,'sol');
	platforms.create(120,520,'sol');
	platforms.create(180,560,'sol');
	platforms.create(243,560,'sol');
	platforms.create(307,560,'sol');
	platforms.create(371,560,'sol');
	platforms.create(435,560,'sol');
	platforms.create(499,560,'sol');
	platforms.create(563,560,'sol');
	platforms.create(626,560,'sol');
	platforms.create(682,480,'sol5');
	platforms.create(746,480,'sol');
	platforms.create(535,450,'sol');
	platforms.create(490,450,'sol');
	platforms.create(344,450,'sol');
	platforms.create(50,220,'sol');
	platforms.create(0,220,'sol');
	platforms.create(114,220,'sol');
	platforms.create(178,220,'sol');
	platforms.create(200,130,'sol');
	platforms.create(264,130,'sol');
	platforms.create(50,100,'sol');
	platforms.create(0,100,'sol');
	platforms.create(120,20,'sol');
	platforms.create(184,20,'sol');
	platforms.create(248,20,'sol5');
	platforms.create(312,20,'sol');
	platforms.create(374,20,'sol');
	platforms.create(438,20,'sol');
	platforms.create(509,40,'sol5');
	platforms.create(572,40,'sol');
	platforms.create(636,40,'sol');
	platforms.create(700,40,'sol');
	platforms.create(745,80,'sol');
	platforms.create(768,80,'sol');
	platforms.create(280,450,'sol');
	platforms.create(610,180,'sol');
	platforms.create(546,180,'sol');
	platforms.create(534,290,'sol');
	platforms.create(470,290,'sol');
	platforms.create(415,100,'sol');
	platforms.create(403,300,'sol2');
	platforms.create(339,300,'sol2');
	platforms.create(275,300,'sol2');
	platforms.create(230,300,'sol2');
	platforms.create(352,370,'sol2');
	platforms.create(416,370,'sol2');
	platforms.create(610,370,'sol2');
	platforms.create(675,370,'sol');
	platforms.create(225,370,'sol2');
	platforms.create(675,280,'sol2');
	platforms.create(350,220,'sol2');
	platforms.create(320,220,'sol2');
	platforms.create(215,428,'sol2');
	platforms.create(195,428,'sol2');
	platforms.create(480,200,'sol2');
	platforms.create(720,200,'sol3');
	platforms.create(720,252,'sol3');
	platforms.create(780,376,'sol3');
	platforms.create(780,428,'sol3');
	platforms.create(768,480,'sol');
	platforms.create(206,262,'sol3');
	platforms.create(608,130,'sol2');
	platforms.create(543,130,'sol2');
	platforms.create(112,310,'sol4').setScale(2).refreshBody();
	platforms.create(200,170,'sol4').setScale(2).refreshBody();
	platforms.create(50,50,'sol4').setScale(2).refreshBody();
	platforms.create(700,540,'sol4').setScale(2).refreshBody();
	platforms.create(770,10,'maison').setScale(2).refreshBody();
	platforms.create(760,540,'maison').setScale(2).refreshBody();


	player = this.physics.add.sprite(60,460,'perso');
	player.setCollideWorldBounds(true);
	player.body.setGravityY(000);
	this.physics.add.collider(player,platforms);

	creu = this.physics.add.image(470,500,'trou');
	creu = this.physics.add.image(230,340,'trou');
	creu = this.physics.add.image(640,240,'trou');
	creu = this.physics.add.image(150,80,'trou');

	bat = this.physics.add.sprite(200,500,'bate');
	bat.body.setGravityY(000);
	this.physics.add.collider(player,bat,hitBat,null,this);
	this.physics.add.collider(player,bat,deadBat,null,this);
	bat.setImmovable(true);

	bat2 = this.physics.add.sprite(300,340,'bate');
	bat2.body.setGravityY(000);
	this.physics.add.collider(player,bat2,hitBat2,null,this);
	this.physics.add.collider(player,bat2,deadBat2,null,this);
	bat2.setImmovable(true);

	bat3 = this.physics.add.sprite(120,400,'bate');
	bat3.body.setGravityY(000);
	this.physics.add.collider(player,bat3,hitBat3,null,this);
	this.physics.add.collider(player,bat3,deadBat3,null,this);
	bat3.setImmovable(true);

	bat4 = this.physics.add.sprite(610,420,'bate');
	bat4.body.setGravityY(000);
	this.physics.add.collider(player,bat4,hitBat4,null,this);
	this.physics.add.collider(player,bat4,deadBat4,null,this);
	bat4.setImmovable(true);

	zombi = this.physics.add.sprite(450,235,'zombie');
	zombi.body.setGravityY(000);
	this.physics.add.collider(player,zombi,hitZombi,null,this);
	this.physics.add.collider(player,zombi,deadZombi,null,this);
	zombi.setImmovable(true);

	zombi2 = this.physics.add.sprite(320,160,'zombie');
	zombi2.body.setGravityY(000);
	this.physics.add.collider(player,zombi2,hitZombi2,null,this);
	this.physics.add.collider(player,zombi2,deadZombi2,null,this);
	zombi2.setImmovable(true);

	zombi3 = this.physics.add.sprite(340,80,'zombie');
	zombi3.body.setGravityY(000);
	this.physics.add.collider(player,zombi3,hitZombi3,null,this);
	this.physics.add.collider(player,zombi3,deadZombi3,null,this);
	zombi3.setImmovable(true);

	bbqPic = this.physics.add.image(80,350,'pic');
	this.physics.add.overlap(player,bbqPic,collectItem,false,this);

	tranchoir = this.physics.add.image(240,260,'sword');
	this.physics.add.overlap(player,tranchoir,collectItem2,false,this);


	cursors = this.input.keyboard.createCursorKeys();

	this.anims.create({
		key:'left',
		frames: this.anims.generateFrameNumbers('perso', {start: 8, end: 11}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'bas',
		frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'top',
		frames: this.anims.generateFrameNumbers('perso', {start: 4, end: 7}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'stop',
		frames: [{key: 'perso', frame:0}],
		frameRate: 20
	});

	this.anims.create({
		key:'open',
		frames: this.anims.generateFrameNumbers('porte', {start: 0, end: 1}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'basbat',
		frames: this.anims.generateFrameNumbers('Bat', {start: 0, end: 3}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'hautbat',
		frames: this.anims.generateFrameNumbers('Bat', {start: 4, end: 7}),
		frameRate: 10,
		repeat: -1
	});

	var back = this.add.image(1000,1000,).setOrigin(0);
        this.cameras.main.setBounds(0, 0, 1000 * 2, 1000 * 2);
        this.physics.world.setBounds(0, 0, 400 * 2, 300 * 2);
        this.cameras.main.startFollow(player,true,1,1,0,0);

	this.tweens.add({
	          targets: bat,
						x: 500,
	          duration: 4500,
	          ease: 'Power2',
	          yoyo: true,
	          delay: 1500,
	          repeat: -1
					});

	this.tweens.add({
					  targets: bat2,
						x: 570,
					  duration: 4200,
					  ease: 'Power2',
					  yoyo: true,
					  delay: 1500,
				    repeat: -1
					});

	this.tweens.add({
					  targets: bat3,
						x: 180,
					  duration: 2000,
					  ease: 'Power2',
					  yoyo: true,
					  delay: 1500,
					  repeat: -1
					});

	this.tweens.add({
						targets: bat4,
						y: 500,
						duration: 2000,
						ease: 'Power2',
						yoyo: true,
						delay: 1500,
						repeat: -1
					});

	this.tweens.add({
						targets: zombi,
						x: 650,
						duration: 1800,
						ease: 'Power2',
						yoyo: true,
						delay: 1500,
						flipX: true,
						repeat: -1
					});

	this.tweens.add({
						targets: zombi2,
						x: 490,
						duration: 2600,
						ease: 'Power2',
						yoyo: true,
						delay: 1500,
						flipX: true,
						repeat: -1
					});

	this.tweens.add({
						targets: zombi3,
						y: 180,
						duration: 1800,
						ease: 'Power2',
						yoyo: true,
						delay: 1500,
						flipX: true,
						repeat: -1
					});


	pvtext = this.add.text(16,50, 'pv: 3', {fontSize: '30px', fill:'#FFF'});
	lvtext = this.add.text(16,25, 'lv: 1', {fontSize: '30px', fill:'#FFF'});
	ribtext = this.add.text(16,10, 'rib: 0', {fontSize: '30px', fill:'#FFF'});
}


function update(){
	if(cursors.left.isDown){
		player.anims.play('left', true);
		player.setVelocityX(-80);
		player.setFlipX(true);
	}else if(cursors.right.isDown){
		player.setVelocityX(80);
		player.anims.play('left', true);
		player.setFlipX(false);
	}else if(cursors.up.isDown){
			player.anims.play('top', true);
			player.setVelocityY(-80);
	}else if(cursors.down.isDown){
			player.anims.play('bas', true);
			player.setVelocityY(80);
	}else{
		player.anims.play('stop', true);
		player.setVelocityX(0);
		player.setVelocityY(0);
	}
	if(lv == 1){
    if (pv == 2){
        pvtext.setText('pv: '+pv);
    }
    else if (pv == 1){
        pvtext.setText('pv: '+pv);
    }
    else if (pv == 0){
    pvtext.setText('pv: '+pv);
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        gameOver = true;
        pv = 3;
    }
}
   if (lv == 2) {
		this.deadBat;
 		this.deadBat2;
 		this.deadBat3;
 		this.deadBat4;
 }
 if (lv == 3) {
	 this.deadZombi;
	 this.deadZombi2;
	 this.deadZombi3;
 }
 if (rib == 5) {
	 porte = this.physics.add.image(90,160,'portes');
 	         this.physics.add.overlap(player,porte,collectporte,false,this);
 }
 if (nbporte > 0) {
	  player.destroy(true);
		fin = this.physics.add.image(400,300,'black');
	  fintext = this.add.text(25,200, 'vous etes finalement parvenu a sortir de la ville basse.', {fontSize: '20px', fill:'#FFF'});
		fin2text = this.add.text(25,240, 'malheureusement, ce n etait la que le debut de vos soucis...', {fontSize: '20px', fill:'#FFF'});
 }
}

 function hitBat(player, bat){
     pv --;
 }

function deadBat(player, bat){
	bat.destroy(true);
	moula = this.physics.add.group({ key: 'piece',setXY: {x:400,y:500,stepX:50} });
          this.physics.add.overlap(player,moula,collectgold,false,this);
}

function hitBat2(player, bat2){
	pv --;
}

function deadBat2(player, bat2){
	bat2.destroy(true);
	moula = this.physics.add.group({ key: 'piece',setXY: {x:400,y:350,stepX:50} });
          this.physics.add.overlap(player,moula,collectgold,false,this);
}

function hitBat3(player, bat3){
	pv --;
}

function deadBat3(player, bat3){
	bat3.destroy(true);
	moula = this.physics.add.group({ key: 'piece',setXY: {x:150,y:400,stepX:50} });
          this.physics.add.overlap(player,moula,collectgold,false,this);
}

function hitBat4(player, bat4){
	pv --;
}

function deadBat4(player, bat4){
	bat4.destroy(true);
	moula = this.physics.add.group({ key: 'piece',setXY: {x:620,y:500,stepX:50} });
          this.physics.add.overlap(player,moula,collectgold,false,this);
}

function hitZombi(player, zombi){
	pv --;
}

function deadZombi(player, zombi){
	zombi.destroy(true);
	moula = this.physics.add.group({ key: 'piece',setXY: {x:600,y:260,stepX:50} });
          this.physics.add.overlap(player,moula,collectgold,false,this);
}

function hitZombi2(player, zombi2){
	pv --;
}

function deadZombi2(player, zombi2){
	zombi2.destroy(true);
	moula = this.physics.add.group({ key: 'piece',setXY: {x:480,y:150,stepX:50} });
          this.physics.add.overlap(player,moula,collectgold,false,this);
}

function hitZombi3(player, zombi3){
	pv --;
}

function deadZombi3(player, zombi3){
	zombi3.destroy(true);
	moula = this.physics.add.group({ key: 'piece',setXY: {x:360,y:120,stepX:50} });
          this.physics.add.overlap(player,moula,collectgold,false,this);
}

function collectItem(player, bbqPic){
	bbqPic.destroy(true);
	lv += 1;
	lvtext.setText('lv: ' + lv);
}

function collectItem2(player, tranchoir){
	tranchoir.destroy(true);
	lv += 1;
	lvtext.setText('lv: ' + lv);
}

function collectgold(player, moula){
	moula.destroy(true);
	rib += 1;
	ribtext.setText('rib: ' + rib);
}

function collectporte(player, porte){
	porte.destroy(true);
	nbporte += 1;
}
