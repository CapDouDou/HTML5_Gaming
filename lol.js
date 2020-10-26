
var scene = new Phaser.Scene("game");
var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 750,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: false
        }
    },
scene: {
        preload: preload,
        create: create,
        update: update
    }
};
function preload () {
    this.load.image('sky', 'assets/sky2.jpg');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('sol', 'assets/caisse.png');
    this.load.image('dead', 'assets/dead.jpeg');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/lol2.png', { frameWidth: 64, frameHeight: 64 });
}
function create () {
    this.add.image(800, 250, 'sky');
    platforms = this.physics.add.staticGroup();
    platforms.create(130, 300, 'sol').setScale(0.5).refreshBody();
    platforms.create(350, 749, 'sol').setScale(0.1).refreshBody();
    platforms.create(420, 735, 'sol').setScale(0.1).refreshBody();
    platforms.create(490, 721, 'sol').setScale(0.1).refreshBody();
    platforms.create(560, 710, 'sol').setScale(0.1).refreshBody();
    platforms.create(630, 690, 'sol').setScale(0.1).refreshBody();
    platforms.create(700, 670, 'sol').setScale(0.1).refreshBody();
    platforms.create(770, 650, 'sol').setScale(0.1).refreshBody();
    platforms.create(840, 630, 'sol').setScale(0.1).refreshBody();
    platforms.create(910, 610, 'sol').setScale(0.1).refreshBody();
    platforms.create(980, 590, 'sol').setScale(0.1).refreshBody();
    platforms.create(1050, 570, 'sol').setScale(0.1).refreshBody();
    platforms.create(1120, 550, 'sol').setScale(0.1).refreshBody();
    platforms.create(1190, 530, 'sol').setScale(0.1).refreshBody();
    platforms.create(1260, 510, 'sol').setScale(0.1).refreshBody();
    platforms.create(1320, 490, 'sol').setScale(0.1).refreshBody();
    platforms.create(1320, 350, 'sol').setScale(0.1).refreshBody();
    platforms.create(1320, 300, 'sol').setScale(0.1).refreshBody();
    platforms.create(1320, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(1370, 490, 'sol').setScale(0.1).refreshBody();
    platforms.create(1420, 490, 'sol').setScale(0.1).refreshBody();
    platforms.create(1470, 490, 'sol').setScale(0.1).refreshBody();
    platforms.create(1520, 490, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 490, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 440, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 390, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 340, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 290, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 240, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 190, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 140, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 90, 'sol').setScale(0.1).refreshBody();
    platforms.create(1570, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1520, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1470, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1420, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1370, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1320, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1270, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1220, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1170, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1120, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1070, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1020, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(970, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(920, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(870, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(820, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(770, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(720, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(670, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(620, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(570, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(520, 40, 'sol').setScale(0.1).refreshBody();
    platforms.create(1120, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(920, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(720, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(520, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(470, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(420, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(370, 250, 'sol').setScale(0.1).refreshBody();
    platforms.create(1550, 450, 'sol').setScale(0.1).refreshBody();
    platforms.create(1370, 375, 'sol').setScale(0.1).refreshBody();
    platforms.create(1550, 290, 'sol').setScale(0.1).refreshBody();



    platforms.create(1300, 778, 'ground').setScale(2).refreshBody();
    platforms.create(400, 778, 'ground').setScale(2).refreshBody();
    platforms.create(500, 778, 'ground').setScale(2).refreshBody();
    player = this.physics.add.sprite(200, 700, 'dude');
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);
    player.setBounce(0.1);
    cursors = this.input.keyboard.createCursorKeys()
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 10, end: 17 }),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 28, end: 36 }),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 19 } ],
        frameRate: 20
        

    });
    stars = this.physics.add.group({
        key: 'star',
        setXY: { x: 250, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
    bombs = this.physics.add.group();
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.collider(player, bombs, hitBomb, null, this);
} 
function update () {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else if (cursors.space.isDown && player.body.touching.down)
            {
                player.setVelocityY(-135);
            }
    else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    i=i+1;
    if(i===200){
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        var bomb = bombs.create(250, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(100, 300), 20);
        bomb.allowGravity = false;
        i=0;
    }
}

function collectStar (player, star)
{
    star.disableBody(true, true);


    if (stars.countActive(true) === 0)
    {

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(250, 75, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.allowGravity = false;

    }
}

function hitBomb (player, bomb)
{
    this.add.image(800, 250, 'dead');
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}
var i=0;
var stars;
var platforms;
var player;
var cursors;
var game = new Phaser.Game(config);