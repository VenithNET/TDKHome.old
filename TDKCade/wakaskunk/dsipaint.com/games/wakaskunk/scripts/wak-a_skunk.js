var quotes = ['Haha, you n00b!','Skunkman &gt; You','You stink more than me!'];
var characters = ['hb','si','mg','sm','sm','sm','sm','sm','sm','sm'];
var score=0,x,y,char,malletx,mallety,offset,tries=3;
window.onload = function(){ setTimeout('new_popup();',500); }
window.onclick = function(e){
	malletx=e.clientX;
	mallety=e.clientY;
	document.getElementById('mallet').style.left = malletx-55;
	document.getElementById('mallet').style.top = mallety-35;
	document.getElementById('mallet').style.display = 'block';
	document.body.scrollTop = 176;
	animate_mallet(0);
}
function new_popup(){
	x = ((Math.random()*3)|0)*80+17;
	y = ((Math.random()*2)|0)*68+205;
	char = (Math.random()*10)|0;
	offset=75;
	document.getElementById('head').className='head '+characters[char];
	document.getElementById('head').style.left=x+'px';
	document.getElementById('head').style.top=y+'px';
	animate_up();
}
function animate_up(){
	if(tries){
		hittable=true;
		offset-=25;
		document.getElementById('head').style.backgroundPosition='0px '+offset+'px';
		if(offset){
			setTimeout('animate_up();',50);
		}else{
			setTimeout('animate_down();',score<950?1000-score:50);
		}
	}
}
function animate_down(){
	offset+=25;
	document.getElementById('head').style.backgroundPosition='0px '+offset+'px';
	if(offset<=50){
		setTimeout('animate_down();',50);
	}else{
		hittable=false;
		setTimeout('new_popup();',score<950?1000-score:50);
	}
}
function animate_mallet(frame){
	if(frame<3){
		setTimeout('animate_mallet('+(frame+1)+');', 50);
		document.getElementById('mallet').style.backgroundPosition = '0px -'+(frame*40)+'px';
	}else{
		document.getElementById('mallet').style.display = 'none';
		if(hittable && malletx>=x && malletx<=x+52 && mallety>=y && mallety<=y+44){
			hittable=false;
			hit_check();
		}
	}
}
function hit_check(){
	switch(characters[char]){
		case 'hb':
		case 'si':
			document.getElementById('quote').innerHTML=quotes[(Math.random()*3)|0];
			score-=2;
			tries--;
			break;
		case 'mg':
			document.getElementById('quote').innerHTML='Complete failure, hitting a baby!';
			score-=100;
			tries=0;
			break;
		default:
			score+=5;
			document.getElementById('quote').innerHTML='Oh noes!';
			break;
	}
	document.getElementById('score').innerHTML='Score: '+score;
	document.getElementById('tries').innerHTML='Tries: '+tries;
	if(!tries){
		document.getElementById('top').style.background='#f22';
		document.getElementById('tries').innerHTML='Epic failure!';
		showing=false;
		ajax_save=new XMLHttpRequest();
		ajax_save.open('GET', 'index.php?dummy='+(Math.random())+'&member='+userid+'&score='+score, true);
		ajax_save.send(null);
		setTimeout('location.href="https://sdkpaint.github.io/TDKCade/";',2000);
	}
}
