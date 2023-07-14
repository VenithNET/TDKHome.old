<html>
<head>
<title>3DS Homepage</title>
<meta name="viewport" content="width=320">
<!----search engine data---->
<meta name="description" content="The 3DS Homepage is a great site for the 3DS's Internet Browser with games, apps, videos, and more!">
<meta name="keywords" content="dsihomepage, 3DS Homepage, 3ds homepage, 3DSHomepage, 3ds Homepage, 3DS homepage, 3DS Sites, 3ds sites, 3DS Site, 3ds site, 3ds compatible site, what are some 3ds compatible sites, What are some 3DS compatible sites?, 3DS Browser Games, 3ds browser games, 3ds tube, dsitube, 3DS Tube, 3DSTube, 3DSPaint, 3DSUniverse, DS Opera SDK, Nintendo DS, Nintendo 3DS, 3DS, JavaScript, video games, 3DS Chatroom, homebrew, Nintendo WiFi, Nintendo, nintendo, 3ds, 3DS, free, online, games, download, 3dsware">
<!-------style sheet-------->
<style>
body { margin:0px; }
#topscreen { width: 320px; height:218; overflow: hidden; }
#bottomscreen { width: 320px; height:212; }
.option { width:314px; height:36px; overflow: hidden; padding:1px; margin:0px; border:2px solid black; border-bottom:0px solid black; background:gray; font-size:32px; }
#copyright { background:lightgray; border-top:2px solid black; }
#colorpicker { background:white; width:314px; height:36px; overflow: hidden; padding:1px; padding-top:2px; padding-bottom:0px; margin:0px; border:2px solid black; border-bottom:0px solid black; }
#counter { position:absolute; top:144px; left:100px; border:1px solid black; padding:1px; background-color:white; opacity:0.75; }
.nostyle { text-decoration:none; color:black; font-size:12px; }
a { text-decoration:none; color:black; }
a.normal { text-decoration:underline; color:blue; }
.is{
width:34px;
height:34px;
background-image:url(/img/color-icons.png);
}
#red{background-position:-68px 0;}
#orange{background-position:-102px 0;}
#purple{background-position:-34px 0;}
#green{background-position:-34px -34px;}
#blue{background-position:-102px -34px;}
#pink{background-position:-68px -34px;}
#yellow{background-position:0 -34px;}
</style>
<!----3DS Countdown code---->
<script>
// http://javascript.internet.com
//Created by: Robin Jones :: http://www.robinjones1.freeuk.com/
function daysTill(){
var day=27;
var month=3;
var year=2011;
var daystocount=new Date(year, month -1, day);
today=new Date();
if (today.getMonth()==month && today.getDate()>day);
daystocount.setFullYear(daystocount.getFullYear());
var oneday=1000*60*60*24;
var write = (Math.ceil((daystocount.getTime()-today.getTime())/(oneday)));
document.write("Only "+write+" days until 3DS America release!");
}
</script>
<!---Improper URl Redirect-->
<script>
if (window.location.href == "http://dsihomepage.x10.mx/public_3ds/index.php"){
window.location="http://3ds.dsihomepage.x10.mx/index.php";
}
if (window != top) top.location.href=location.href;
</script>
<!-----Change background---->
<script src="color.js"></script>
<!------Holiday notifer----->
<script>
var todaydate=new Date()
var m=todaydate.getMonth();
var d=todaydate.getDate();
var theholiday="(no holiday)";

if(m == 0 && d == 1){
theholiday="New year's day";
}
else if(m == 1 && d == 2){
theholiday="Groundhog day";
}
else if(m == 1 && d == 14){
theholiday="Valentine's day";
}
else if(m == 1 && d == 29){
theholiday="leap day";
}
else if(m == 2 && d == 27){
theholiday="the 3DS' b-day";
}
else if(m == 6 && d == 4){
theholiday="Independence Day (US)";
}
else if(m == 9 && d == 31){
theholiday="Halloween";
}
else if(m == 11 && d == 24){
theholiday="Christmas eve";
}
else if(m == 11 && d == 25){
theholiday="Christmas";
}
else if(m == 11 && d == 31){
theholiday="New year's eve";
}
if(theholiday != "(no holiday)"){
alert("It\'s "+theholiday+"! \nAdd a holiday in the\ncontact me section);
}
</script>
</head>
<body background="" onload="document.body.scrollTop=218; checkbg();">
<div id="counter">
<center>
<span style="font-size:10px;">Visitors since 6/7/11</span><br>
<!-- hitwebcounter Code START -->
<a href="http://www.hitwebcounter.com/counterresources.php" target="_blank">
<img src="http://hitwebcounter.com/counter/counter.php?page=213446&style=0006&nbdigits=6&type=ip&initCount=0" title="Counter For PHP Sites" Alt="Counter For PHP Sites" border="0" ></a>
<br>
<!-- hitwebcounter.com --><a href="http://www.hitwebcounter.com/" title="Site Meter" 
target="_blank" style="font-family: Arial, Geneva , Helvetica, sans-serif; 
font-size: 12px; color: #999799; text-decoration: underline ;"></a>
</center>   
<span class="nostyle">
<script type="text/javascript" src="http://www.usuarios-online.com/usuarios.php?v=3ds.dsihomepage.x10.mx/"></script> <a href="http://www.usuarios-online.com/en/">users online</a>
</span>
</div>
<div id="topscreen"><img src="/img/logo.png"></div>
<div id="bottomscreen">
<div id="colorpicker">&nbsp;&nbsp;
<img id="red" class="is" src="/img/img_trans.gif" width="1" height="1" onclick="changecolor('red')">
<img id="orange" class="is" src="/img/img_trans.gif" width="1" height="1" onclick="changecolor('orange')">
<img id="yellow" class="is" src="/img/img_trans.gif" width="1" height="1" onclick="changecolor('yellow')">
<img id="green" class="is" src="/img/img_trans.gif" width="1" height="1" onclick="changecolor('green')">
<img id="blue" class="is" src="/img/img_trans.gif" width="1" height="1" onclick="changecolor('blue')">
<img id="purple" class="is" src="/img/img_trans.gif" width="1" height="1" onclick="changecolor('purple')">
<img id="pink" class="is" src="/img/img_trans.gif" width="1" height="1" onclick="changecolor('pink')">
</div>
<div style="width:314px; overflow:hidden; padding:1px; margin:0px; border:2px solid black; border-bottom:0px solid black; background:gray;"><input type="text" size=39 id="query" style="padding:0px;"><button onclick="window.location='search.php?q='+document.getElementById('query').value;" style="width:24px; height:24px; padding:0px; margin-top:3px;"><img src="/img/search.png"></button>
</div>
<div class="option" onclick="window.location='/games/?'+curcolor;"><img src="/img/game.png" width=32 height=32> Games&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div class="option" onclick="window.location='/apps/?'+curcolor;"><img src="/img/apps.png" width=32 height=32> Apps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div class="option" onclick="window.location='/videos/?'+curcolor;"><img src="/img/vid.png" width=32 height=32> Videos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div class="option" onclick="window.location='/images/?'+curcolor;"><img src="/img/img.png" width=32 height=32> 3D Images&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div class="option" onclick="window.location='/mii/?'+curcolor;"><img src="/img/mii2.png" width=32 height=32> Mii Codes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div class="option" onclick="window.location='/links.html?'+curcolor;"><img src="/img/link.png" width=32 height=32> Links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div class="option" onclick="window.location='/news/?'+curcolor;"><img src="/img/news.png" width=32 height=32> News&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div class="option" onclick="window.location='/more/?'+curcolor;"><img src="/img/more.png" width=32 height=32> More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/img/go.png" width=32 height=32></div>
<div id="copyright">&copy; <a href="/more/aboutme.html" class="normal">quadrplax</a> 2011. All rights reserved.</div>
</div>
</body>
</html>