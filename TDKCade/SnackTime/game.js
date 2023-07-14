score = 0;
lives = 3;
monster_mode = 0;
score_o = '';
sshadow = '';
lives_o = '';
lshadow = '';
level = 0;
active_fruit_count = 1;
active_dragonfly_count = 0;
gstate = 0;
fruit = [];
dragonflies = [];
dragonfly_images = [];
touch_x = 0;
touch_y = 0;
bs = '';
hs = '';
tsd='';
bsImgs = ["url('images/bs_0.png')","url('images/bs_1.png')","url('images/bs_2.png')","url('images/bs_3.png')"];
season_points = 0;
season = 0;
ready = '';
go = '';
p = [];
pt = [];
rw = [];
extra_lives_given = 1;

step_interval = '';
regc=0;
funcptr = [];
funcarg = [];
function step() {
	for(var i=0;i<regc;i++){funcptr[i](funcarg[i]);}
}
function claimRegister(func,arg){
	funcarg[regc] = arg;
	funcptr[regc] = func;
	regc++;
	return regc-1;
}
function clearRegister(ind) {
	funcptr[ind] = voidf;
	funcarg[ind] = '';
}
function setRegister(ind,func,arg) {
	funcptr[ind] = func;
	funcarg[ind] = arg;
}
function voidf(v){} //this is silly
function voida(){}

function distance(x, y, x2, y2) {
	var t0 = x2 - x;
	var t1 = y2 - y;
	return Math.sqrt( t0*t0 + t1*t1 ) ;
}

function linedist( x,y, dx, dy, r, u,v) {
  var wx = u-x;
  var wy = v-x;
  var wsq = wx*wx + wy*wy;
  var vsq = dx*dx + dy*dy;
  var proj = dx*wx + dy*wy; 
  return Math.sqrt(wsq - (proj*proj)*vsq);
}

function updatePosition() {
	this.obj.style.left = this.x;
	this.obj.style.top = this.y;
}
function reset() {
	if(this.timeout != '') clearTimeout(this.timeout);
	this.x = 300;
	this.y = 0;
	this.active = false;
	this.updatePosition();
}

//Fruit
function Fruit(index, obj, type) {
	this.updatePosition = updatePosition;
	this.reset = reset;
	this.index = index; // shouldn't be nessisary :(
	this.timeout = '';
	this.type = type;
	this.x = 300;
	this.y = 0;
	this.obj = obj;
	this.active = false;
	
	this.check = function (x, y) {
		if(this.active) {
			if(distance(this.x,this.y, x+11,y+11) < 17) {
				this.eat();
			}
		}
	}
	
	this.eat = function () {
		this.obj.style.display = 'none';
		if(type<3)reward(this.type,this.x,this.y);
		else BecomeMonster();
		this.active = false;
		if(type == 0)this.timeout = setTimeout('fruit['+this.index+'].spawn()', 500 + Math.random() * 200);
		else if(type == 1) this.timeout = setTimeout('fruit['+this.index+'].spawn()', 2000 + Math.random() * 1500);
	}
	
	this.spawn = function() {
	    this.x = 26 + (Math.random() * 175);
		this.y = 47 + (Math.random() * 90);
		this.obj.style.display = 'block';
		this.updatePosition();
		this.active = true;
	}	
	this.updatePosition();
}

//Dragonflies
function Dragonfly(index,obj,speed) {
	this.updatePosition = updatePosition;
	this.reset = reset;
	this.index = index; // shouldn't be nessisary :(
	this.timeout = '';
	this.time = 0;
	this.interval = claimRegister(voidf,this);
	this.x = 300;
	this.y = 0;
	this.dx = 0;
	this.dy = 0;
	this.steps = 0;
	this.total_steps = 600/speed;
	this.speed = speed;
	this.a = 0;
	this.obj = obj;
	this.active = false;
	this.skip = 0;
	
	this.spawn = function() {
		var theta = Math.random() * (Math.PI * 2);
	    this.x = 250 * Math.cos( theta );
		this.y = 250 * Math.sin( theta );
		this.obj.style.display = 'block';
		this.updatePosition();
		this.active = true;
		var findex = Math.round( Math.random() * active_fruit_count );
		this.beginMove(fruit[findex].x-31, fruit[findex].y-31);
	}
	
	this.hide = function() {
		this.obj.style.display = 'none';
	}
	
	this.eat = function () {
		if(this.active) {
			clearRegister(this.interval);
			this.obj.style.display = 'none';
			reward(1,this.x,this.y);
			this.active = false;
			this.timeout = setTimeout('dragonflies['+this.index+'].spawn()', 500 + Math.random() * 200);
		}
	}
	
	this.beginMove = function(dest_x, dest_y) {
		var dist = distance(dest_x, dest_y, this.x, this.y);
		this.steps = 0;
		this.dx = (((dest_x - this.x)/dist) * this.speed);
		this.dy = (((dest_y - this.y)/dist) * this.speed);
		this.a = Math.round( 4+4*((Math.atan2(this.dy, this.dx))/Math.PI) ) % 8;
		this.obj.style.backgroundImage = dragonfly_images[this.a];
		setRegister(this.interval,this.stepMove,this);
	}
	
	this.stepMove = function(me) {
		player.check(me.index);
		if( me.steps >= me.total_steps ) {
			clearRegister(me.interval);
			me.timeout = setTimeout('dragonflies['+me.index+'].spawn()', 100);
		}
		else {
			me.x += me.dx;
			me.y += me.dy;
			me.updatePosition();
			me.steps++;
		}
	}
	
	this.updatePosition();
}

//Player
function Player(x, y) {
	this.updatePosition = updatePosition;
	this.reset = reset;
	this.obj = document.getElementById('player');
	this.timeout = '';
	this.interval = claimRegister(voidf,this);
	this.x = x-19;
	this.y = y-19;
	this.dest_x = this.x;
	this.dest_y = this.y;
	this.dx = 0;
	this.dy = 0;
	this.steps = 0;
	this.total_steps = 10;
	this.speed = 8;
	this.a = 0;
	this.images = [];
	this.mimages = [];
	this.grave = '';
	this.mmode = false;
	this.active = false;
	
	this.check = function(ind) {
		if(this.active) {
			if(dragonflies[ind].skip <= 0) {
				dist = distance(this.x,this.y, dragonflies[ind].x,dragonflies[ind].y);
				if(dist < 19) {
					if(this.mmode) dragonflies[ind].eat();
					else this.eat();
				}
				else if(dist > 38) {
					dragonflies[ind].skip = 3;
				}
			}
			else if(dragonflies[ind].skip > 0) {
				dragonflies[ind].skip--;
			}
		}
	}
	
	this.eat = function() {
		this.active = false;
		if(this.interval != ''){clearRegister(this.interval);
		}
		this.obj.style.backgroundImage = this.grave;
		if(lives <= 0) {
			this.timeout = setTimeout('endGame()',1000);
		}
		else {
			lives--;
			updateLives();
			this.timeout = setTimeout('startNextLife()', 1000);
		}
	}
	
	this.spawn = function() {
		this.active = true;
		this.obj.style.backgroundImage = this.images[0];
		this.x = 101;
		this.y = 69;
		this.updatePosition();
		player.obj.style.display = 'block';
	}
	
	this.beginMove = function(x, y) {
		if(this.active) {
			this.dest_x = x-19;
			this.dest_y = y-19;
			var dist = distance(this.dest_x, this.dest_y, this.x, this.y);
			if(!isNaN(dist) && dist != 0) {
				this.dx = ((this.dest_x - this.x)/dist) * this.speed;
				this.dy = ((this.dest_y - this.y)/dist) * this.speed;
				this.total_steps = dist/this.speed;
				this.steps = 0;
				this.a = Math.round( 4+4*((Math.atan2(this.dy, this.dx))/Math.PI) ) % 8;
				this.setImg();
				setRegister(this.interval,this.stepMove,this);
			}	
			else {
				this.updatePosition();
			}  
		}		
	}
	
	this.stepMove = function(me) {
		for(var i=0;i<7;i++) { fruit[i].check(me.x,me.y); }
		if(me.steps >= me.total_steps) {
			clearRegister(me.interval);
		}
		else {
			me.x += me.dx;
			me.y += me.dy;
			me.updatePosition();
			me.steps++;
		}
	}
	
	this.preset = function() {
		this.reset();
		this.setImg = normalImage;
		this.mmode = false;
	}
	
	this.setImg = normalImage;
	
	this.updatePosition();
	this.obj.style.display = 'none';
		  for(i=0;i<8;i++) {
			this.images[i] = "url('images/game/player_" + i + ".gif')";
			this.mimages[i] = "url('images/game/monster_" + i + ".gif')";
		  }
		  this.grave = "url('images/game/grave.png')";
}
function normalImage() {
this.obj.style.backgroundImage = this.images[this.a];
}
function monsterImage() {
this.obj.style.backgroundImage = this.mimages[this.a];
}
player = '';

function setscroll() {
	document.body.scrollTop = 176;
}

function init() {
	document.onkeypress = keyevent;
	document.onkeyup = keyevent;

	window.setTimeout( "setscroll()", 500);

	for(i=0;i<8;i++) {
		dragonfly_images[i] = "url('images/game/dragonfly_" + i + ".gif')";
	}

	score_o = document.getElementById('score');
	sshadow = document.getElementById('sshadow');
	lives_o = document.getElementById('lives');
	lshadow = document.getElementById('lshadow');
	
	var i = 0;
	for(i=0;i<4;i++) {
		fruit[i] = new Fruit(i, document.getElementById('f'+i), 0);
	}
	fruit[4] =  new Fruit(4, document.getElementById('fr'), 1);
	fruit[5] =  new Fruit(5, document.getElementById('fg'), 2);
	fruit[6] =  new Fruit(6, document.getElementById('fm'), 3);
	
	for(i=0;i<4;i++) {
		dragonflies[i] = new Dragonfly(i, document.getElementById('d'+i), 8);
	}
	
	player = new Player(120, 88);
	
	tsd= document.getElementById('tsd');
	
	hs = document.getElementById('hs');
	bs = document.getElementById('bs');
	bs.onmousedown = '';
	
	ready = document.getElementById('ready');
	go = document.getElementById('go');
	ready.style.display = 'none';
	go.style.display = 'none';
	
	p[0] = document.getElementById('p100');
	p[1] = document.getElementById('p500');
	p[2] = document.getElementById('p1000');
	p[0].style.display = 'none';
	p[1].style.display = 'none';
	p[2].style.display = 'none';
	rw[0]=100;
	rw[1]=500;
	rw[2]=1000;
	
	menu =  document.getElementById('menu');
	//setscroll();
}

function updateScore() {
	score_o.innerHTML = sshadow.innerHTML = score + '';
}

function updateLives() {
	lives_o.innerHTML = lshadow.innerHTML = lives + '';
}

function updateMonsterMode() {
	if(fruit[6].active == false) {
		if(monster_mode >= 3300) {
			fruit[6].spawn();
			monster_mode = 0;
		}
	}
}

mmtimeout = '';
function BecomeMonster() {
player.setImg = monsterImage;
player.obj.style.width = player.obj.style.height = 56;
player.mmode = true;
player.setImg();
mmtimeout = window.setTimeout('BecomeNormal()',4000);
}
function BecomeNormal() {
player.setImg = normalImage;
player.obj.style.width = player.obj.style.height = 45;
player.setImg();
player.mmode = false;
}

function reward(type,x,y) {
	score += rw[type];
	season_points += rw[type];
	if(season_points > 5000) {
		season_points -= 5000;
		season = (season+1)%4;
		bs.style.backgroundImage = bsImgs[season];
	}
	if(!player.mmode) {
	  monster_mode += rw[type];
	  updateMonsterMode();
	}
	if(level < 3) {
		if(level == 0 && score == 100) {
			fruit[1].spawn();
			active_fruit_count++;
			level++;
		}
		if(level == 1 && score == 200) {
			fruit[2].spawn();
			active_fruit_count++;
			level++;
		}
		if(level == 2 && score == 300) {
			fruit[4].spawn();
			dragonflies[0].spawn();
			active_dragonfly_count++;
			level++;
		}
		
	}
	else {
		if(score > 300 * level * level) {
			if(fruit[5].active == false) fruit[5].spawn();
			if(active_dragonfly_count < 4) {
				dragonflies[active_dragonfly_count].spawn();
				active_dragonfly_count++;
			}
			if(active_fruit_count < 4) {
				fruit[active_fruit_count].spawn();
				active_fruit_count++;
			}
			level++;
		}
	}
	if(score > 20000*extra_lives_given)  {
		lives++;
		extra_lives_given++;
		updateLives();
	}

	p[type].style.left = x;
	p[type].style.top = y;
	p[type].style.display = 'block';
	pt[type] = setTimeout( 'dnone(p['+type+']);',800);
	updateScore();
}

function dnone(obj) {
	obj.style.display = 'none';
}

function onTouched(e) {
    touch_x = e.clientX; 
	touch_y = e.clientY-176;
	player.beginMove(touch_x, touch_y);
}

function startGame() {
	tsd.style.display = "block";
	menu.style.display = 'none';
	menu.style.left = 400;
	ready.style.display = 'block';
	setTimeout('stage2()', 800);
	gstate = 1;
}

function stage2() {
	ready.style.display = 'none';
	go.style.display = 'block';
	setTimeout('stage3()', 600);
}

function stage3() {
	go.style.display = 'none';
	player.spawn();
	for(var i=0;i<4;i++) { if(dragonflies[i].active) dragonflies[i].spawn(); }
	if(gstate == 1) {
		step_interval = window.setInterval('step()', 80);
		bs.onmousedown = onTouched;
		fruit[0].spawn();
		gstate = 2;
	}
}

function startNextLife() {
	player.x = 400;
	player.updatePosition();
	ready.style.display = 'block';
	this.timeout = setTimeout('stage2()', 1000);
	for(var i=0;i<4;i++) { dragonflies[i].hide(); }
}



function endGame() {
	if(hiscores.isScoreHigher(score)) showScoreSubmit();
	//Reset game state
	gstate = 3;
	bs.onmousedown = '';
	
	for(var i=0;i<7;i++) {
		fruit[i].reset();
	}
	for(var i=0;i<4;i++) {
		dragonflies[i].reset();
	}
	player.preset();
	score = 0;
	lives = 3;
	monster_mode = 0;
	level = 0;
	season = 0;
	season_points = 0;
	bs.style.backgroundImage = bsImgs[0];
	active_fruit_count = 1;
	active_dragonfly_count = 0;
	extra_lives_given = 1;
	updateScore();
	updateLives();
	for(var i=0;i<regc;i++){clearRegister(i);}
	window.clearInterval(step_interval);
	menu.style.display = 'block';
	menu.style.left = 50;
	tsd.style.display = "none";
}

function keyevent(e) {
	//keynum = e.which;
	return false;
}
