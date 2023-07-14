var clipboard="empty";
function askme(){
     if(confirm("OK:Copy text to clipboard \n CANCEL:View clipboard")){
          if(confirm("OK:Replace old text \n CANCEL:Add to old text")){
               clipboard=document.getSelection();
               alert("Task complete. Clipboard says:"+clipboard);
          }
          else{
               clipboard+=document.getSelection();
               alert("Task complete. Clipboard says:"+clipboard);
          }
     }
     else{
          if(confirm("OK:Save text \n CANCEL:View text")){
          window.location="/more/saveclipboard.php?txt="+clipboard;
          }
          else{
          alert(clipboard);
          }
     }
}