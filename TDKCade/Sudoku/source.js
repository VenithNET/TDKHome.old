var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

level=[10,14,12];
minnum=1;
maxnum=6;
ver=['on','off'];
color=[0,1,2];
msglevel=['easy','hard','medium'];
msgcolor=['green','blue','red'];
n=81;
s=47;
var b;

function preload()
{
pic=new Image();
pic.src="bg.jpg";
pic.onload=setup;
}

function setup()
{
num=[4,8,6,7,3,1,9,2,5,9,2,3,4,8,5,1,6,7,7,1,5,6,9,2,3,8,4,6,7,2,1,4,9,5,3,8,1,3,9,8,5,6,4,7,2,8,5,4,2,7,3,6,1,9,2,4,1,5,6,8,7,9,3,3,6,7,9,2,4,8,5,1,5,9,8,3,1,7,2,4,6];
sym=[0,1,2,3,9,10,11,12,18,19,20,21,27,28,29,30,36,37,38,39,40];
randomnum=[level[0]];
td=[n];
inp="<input type=\"text\" autocomplete=\"off\" id=\"form"+color[0]+"\" maxLength=\"1\" value=\"\" onkeyup=\"javascript:enter(";
scramble();
for (i=0;i<n;i++) td[i]=num[i];
for (i=0;i<sym.length;i++)
{
random=parseInt(Math.random()*(i+1));
randomnum[i]=randomnum[random];
randomnum[random]=i;
}
for (i=0;i<n;i++) td[i]="<input type=\"text\" maxLength=\"1\" value=\""+num[i]+"\" readonly>";
for (i=0;i<level[0];i++)
{
num[sym[randomnum[i]]]="";
td[sym[randomnum[i]]]=inp+sym[randomnum[i]]+");\">";
}
if (num[0]=="") {num[8]=""; num[80]=""; num[72]=""; td[8]=inp+8+");\">"; td[80]=inp+80+");\">"; td[72]=inp+72+");\">";}
if (num[1]=="") {num[17]=""; num[79]=""; num[63]=""; td[17]=inp+17+");\">"; td[79]=inp+79+");\">"; td[63]=inp+63+");\">";}
if (num[2]=="") {num[26]=""; num[78]=""; num[54]=""; td[26]=inp+26+");\">"; td[78]=inp+78+");\">"; td[54]=inp+54+");\">";}
if (num[3]=="") {num[35]=""; num[77]=""; num[45]=""; td[35]=inp+35+");\">"; td[77]=inp+77+");\">"; td[45]=inp+45+");\">";}
if (num[9]=="") {num[7]=""; num[71]=""; num[73]=""; td[7]=inp+7+");\">"; td[71]=inp+71+");\">"; td[73]=inp+73+");\">";}
if (num[10]=="") {num[16]=""; num[70]=""; num[64]=""; td[16]=inp+16+");\">"; td[70]=inp+70+");\">"; td[64]=inp+64+");\">";}
if (num[11]=="") {num[25]=""; num[69]=""; num[55]=""; td[25]=inp+25+");\">"; td[69]=inp+69+");\">"; td[55]=inp+55+");\">";}
if (num[12]=="") {num[34]=""; num[68]=""; num[46]=""; td[34]=inp+34+");\">"; td[68]=inp+68+");\">"; td[46]=inp+46+");\">";}
if (num[18]=="") {num[6]=""; num[62]=""; num[74]=""; td[6]=inp+6+");\">"; td[62]=inp+62+");\">"; td[74]=inp+74+");\">";}
if (num[19]=="") {num[15]=""; num[61]=""; num[65]=""; td[15]=inp+15+");\">"; td[61]=inp+61+");\">"; td[65]=inp+65+");\">";}
if (num[20]=="") {num[24]=""; num[60]=""; num[56]=""; td[24]=inp+24+");\">"; td[60]=inp+60+");\">"; td[56]=inp+56+");\">";}
if (num[21]=="") {num[33]=""; num[59]=""; num[47]=""; td[33]=inp+33+");\">"; td[59]=inp+59+");\">"; td[47]=inp+47+");\">";}
if (num[27]=="") {num[5]=""; num[53]=""; num[75]=""; td[5]=inp+5+");\">"; td[53]=inp+53+");\">"; td[75]=inp+75+");\">";}
if (num[28]=="") {num[14]=""; num[52]=""; num[66]=""; td[14]=inp+14+");\">"; td[52]=inp+52+");\">"; td[66]=inp+66+");\">";}
if (num[29]=="") {num[23]=""; num[51]=""; num[57]=""; td[23]=inp+23+");\">"; td[51]=inp+51+");\">"; td[57]=inp+57+");\">";}
if (num[30]=="") {num[32]=""; num[50]=""; num[48]=""; td[32]=inp+32+");\">"; td[50]=inp+50+");\">"; td[48]=inp+48+");\">";}
if (num[36]=="") {num[4]=""; num[44]=""; num[76]=""; td[4]=inp+4+");\">"; td[44]=inp+44+");\">"; td[76]=inp+76+");\">";}
if (num[37]=="") {num[13]=""; num[43]=""; num[67]=""; td[13]=inp+13+");\">"; td[43]=inp+43+");\">"; td[67]=inp+67+");\">";}
if (num[38]=="") {num[22]=""; num[42]=""; num[58]=""; td[22]=inp+22+");\">"; td[42]=inp+42+");\">"; td[58]=inp+58+");\">";}
if (num[39]=="") {num[31]=""; num[41]=""; num[49]=""; td[31]=inp+31+");\">"; td[41]=inp+41+");\">"; td[49]=inp+49+");\">";}
reject();
}

function enter(b)
{
a=document.forms[0].elements[b].value;
if (a>0&&a<10)
{
td[b]="<input type=\"text\" autocomplete=\"off\" id=\"form"+color[0]+"\" size=\"1\" maxLength=\"1\" value=\""+a+"\" onkeyup=\"javascript:enter("+b+");\">";
num[b]=a;
message="";
verify(b);
}
else if (a=="")
{
td[b]="<input type=\"text\" autocomplete=\"off\" id=\"form"+color[0]+"\" size=\"1\" maxLength=\"1\" value=\"\" onkeyup=\"javascript:enter("+b+");\">";
num[b]="";
message="Clear.";
}
else
{
num[b]="";
message="No valid number!";
document.forms[0].elements[b].select();
}
document.getElementById("msg").firstChild.data=message;
}

function scramble()
{
for (i=0;i<n;i++)
{
random=Math.random();
if (random<=1/s) mirror_diagonal_1();
else if (random<=2/s) mirror_diagonal_2();
else if (random<=3/s) mirror_vertical();
else if (random<=4/s) mirror_horizontal();
else if (random<=5/s) rotate_90_left();
else if (random<=6/s) rotate_90_right();
else if (random<=7/s) rotate_180();
else if (random<=8/s) swap_column_block_1();
else if (random<=9/s) swap_column_block_2();
else if (random<=10/s) swap_column_block_3();
else if (random<=11/s) swap_column_block_4();
else if (random<=12/s) swap_column_block_5();
else if (random<=13/s) swap_row_block_1();
else if (random<=14/s) swap_row_block_2();
else if (random<=15/s) swap_row_block_3();
else if (random<=16/s) swap_row_block_4();
else if (random<=17/s) swap_row_block_5();
else if (random<=18/s) swap_column_1();
else if (random<=19/s) swap_column_2();
else if (random<=20/s) swap_column_3();
else if (random<=21/s) swap_column_4();
else if (random<=22/s) swap_column_5();
else if (random<=23/s) swap_column_6();
else if (random<=24/s) swap_column_7();
else if (random<=25/s) swap_column_8();
else if (random<=26/s) swap_column_9();
else if (random<=27/s) swap_column_10();
else if (random<=28/s) swap_column_11();
else if (random<=29/s) swap_column_12();
else if (random<=30/s) swap_column_13();
else if (random<=31/s) swap_column_14();
else if (random<=32/s) swap_column_15();
else if (random<=33/s) swap_row_1();
else if (random<=34/s) swap_row_2();
else if (random<=35/s) swap_row_3();
else if (random<=36/s) swap_row_4();
else if (random<=37/s) swap_row_5();
else if (random<=38/s) swap_row_6();
else if (random<=39/s) swap_row_7();
else if (random<=40/s) swap_row_8();
else if (random<=41/s) swap_row_9();
else if (random<=42/s) swap_row_10();
else if (random<=43/s) swap_row_11();
else if (random<=44/s) swap_row_12();
else if (random<=45/s) swap_row_13();
else if (random<=46/s) swap_row_14();
else swap_row_15();
}
}

function mirror_diagonal_1()
{
num=[num[0],num[9],num[18],num[27],num[36],num[45],num[54],num[63],num[72],num[1],num[10],num[19],num[28],num[37],num[46],num[55],num[64],num[73],num[2],num[11],num[20],num[29],num[38],num[47],num[56],num[65],num[74],num[3],num[12],num[21],num[30],num[39],num[48],num[57],num[66],num[75],num[4],num[13],num[22],num[31],num[40],num[49],num[58],num[67],num[76],num[5],num[14],num[23],num[32],num[41],num[50],num[59],num[68],num[77],num[6],num[15],num[24],num[33],num[42],num[51],num[60],num[69],num[78],num[7],num[16],num[25],num[34],num[43],num[52],num[61],num[70],num[79],num[8],num[17],num[26],num[35],num[44],num[53],num[62],num[71],num[80]];
}

function mirror_diagonal_2()
{
mirror_diagonal_1();
rotate_180();
}

function mirror_vertical()
{
num=[num[8],num[7],num[6],num[5],num[4],num[3],num[2],num[1],num[0],num[17],num[16],num[15],num[14],num[13],num[12],num[11],num[10],num[9],num[26],num[25],num[24],num[23],num[22],num[21],num[20],num[19],num[18],num[35],num[34],num[33],num[32],num[31],num[30],num[29],num[28],num[27],num[44],num[43],num[42],num[41],num[40],num[39],num[38],num[37],num[36],num[53],num[52],num[51],num[50],num[49],num[48],num[47],num[46],num[45],num[62],num[61],num[60],num[59],num[58],num[57],num[56],num[55],num[54],num[71],num[70],num[69],num[68],num[67],num[66],num[65],num[64],num[63],num[80],num[79],num[78],num[77],num[76],num[75],num[74],num[73],num[72]];
}

function mirror_horizontal()
{
mirror_vertical();
num.reverse();
}

function rotate_90_left()
{
num=[num[8],num[17],num[26],num[35],num[44],num[53],num[62],num[71],num[80],num[7],num[16],num[25],num[34],num[43],num[52],num[61],num[70],num[79],num[6],num[15],num[24],num[33],num[42],num[51],num[60],num[69],num[78],num[5],num[14],num[23],num[32],num[41],num[50],num[59],num[68],num[77],num[4],num[13],num[22],num[31],num[40],num[49],num[58],num[67],num[76],num[3],num[12],num[21],num[30],num[39],num[48],num[57],num[66],num[75],num[2],num[11],num[20],num[29],num[38],num[47],num[56],num[65],num[74],num[1],num[10],num[19],num[28],num[37],num[46],num[55],num[64],num[73],num[0],num[9],num[18],num[27],num[36],num[45],num[54],num[63],num[72]];
}

function rotate_90_right()
{
rotate_90_left();
num.reverse();
}

function rotate_180()
{
num.reverse();
}

function swap_column_block_1()
{
num=[num[0],num[1],num[2],num[6],num[7],num[8],num[3],num[4],num[5],num[9],num[10],num[11],num[15],num[16],num[17],num[12],num[13],num[14],num[18],num[19],num[20],num[24],num[25],num[26],num[21],num[22],num[23],num[27],num[28],num[29],num[33],num[34],num[35],num[30],num[31],num[32],num[36],num[37],num[38],num[42],num[43],num[44],num[39],num[40],num[41],num[45],num[46],num[47],num[51],num[52],num[53],num[48],num[49],num[50],num[54],num[55],num[56],num[60],num[61],num[62],num[57],num[58],num[59],num[63],num[64],num[65],num[69],num[70],num[71],num[66],num[67],num[68],num[72],num[73],num[74],num[78],num[79],num[80],num[75],num[76],num[77]];
}

function swap_column_block_2()
{
num=[num[3],num[4],num[5],num[0],num[1],num[2],num[6],num[7],num[8],num[12],num[13],num[14],num[9],num[10],num[11],num[15],num[16],num[17],num[21],num[22],num[23],num[18],num[19],num[20],num[24],num[25],num[26],num[30],num[31],num[32],num[27],num[28],num[29],num[33],num[34],num[35],num[39],num[40],num[41],num[36],num[37],num[38],num[42],num[43],num[44],num[48],num[49],num[50],num[45],num[46],num[47],num[51],num[52],num[53],num[57],num[58],num[59],num[54],num[55],num[56],num[60],num[61],num[62],num[66],num[67],num[68],num[63],num[64],num[65],num[69],num[70],num[71],num[75],num[76],num[77],num[72],num[73],num[74],num[78],num[79],num[80]];
}

function swap_column_block_3()
{
num=[num[6],num[7],num[8],num[0],num[1],num[2],num[3],num[4],num[5],num[15],num[16],num[17],num[9],num[10],num[11],num[12],num[13],num[14],num[24],num[25],num[26],num[18],num[19],num[20],num[21],num[22],num[23],num[33],num[34],num[35],num[27],num[28],num[29],num[30],num[31],num[32],num[42],num[43],num[44],num[36],num[37],num[38],num[39],num[40],num[41],num[51],num[52],num[53],num[45],num[46],num[47],num[48],num[49],num[50],num[60],num[61],num[62],num[54],num[55],num[56],num[57],num[58],num[59],num[69],num[70],num[71],num[63],num[64],num[65],num[66],num[67],num[68],num[78],num[79],num[80],num[72],num[73],num[74],num[75],num[76],num[77]];
}

function swap_column_block_4()
{
num=[num[3],num[4],num[5],num[6],num[7],num[8],num[0],num[1],num[2],num[12],num[13],num[14],num[15],num[16],num[17],num[9],num[10],num[11],num[21],num[22],num[23],num[24],num[25],num[26],num[18],num[19],num[20],num[30],num[31],num[32],num[33],num[34],num[35],num[27],num[28],num[29],num[39],num[40],num[41],num[42],num[43],num[44],num[36],num[37],num[38],num[48],num[49],num[50],num[51],num[52],num[53],num[45],num[46],num[47],num[57],num[58],num[59],num[60],num[61],num[62],num[54],num[55],num[56],num[66],num[67],num[68],num[69],num[70],num[71],num[63],num[64],num[65],num[75],num[76],num[77],num[78],num[79],num[80],num[72],num[73],num[74]];
}

function swap_column_block_5()
{
num=[num[6],num[7],num[8],num[3],num[4],num[5],num[0],num[1],num[2],num[15],num[16],num[17],num[12],num[13],num[14],num[9],num[10],num[11],num[24],num[25],num[26],num[21],num[22],num[23],num[18],num[19],num[20],num[33],num[34],num[35],num[30],num[31],num[32],num[27],num[28],num[29],num[42],num[43],num[44],num[39],num[40],num[41],num[36],num[37],num[38],num[51],num[52],num[53],num[48],num[49],num[50],num[45],num[46],num[47],num[60],num[61],num[62],num[57],num[58],num[59],num[54],num[55],num[56],num[69],num[70],num[71],num[66],num[67],num[68],num[63],num[64],num[65],num[78],num[79],num[80],num[75],num[76],num[77],num[72],num[73],num[74]];
}

function swap_row_block_1()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53]];
}

function swap_row_block_2()
{
num=[num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_block_3()
{
num=[num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53]];
}

function swap_row_block_4()
{
num=[num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26]];
}

function swap_row_block_5()
{
num=[num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26]];
}

function swap_column_1()
{
num=[num[0],num[2],num[1],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[11],num[10],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[20],num[19],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[29],num[28],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[38],num[37],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[47],num[46],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[56],num[55],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[65],num[64],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[74],num[73],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_column_2()
{
num=[num[1],num[0],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[10],num[9],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[19],num[18],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[28],num[27],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[37],num[36],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[46],num[45],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[55],num[54],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[64],num[63],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[73],num[72],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_column_3()
{
num=[num[2],num[0],num[1],num[3],num[4],num[5],num[6],num[7],num[8],num[11],num[9],num[10],num[12],num[13],num[14],num[15],num[16],num[17],num[20],num[18],num[19],num[21],num[22],num[23],num[24],num[25],num[26],num[29],num[27],num[28],num[30],num[31],num[32],num[33],num[34],num[35],num[38],num[36],num[37],num[39],num[40],num[41],num[42],num[43],num[44],num[47],num[45],num[46],num[48],num[49],num[50],num[51],num[52],num[53],num[56],num[54],num[55],num[57],num[58],num[59],num[60],num[61],num[62],num[65],num[63],num[64],num[66],num[67],num[68],num[69],num[70],num[71],num[74],num[72],num[73],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_column_4()
{
num=[num[1],num[2],num[0],num[3],num[4],num[5],num[6],num[7],num[8],num[10],num[11],num[9],num[12],num[13],num[14],num[15],num[16],num[17],num[19],num[20],num[18],num[21],num[22],num[23],num[24],num[25],num[26],num[28],num[29],num[27],num[30],num[31],num[32],num[33],num[34],num[35],num[37],num[38],num[36],num[39],num[40],num[41],num[42],num[43],num[44],num[46],num[47],num[45],num[48],num[49],num[50],num[51],num[52],num[53],num[55],num[56],num[54],num[57],num[58],num[59],num[60],num[61],num[62],num[64],num[65],num[63],num[66],num[67],num[68],num[69],num[70],num[71],num[73],num[74],num[72],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_column_5()
{
num=[num[2],num[1],num[0],num[3],num[4],num[5],num[6],num[7],num[8],num[11],num[10],num[9],num[12],num[13],num[14],num[15],num[16],num[17],num[20],num[19],num[18],num[21],num[22],num[23],num[24],num[25],num[26],num[29],num[28],num[27],num[30],num[31],num[32],num[33],num[34],num[35],num[38],num[37],num[36],num[39],num[40],num[41],num[42],num[43],num[44],num[47],num[46],num[45],num[48],num[49],num[50],num[51],num[52],num[53],num[56],num[55],num[54],num[57],num[58],num[59],num[60],num[61],num[62],num[65],num[64],num[63],num[66],num[67],num[68],num[69],num[70],num[71],num[74],num[73],num[72],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_column_6()
{
num=[num[0],num[1],num[2],num[3],num[5],num[4],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[14],num[13],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[23],num[22],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[32],num[31],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[41],num[40],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[50],num[49],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[59],num[58],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[68],num[67],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[77],num[76],num[78],num[79],num[80]];
}

function swap_column_7()
{
num=[num[0],num[1],num[2],num[4],num[3],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[13],num[12],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[22],num[21],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[31],num[30],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[40],num[39],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[49],num[48],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[58],num[57],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[67],num[66],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[76],num[75],num[77],num[78],num[79],num[80]];
}

function swap_column_8()
{
num=[num[0],num[1],num[2],num[5],num[3],num[4],num[6],num[7],num[8],num[9],num[10],num[11],num[14],num[12],num[13],num[15],num[16],num[17],num[18],num[19],num[20],num[23],num[21],num[22],num[24],num[25],num[26],num[27],num[28],num[29],num[32],num[30],num[31],num[33],num[34],num[35],num[36],num[37],num[38],num[41],num[39],num[40],num[42],num[43],num[44],num[45],num[46],num[47],num[50],num[48],num[49],num[51],num[52],num[53],num[54],num[55],num[56],num[59],num[57],num[58],num[60],num[61],num[62],num[63],num[64],num[65],num[68],num[66],num[67],num[69],num[70],num[71],num[72],num[73],num[74],num[77],num[75],num[76],num[78],num[79],num[80]];
}

function swap_column_9()
{
num=[num[0],num[1],num[2],num[4],num[5],num[3],num[6],num[7],num[8],num[9],num[10],num[11],num[13],num[14],num[12],num[15],num[16],num[17],num[18],num[19],num[20],num[22],num[23],num[21],num[24],num[25],num[26],num[27],num[28],num[29],num[31],num[32],num[30],num[33],num[34],num[35],num[36],num[37],num[38],num[40],num[41],num[39],num[42],num[43],num[44],num[45],num[46],num[47],num[49],num[50],num[48],num[51],num[52],num[53],num[54],num[55],num[56],num[58],num[59],num[57],num[60],num[61],num[62],num[63],num[64],num[65],num[67],num[68],num[66],num[69],num[70],num[71],num[72],num[73],num[74],num[76],num[77],num[75],num[78],num[79],num[80]];
}

function swap_column_10()
{
num=[num[0],num[1],num[2],num[5],num[4],num[3],num[6],num[7],num[8],num[9],num[10],num[11],num[14],num[13],num[12],num[15],num[16],num[17],num[18],num[19],num[20],num[23],num[22],num[21],num[24],num[25],num[26],num[27],num[28],num[29],num[32],num[31],num[30],num[33],num[34],num[35],num[36],num[37],num[38],num[41],num[40],num[39],num[42],num[43],num[44],num[45],num[46],num[47],num[50],num[49],num[48],num[51],num[52],num[53],num[54],num[55],num[56],num[59],num[58],num[57],num[60],num[61],num[62],num[63],num[64],num[65],num[68],num[67],num[66],num[69],num[70],num[71],num[72],num[73],num[74],num[77],num[76],num[75],num[78],num[79],num[80]];
}

function swap_column_11()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[8],num[7],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[17],num[16],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[26],num[25],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[35],num[34],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[44],num[43],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[53],num[52],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[62],num[61],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[71],num[70],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[80],num[79]];
}

function swap_column_12()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[7],num[6],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[16],num[15],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[25],num[24],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[34],num[33],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[43],num[42],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[52],num[51],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[61],num[60],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[70],num[69],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[79],num[78],num[80]];
}

function swap_column_13()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[8],num[6],num[7],num[9],num[10],num[11],num[12],num[13],num[14],num[17],num[15],num[16],num[18],num[19],num[20],num[21],num[22],num[23],num[26],num[24],num[25],num[27],num[28],num[29],num[30],num[31],num[32],num[35],num[33],num[34],num[36],num[37],num[38],num[39],num[40],num[41],num[44],num[42],num[43],num[45],num[46],num[47],num[48],num[49],num[50],num[53],num[51],num[52],num[54],num[55],num[56],num[57],num[58],num[59],num[62],num[60],num[61],num[63],num[64],num[65],num[66],num[67],num[68],num[71],num[69],num[70],num[72],num[73],num[74],num[75],num[76],num[77],num[80],num[78],num[79]];
}

function swap_column_14()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[7],num[8],num[6],num[9],num[10],num[11],num[12],num[13],num[14],num[16],num[17],num[15],num[18],num[19],num[20],num[21],num[22],num[23],num[25],num[26],num[24],num[27],num[28],num[29],num[30],num[31],num[32],num[34],num[35],num[33],num[36],num[37],num[38],num[39],num[40],num[41],num[43],num[44],num[42],num[45],num[46],num[47],num[48],num[49],num[50],num[52],num[53],num[51],num[54],num[55],num[56],num[57],num[58],num[59],num[61],num[62],num[60],num[63],num[64],num[65],num[66],num[67],num[68],num[70],num[71],num[69],num[72],num[73],num[74],num[75],num[76],num[77],num[79],num[80],num[78]];
}

function swap_column_15()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[8],num[7],num[6],num[9],num[10],num[11],num[12],num[13],num[14],num[17],num[16],num[15],num[18],num[19],num[20],num[21],num[22],num[23],num[26],num[25],num[24],num[27],num[28],num[29],num[30],num[31],num[32],num[35],num[34],num[33],num[36],num[37],num[38],num[39],num[40],num[41],num[44],num[43],num[42],num[45],num[46],num[47],num[48],num[49],num[50],num[53],num[52],num[51],num[54],num[55],num[56],num[57],num[58],num[59],num[62],num[61],num[60],num[63],num[64],num[65],num[66],num[67],num[68],num[71],num[70],num[69],num[72],num[73],num[74],num[75],num[76],num[77],num[80],num[79],num[78]];
}

function swap_row_1()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_2()
{
num=[num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_3()
{
num=[num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_4()
{
num=[num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_5()
{
num=[num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_6()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_7()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_8()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_9()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_10()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_11()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71]];
}

function swap_row_12()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]];
}

function swap_row_13()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71]];
}

function swap_row_14()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62]];
}

function swap_row_15()
{
num=[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17],num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26],num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35],num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44],num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53],num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80],num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71],num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62]];
}

function show()
{
menu="<a href=\"javascript:setup();\" title=\"Set up new Sudoku\">New<\/a> | <a href=\"javascript:setlevel();\" title=\"Set difficulty level\">Level: "+msglevel[0]+"<\/a> | <a href=\"javascript:setcolor();\" title=\"Set input color\">Color: "+msgcolor[0]+"<\/a> | <a href=\"javascript:setverify();\" title=\"Toggle verify on/off\">Verify: "+ver[0]+"<\/a>";
display="<p id=\"title\">Sudoku<\/p><form><table><tr><td id=\"topleft\">"+td[0]+"<\/td><td id=\"top\">"+td[1]+"<\/td><td id=\"topright\">"+td[2]+"<\/td><td id=\"top\">"+td[3]+"<\/td id=\"top\"><td id=\"top\">"+td[4]+"<\/td><td id=\"topright\">"+td[5]+"<\/td><td id=\"top\">"+td[6]+"<\/td><td id=\"top\">"+td[7]+"<\/td><td id=\"topright\">"+td[8]+"<\/td><\/tr><tr><td id=\"left\">"+td[9]+"<\/td><td>"+td[10]+"<\/td><td id=\"right\">"+td[11]+"<\/td><td>"+td[12]+"<\/td><td>"+td[13]+"<\/td><td id=\"right\">"+td[14]+"<\/td><td>"+td[15]+"<\/td><td>"+td[16]+"<\/td><td id=\"right\">"+td[17]+"<\/td><\/tr><tr><td id=\"bottomleft\">"+td[18]+"<\/td><td id=\"bottom\">"+td[19]+"<\/td><td id=\"bottomright\">"+td[20]+"<\/td><td id=\"bottom\">"+td[21]+"<\/td><td id=\"bottom\">"+td[22]+"<\/td><td id=\"bottomright\">"+td[23]+"<\/td><td id=\"bottom\">"+td[24]+"<\/td><td id=\"bottom\">"+td[25]+"<\/td><td id=\"bottomright\">"+td[26]+"<\/td><\/tr><tr><td id=\"left\">"+td[27]+"<\/td><td>"+td[28]+"<\/td><td id=\"right\">"+td[29]+"<\/td><td>"+td[30]+"<\/td><td>"+td[31]+"<\/td><td id=\"right\">"+td[32]+"<\/td><td>"+td[33]+"<\/td><td>"+td[34]+"<\/td><td id=\"right\">"+td[35]+"<\/td><\/tr><tr><td id=\"left\">"+td[36]+"<\/td><td>"+td[37]+"<\/td><td id=\"right\">"+td[38]+"<\/td><td>"+td[39]+"<\/td><td>"+td[40]+"<\/td><td id=\"right\">"+td[41]+"<\/td><td>"+td[42]+"<\/td><td>"+td[43]+"<\/td><td id=\"right\">"+td[44]+"<\/td><\/tr><tr><td id=\"bottomleft\">"+td[45]+"<\/td><td id=\"bottom\">"+td[46]+"<\/td><td id=\"bottomright\">"+td[47]+"<\/td><td id=\"bottom\">"+td[48]+"<\/td><td id=\"bottom\">"+td[49]+"<\/td><td id=\"bottomright\">"+td[50]+"<\/td><td id=\"bottom\">"+td[51]+"<\/td><td id=\"bottom\">"+td[52]+"<\/td><td id=\"bottomright\">"+td[53]+"<\/td><\/tr><tr><td id=\"left\">"+td[54]+"<\/td><td>"+td[55]+"<\/td><td id=\"right\">"+td[56]+"<\/td><td>"+td[57]+"<\/td><td>"+td[58]+"<\/td><td id=\"right\">"+td[59]+"<\/td><td>"+td[60]+"<\/td><td>"+td[61]+"<\/td><td id=\"right\">"+td[62]+"<\/td><\/tr><tr><td id=\"left\">"+td[63]+"<\/td><td>"+td[64]+"<\/td><td id=\"right\">"+td[65]+"<\/td><td>"+td[66]+"<\/td><td>"+td[67]+"<\/td><td id=\"right\">"+td[68]+"<\/td><td>"+td[69]+"<\/td><td>"+td[70]+"<\/td><td id=\"right\">"+td[71]+"<\/td><\/tr><tr><td id=\"bottomleft\">"+td[72]+"<\/td><td id=\"bottom\">"+td[73]+"<\/td><td id=\"bottomright\">"+td[74]+"<\/td><td id=\"bottom\">"+td[75]+"<\/td><td id=\"bottom\">"+td[76]+"<\/td><td id=\"bottomright\">"+td[77]+"<\/td><td id=\"bottom\">"+td[78]+"<\/td><td id=\"bottom\">"+td[79]+"<\/td><td id=\"bottomright\">"+td[80]+"<\/td><\/tr><\/table><\/form><p id=\"copyright\">&copy; 2009 twb<\/p><p id=\"msg\">"+message+"<\/p><br><br><br><p id=\"menu\">"+menu+"<\/p>";
document.getElementById("screen").innerHTML=display;
}

function setlevel()
{
level.unshift(level[level.length-1]);
msglevel.unshift(msglevel[msglevel.length-1]);
level.pop();
msglevel.pop();
setup();
}

function setcolor(b)
{
color.unshift(color[color.length-1]);
msgcolor.unshift(msgcolor[msgcolor.length-1]);
color.pop();
msgcolor.pop();
for(i=0;i<n;i++)
{
if(num[i]=="")
td[i]="<input type=\"text\" autocomplete=\"off\" id=\"form"+color[0]+"\" size=\"1\" maxLength=\"1\" value=\"\" onkeyup=\"javascript:enter("+i+");\">";
}
message="Color: "+msgcolor[0];
show();
}

function setverify()
{
ver.reverse();
if (ver[0]=="on") verify(0);
show();
}

function setarrays()
{
rows=[
[num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8]],
[num[9],num[10],num[11],num[12],num[13],num[14],num[15],num[16],num[17]],
[num[18],num[19],num[20],num[21],num[22],num[23],num[24],num[25],num[26]],
[num[27],num[28],num[29],num[30],num[31],num[32],num[33],num[34],num[35]],
[num[36],num[37],num[38],num[39],num[40],num[41],num[42],num[43],num[44]],
[num[45],num[46],num[47],num[48],num[49],num[50],num[51],num[52],num[53]],
[num[54],num[55],num[56],num[57],num[58],num[59],num[60],num[61],num[62]],
[num[63],num[64],num[65],num[66],num[67],num[68],num[69],num[70],num[71]],
[num[72],num[73],num[74],num[75],num[76],num[77],num[78],num[79],num[80]]
];
cols=[
[num[0],num[9],num[18],num[27],num[36],num[45],num[54],num[63],num[72]],
[num[1],num[10],num[19],num[28],num[37],num[46],num[55],num[64],num[73]],
[num[2],num[11],num[20],num[29],num[38],num[47],num[56],num[65],num[74]],
[num[3],num[12],num[21],num[30],num[39],num[48],num[57],num[66],num[75]],
[num[4],num[13],num[22],num[31],num[40],num[49],num[58],num[67],num[76]],
[num[5],num[14],num[23],num[32],num[41],num[50],num[59],num[68],num[77]],
[num[6],num[15],num[24],num[33],num[42],num[51],num[60],num[69],num[78]],
[num[7],num[16],num[25],num[34],num[43],num[52],num[61],num[70],num[79]],
[num[8],num[17],num[26],num[35],num[44],num[53],num[62],num[71],num[80]]
];
blks=[
[num[0],num[1],num[2],num[9],num[10],num[11],num[18],num[19],num[20]],
[num[3],num[4],num[5],num[12],num[13],num[14],num[21],num[22],num[23]],
[num[6],num[7],num[8],num[15],num[16],num[17],num[24],num[25],num[26]],
[num[27],num[28],num[29],num[36],num[37],num[38],num[45],num[46],num[47]],
[num[30],num[31],num[32],num[39],num[40],num[41],num[48],num[49],num[50]],
[num[33],num[34],num[35],num[42],num[43],num[44],num[51],num[52],num[53]],
[num[54],num[55],num[56],num[63],num[64],num[65],num[72],num[73],num[74]],
[num[57],num[58],num[59],num[66],num[67],num[68],num[75],num[76],num[77]],
[num[60],num[61],num[62],num[69],num[70],num[71],num[78],num[79],num[80]]
];
for (i=0;i<9;i++) {rows[i]=rows[i].sort(); rows[i]=rows[i].join("");}
for (i=0;i<9;i++) {cols[i]=cols[i].sort(); cols[i]=cols[i].join("");}
for (i=0;i<9;i++) {blks[i]=blks[i].sort(); blks[i]=blks[i].join("");}
}

function reject()
{
setarrays();
for (i=0;i<9;i++) if (rows[i].length>maxnum) setup();
for (i=0;i<9;i++) if (cols[i].length>maxnum) setup();
for (i=0;i<9;i++) if (blks[i].length>maxnum) setup();
for (i=0;i<9;i++) if (cols[i].length<minnum) setup();
for (i=0;i<9;i++) if (rows[i].length<minnum) setup();
for (i=0;i<9;i++) if (blks[i].length<minnum) setup();
message="Level: "+msglevel[0];
show();
}

function verify(b)
{
setarrays();
test=num.join();
joins=['11','22','33','44','55','66','77','88','99'];
if (ver[0]=="on")
{
for (i=0;i<9;i++) if (rows[0].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[0].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[0].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[1].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[1].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[1].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[2].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[2].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[2].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[3].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[3].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[3].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[4].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[4].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[4].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[5].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[5].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[5].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[6].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[6].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[6].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[7].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[7].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[7].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (rows[8].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (cols[8].indexOf(joins[i])!=-1) invalid(b);
for (i=0;i<9;i++) if (blks[8].indexOf(joins[i])!=-1) invalid(b);
if (test.indexOf(",,")==-1&&message!="Invalid!") message="Congratulations: Sudoku solved!";
else if (message!="Invalid!") message="Ok.";
}
else message="Ok.";
}

function invalid(b)
{
message="Invalid!";
document.forms[0].elements[b].select();
}

function about()
{
message="Sudoku 1.6 by www.thomasweibel.ch";
document.getElementById("msg").firstChild.data=message;
}


}
/*
     FILE ARCHIVED ON 21:58:57 Jul 06, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:55:50 Jul 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 172.483
  exclusion.robots: 0.104
  exclusion.robots.policy: 0.091
  RedisCDXSource: 37.993
  esindex: 0.009
  LoadShardBlock: 118.301 (3)
  PetaboxLoader3.datanode: 79.053 (4)
  load_resource: 1243.12
  PetaboxLoader3.resolve: 1195.339
*/
