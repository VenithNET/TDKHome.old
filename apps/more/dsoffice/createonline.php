<html>
<head>
<title>Create document - DSOffice</title>
<meta name="viewport" content="width=240">
<style>body { margin:0px; margin-top:5px; }</style>
<script>
function checkcontent(form){
if (form.elements[0].value == "" || form.elements[0].value == " "){
alert("please specify a file name");
}
else if (form.elements[1].value == "" || form.elements[0].value == " "){
alert("Please type something in the body field.");
}
else{
form.submit();
}
}
</script>
</head>
<body>
<form action="saveonline.php" method="post">
<center>
<font size=2>Name: </font><input type=text id=title name=title size=25><br>
<TEXTAREA NAME="save" COLS=31 ROWS=7></textarea><br>
<input type=button value=create onclick="checkcontent(this.form);">
</center>
</form>
</body>
</html>