var dice = [0,0,0,0,0];
var lock = [false,false,false,false,false];
var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var forfeits = [false,false,false,false,false,false,true,false,false,false,false,false,false,false];
var matches = [false,false,false,false,false,false,false,false,false,false,false,false,false,true];
var points = [0,0,0,0,0,0,35,0,0,25,30,40,50,0];
var roll = 0;

window.onload = function(){
	clear_dice();
}

function claim(num){
	if(!forfeits[num] && !scores[num] && roll){
		if(!matches[num]){
			forfeits[num]=true;
		}else{
			if(points[num]){
				scores[num]=points[num];
			}else{
				if(num<6){
					scores[num] = 0;
					for(index=0; index<6; index++){
						if(dice[index]==num+1){ scores[num]+=num+1; }
						if(!scores[num]){ forfeits[num]=true; }
					}
				}else{
					scores[num]=dice[0]+dice[1]+dice[2]+dice[3]+dice[4];
				}
			}
			
		}
		if(num<6 && scores[0]+scores[1]+scores[2]+scores[3]+scores[4]+scores[5]>=63){
			scores[6]=35;
			document.getElementById('score_6').innerHTML=35;
		}
		document.getElementById('score_'+num).style.background='#888';
		document.getElementById('score_'+num).innerHTML=scores[num];

		var total=0;
		var done=true;
		for(index=14; --index>=0;){
			total+=scores[index];
			if(!scores[index] && !forfeits[index]){ done=false; }
		}
		
		document.getElementById('total_score').innerHTML=total;

		if(done){
			document.getElementById('roll_button').style.display='none';
			setTimeout('location.href="highscores.php";',2000);

			ajax_save=new XMLHttpRequest();
			ajax_save.open('GET', 'index.php?dummy='+(Math.random())+'&member='+userid+'&score='+total, true);
			ajax_save.send(null);

		}else{
			clear_dice();
		}
	}
}

function animate_yorick(frame){
	if(roll<3){
		if(roll==2){
			document.getElementById('roll_button').style.display='none';
		}
		frame=(frame+1)&3;
		document.getElementById('yorick').style.backgroundPosition=(-32*frame)+'px 0px';
		if(frame){
			setTimeout('animate_yorick('+frame+');', 200);
		}else{
			roll_dice();
		}
	}
}

function clear_dice(){
	for(var index=5; --index>=0;){
		document.getElementById('die'+index).style.display='none';
	}
	roll=0;
	document.getElementById('roll_button').style.display='block';
}

function roll_dice(){
	for(var index=5; --index>=0;){
		if(!lock[index]){
			dice[index] = ((Math.random()*6)|0)+1;
		}else{
			document.getElementById('die'+index).value = '';
			lock[index]=false;
		}
	}
	for(var index=5; --index>=0;){
		for(var index2=index; --index2>=0;){
			if(dice[index]<dice[index2]){
				var swap = dice[index];
				dice[index] = dice[index2];
				dice[index2] = swap;
				swap = lock[index];
				lock[index] = lock[index2];
				lock[index2] = swap;
			}
		}
	}
	for(var index=5; --index>=0;){
		document.getElementById('die'+index).className='die'+dice[index];
		document.getElementById('die'+index).style.display='block';
	}
	roll++;
	list_matches();

}

function lock_die(num){
	if(roll<3){
		if(!lock[num]){
			document.getElementById('die'+num).value = 'LOCK';
			lock[num] = true;
		}else{
			document.getElementById('die'+num).value = '';
			lock[num] = false;
		}
	}
}

function list_matches(){
	for(index=14; --index>=0;){
		matches[index] = false;
	}

	//ones
	matches[0] = true;
	//twos
	matches[1] = true;
	//threes
	matches[2] = true;
	//fours
	matches[3] = true;
	//fives
	matches[4] = true;
	//sixes
	matches[5] = true;
	//3 of a kind
	if((dice[0]==dice[1] && dice[1]==dice[2]) ||
			(dice[1]==dice[2] && dice[2]==dice[3]) ||
			(dice[2]==dice[3] && dice[3]==dice[4])){
		matches[7] = true;
	}
	//4 of a kind
	if((dice[0]==dice[1] && dice[1]==dice[2] && dice[2]==dice[3]) ||
			(dice[1]==dice[2] && dice[2]==dice[3] && dice[3]==dice[4])){
		matches[8] = true;
	}
	//full house
	if((dice[0]==dice[1]&& dice[1]==dice[2] && dice[3]==dice[4]) ||
			(dice[0]==dice[1] && dice[2]==dice[3] && dice[3]==dice[4])){
		matches[9] = true;
	}
	//small straight
	if((dice[0]==1 && dice[1]==2 && dice[2]==3 && dice[3]==4) ||
			(dice[0]==1 && dice[1]==2 && dice[2]==3 && dice[3]==4) ||
			(dice[0]==1 && dice[1]==2 && dice[2]==3 && dice[4]==4) ||
			(dice[0]==1 && dice[1]==2 && dice[3]==3 && dice[4]==4) ||
			(dice[0]==1 && dice[2]==2 && dice[3]==3 && dice[4]==4) ||
			(dice[1]==1 && dice[2]==2 && dice[3]==3 && dice[4]==4) ||
			(dice[0]==2 && dice[1]==3 && dice[2]==4 && dice[3]==5) ||
			(dice[0]==2 && dice[1]==3 && dice[2]==4 && dice[4]==5) ||
			(dice[0]==2 && dice[1]==3 && dice[3]==4 && dice[4]==5) ||
			(dice[0]==2 && dice[2]==3 && dice[3]==4 && dice[4]==5) ||
			(dice[1]==2 && dice[2]==3 && dice[3]==4 && dice[4]==5) ||
			(dice[0]==3 && dice[1]==4 && dice[2]==5 && dice[3]==6) ||
			(dice[0]==3 && dice[1]==4 && dice[2]==5 && dice[4]==6) ||
			(dice[0]==3 && dice[1]==4 && dice[3]==5 && dice[4]==6) ||
			(dice[0]==3 && dice[2]==4 && dice[3]==5 && dice[4]==6) ||
			(dice[1]==3 && dice[2]==4 && dice[3]==5 && dice[4]==6)){
		matches[10] = true;
	}
	//large straight
	if((dice[0]==1 && dice[1]==2 && dice[2]==3 && dice[3]==4 && dice[4]==5) ||
			(dice[0]==2 && dice[1]==3 && dice[2]==4 && dice[3]==5 && dice[4]==6)){
		matches[11] = true;
	}
	//yortzee
	if(dice[0]==dice[1] && dice[1]==dice[2] && dice[2]==dice[3] && dice[3]==dice[4]){
		matches[12] = true;

	}
	//chance
	matches[13] = true;
	
	for(index=14; --index>=0;){
		if(!forfeits[index] && !scores[index]){
			if(matches[index]){
				document.getElementById('score_'+index).style.background='#ff0';
			}else{
				document.getElementById('score_'+index).style.background='#fff';
			}
		}
	}
}