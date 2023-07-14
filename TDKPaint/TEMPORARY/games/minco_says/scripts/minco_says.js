window.onload = function(){
	update_score();
	update_tries();
	animate_minco();
	setTimeout('ready();', 1500);
}

function ready(){
	document.getElementById('notice').innerHTML='Ready...';
	setTimeout('set();', 1500);
}

function set(){
	document.getElementById('notice').innerHTML='Set...';
	setTimeout('go();', 1500);
}

function go(){
	document.getElementById('notice').innerHTML='Go!';
	setTimeout('append_pattern();', 1500);
}

var frame=0;
function animate_minco(){
	frame=(frame+1)&3;
	document.getElementById('minco').style.backgroundPosition=(-32*frame)+'px 0px';
	setTimeout('animate_minco();', 250);
}

var score=0;
var tries=3;

var pattern=[];
var position=0;

var showing=false;

var number_to_color=['yellow','red','blue','green'];

function append_pattern(){
	pattern[pattern.length]=(Math.random()*4)|0;
	update_round();
	show_pattern(0);
}

function show_pattern(){
	showing=true;
	position=0;
	setTimeout('darken_all();', 500);
	setTimeout('show(0);', 1500);
}

function show(index){
	if(!index){
		document.getElementById('notice').style.display='block';
		document.getElementById('notice').innerHTML='Showing Pattern';
		document.getElementById('great').style.display='none';
		document.getElementById('wrong').style.display='none';
	}

	document.getElementById(number_to_color[pattern[index]]).className=number_to_color[pattern[index]]+'_light';
	
	index++;
	
	if(index<pattern.length){
		setTimeout('darken_all();', 400);
		setTimeout('show('+index+');', 800);
	}else{
		setTimeout('end_showing();', 400);
	}
}

function end_showing(){
	darken_all();
	document.getElementById('notice').style.display='none';
	showing=false;
}

function darken_all(){
	document.getElementById('yellow').className='yellow_dark';
	document.getElementById('red').className='red_dark';
	document.getElementById('blue').className='blue_dark';
	document.getElementById('green').className='green_dark';
}

function click(index){
	if(!showing && tries){
		darken_all();
		document.getElementById(number_to_color[index]).className=number_to_color[index]+'_light';
		if(index==pattern[position]){
			position++;
			score++;
			update_score();
			if(position==pattern.length){
				document.getElementById('great').style.display='block';
				append_pattern();
			}
		}else{
			tries--;
			document.getElementById('wrong').style.display='block';
			update_tries();
			if(!tries){
				document.getElementById('notice').style.display='block';
				document.getElementById('notice').innerHTML='Game Over';
				showing=false;
				
				ajax_remove=new XMLHttpRequest();
				ajax_remove.open('GET', 'index.php?dummy='+(Math.random())+'&member='+userid+'&score='+score, true);
				ajax_remove.send(null);

				setTimeout('location.href="highscores.php";',3000);
			}else{
				setTimeout('show_pattern();', 2000);
			}
		}
	}
}

function update_round(){ document.getElementById('round').innerHTML = 'Round: '+pattern.length; }
function update_score(){ document.getElementById('score').innerHTML = 'Score: '+score; }
function update_tries(){ document.getElementById('tries').innerHTML = 'Tries: '+tries; }