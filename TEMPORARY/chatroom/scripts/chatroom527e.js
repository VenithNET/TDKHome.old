'use strict';
function sendpost(message){
	var posttext = (typeof message != 'undefined') ? message : txtPost.value;
	txtPost.value='';
	if(posttext.substring(0,9)=='/chatswap'){
		var temp_chatroom=posttext.substr(10,1).toUpperCase()+posttext.substr(11).toLowerCase();
		if(temp_chatroom!='Ninja') h1Chatroom.innerHTML='Chatroom '+(chatroom=temp_chatroom);
		return false;
	}else if(posttext.substring(0,8)=='/profile'){
		getProfile(posttext.substr(9));
		return false;
	}
	xhrPost.open('GET', '?ajax='+(new Date()).getTime()+'&id='+chatroom+'&action=post&post='+encodeURIComponent(posttext)+'&color='+colorCurrent, true);
	xhrPost.send(null);
	return false;
}

function refreshChat(){
	xhrRead.abort();
	xhrRead.open('GET', '?ajax='+(new Date()).getTime()+'&id='+chatroom+'&action=read', true);
	xhrRead.send(null);
}

function refreshUsers(){
	xhrUser.abort();
	xhrUser.open('GET', '?ajax='+(new Date()).getTime()+'&id='+chatroom+'&action=users', true);
	xhrUser.send(null);
}

function getProfile(id){
	xhrProfile.abort();
	xhrProfile.open('GET', '?ajax='+(new Date()).getTime()+'&id='+chatroom+'&action=profile&member='+escape(id), true);
	xhrProfile.send(null);
}

function avatar(avatar){
	sendpost('/avatar ' + avatar);
}
function ban(){
	popupProfile.style.display='none';
	txtPost.value='/ban '+member.name+'/';
	txtPost.focus();
}
function popupClose(){
	popupProfile.style.display='none';
}
function color(obj,col){
	colorCurrent=col;
	var i = btnColors.length;
	while(--i>=0) btnColors[i].style.border='1px outset #888';
	obj.style.border='1px solid #000';
}
function kick(){
	popupProfile.style.display='none';
	txtPost.value='/kick '+member.name+'/';
	txtPost.focus();
}
function pm(){
	sendpost('/pm ' + member.name);
}

function flash_overlords(flash){
	var overlords = document.getElementsByName('overlord'),
		i = overlords.length;
	while(--i>=0) overlords[i].style.color='#'+(flash?'f00':'00f');
	setTimeout('flash_overlords('+(!flash)+');', 500);
}

function refreshMyPopupAlerts(){
	xhrAlert.open('GET', '/includes/ajax.section.my_alert_popup.php', true);
	xhrAlert.send(null);
}

var colorCurrent='00f',
	member={},
	btnColors=[],
	divChatText=null,
	divChatUsers=null,
	divProfile=null,
	popupAlert=null,
	popupProfile=null,
	h1Chatroom=null,
	h1Profile=null,
	txtPost=null,
	xhrAlert=new XMLHttpRequest(),
	xhrPost=new XMLHttpRequest(),
	xhrProfile=new XMLHttpRequest(),
	xhrRead=new XMLHttpRequest(),
	xhrUser=new XMLHttpRequest();

xhrPost.onreadystatechange = function(){
	if(this.readyState==4){
		divChatText.innerHTML=this.responseText+divChatText.innerHTML;
	}
};
xhrProfile.onreadystatechange = function(){
	if(this.readyState==4 && this.responseText){
		try{ member = parse(this.responseText); }catch(err){ member = [{}]; }
		if(member.length){
			member = member[0];
			h1Profile.innerHTML=member.name;
			divProfile.innerHTML='<b>Name:</b> '+member.first+'<br /><b>Mood:</b> '+member.mood+'<br /><b>3DS:</b> '+member.threeds+'<br /><b>Switch:</b> '+member.nswitch+'<br /><b>Friend:</b>'+member.friend+'<br /><br />'+member.sig;
			popupProfile.style.display='block';
		}
	}
};
xhrRead.onreadystatechange = function(){
	if(this.readyState>2 && this.status>=400){
		this.onreadystatechange = function(){ setTimeout(refreshChat, 5000); }
		this.abort();
		return;
	}else if(this.readyState==4){
		if(this.responseText){
			var post = [];
			try{ post = parse(this.responseText); }catch(err){ post = []; }
			var i=post.length,
				text='',
				string='',
				split=[];
			if(i){
				while(--i>=0){
					if(post[i].kick){
						alert(post[i].text);
						history.back();
					}else if(post[i].text){
						text = post[i].text;
						var highlight = chatroom == 'Ninja' && !post[i].chatroom && post[i].username;
						if(highlight) string += '<div style="background:#888;padding:0">';
						if(post[i].avatar){ string+='<img src="avatars_chat/'+post[i].avatar+'.png" alt="" />'; }
						if(post[i].username){
							string+='<span style="color:#'+post[i].color+'" onclick="getProfile('+post[i].id+')">'+post[i].username;
							if(post[i].recipient) string+=' (To '+post[i].recipient+')';
							if(post[i].chatroom) string+=' ('+post[i].chatroom+')';
							string+=':</span> '+text+'<br />';
							if(highlight) string += '</div>';
						}else{
							string+='<span style="color:#'+post[i].color+'">'+text+'</span><br />';
						}
					}
				}
				string+=divChatText.innerHTML;
				if((split=string.indexOf('<',8000))>-1) string=string.substr(0,split);
				divChatText.innerHTML=string;
			}
		}
		setTimeout(refreshChat, 2000);
	}
};
xhrAlert.onreadystatechange = function(){
	if(this.readyState>2 && this.status>=400){
		this.onreadystatechange = function(){ setTimeout(refreshMyPopupAlerts, 60000); }
		this.abort();
		return;
	}else if(this.readyState==4){
		if(this.responseText){
			var alerts=[];
			try{ alerts = parse(this.responseText); }catch(err){ alerts = []; }
			var i=alerts.length,
				string='';
			while(--i>=0) string+='New <a href="/mymessageviewer.php?message='+alerts[i].mess+'">Message</a> from <a href="/member?id='+alerts[i].id+'">'+alerts[i].name+'</a>';
			popupAlert.innerHTML=string;
			popupAlert.style.display=(alerts.length?'block':'none');
		}
		setTimeout(refreshMyPopupAlerts, 10000);
	}
};
xhrUser.onreadystatechange = function(){
	if(this.readyState>2 && this.status>=400){
		this.onreadystatechange = function(){ setTimeout(refreshUsers, 10000); }
		this.abort();
		return;
	}else if(this.readyState==4){
		if(this.responseText){
			var users = [];
			try{ users = parse(this.responseText); }catch(err){ users=[]; }
			var i=users.length,
				string='';
			while(--i>=0){
				if(users[i].member){
					string+='<div style="';
					if(users[i].banned) string+='text-decoration:line-through;';
					if(users[i].away){
						string+='color:#bbb;';
					}else if(users[i].admin){
						string+='color:#f00;font-weight:bold;';
					}
					if(users[i].overlord) string+='" name="overlord';
					string += '">'+users[i].member+'</div>';
				}
			}
		}
		divChatUsers.innerHTML=string;
		setTimeout(refreshUsers, 5000);
	}
};
window.onload=function(){
	btnColors=document.getElementsByClassName('btnColors');
	divChatText=document.getElementById('divChatText');
	divChatUsers=document.getElementById('divChatUsers');
	divProfile=document.getElementById('divProfile');
	popupProfile=document.getElementById('popupProfile');
	popupAlert=document.getElementById('popupAlert');
	h1Chatroom=document.getElementById('h1Chatroom');
	h1Profile=document.getElementById('h1Profile');
	txtPost=document.getElementById('txtPost');
	refreshChat();
	refreshUsers();
	refreshMyPopupAlerts();
	flash_overlords(true);
	sendpost('/me is here');
};
window.onbeforeunload = function(){
	sendpost('/me is gone');
};
