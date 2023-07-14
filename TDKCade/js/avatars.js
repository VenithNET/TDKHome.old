function Avatars()
{
    var info;
    var request = new XMLHttpRequest();
    
    request.open("GET.html", "/avatars/list.json", true);
    request.onreadystatechange = function() {
        if(request.readyState != 4 || request.status != 200) return;

        info = eval("("+request.responseText+")");
    };
    request.send(null);
    
    function setCookie(name, value) 
    {
        var date = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 365));
        
        document.cookie = name+"="+escape(JSON.stringify(value))+"; expires="+date.toGMTString()+"; path=/";
    }

    function getCookie(name) 
    {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        
        for(var i=0; i<ca.length; i++) 
        {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return eval("("+unescape(c.substring(nameEQ.length, c.length))+")");
        }
        
        return null;
    }
    
    this.getAvatar = function()
    {
        var cookie = getCookie("user");
        
        if(cookie && cookie.avatar) return cookie.avatar;
        
        return info["default"];
    };
    
    this.getAvatarURL = function(avatar)
    {
        return "/avatars/"+avatar+".png";
    };
    
    this.setAvatar = function(avatar)
    {
        var cookie = getCookie("user");
        
        if(cookie)
        {
            cookie.avatar = avatar;
            setCookie("user", cookie);
        }
    };
    
    this.getAvatarList = function()
    {
        return info.available;
    };
    
    this.getDefaultAvatar = function()
    {
        return info["default"];
    };
}