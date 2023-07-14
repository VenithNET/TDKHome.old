function HighScores(identifier)
{
    var cachedScore;
    
    this.identifier = identifier;
    
    /* Does not actually follow the UUID RFC spec. */
    function generateUUID()
    {
        var time = new Date().getTime().toString(16);
        var digits = "";
        
        for(var i=0; i<5; i++)
        {
            digits += Math.floor(Math.random() * 16).toString(16);
        }
        
        return digits+"-"+time;
    }
    
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
    
    this.getScores = function()
    {
        var cookie = getCookie("user");
        var request = new XMLHttpRequest();
        var array;

        var url = "/highscores?kind="+escape(this.identifier);

        if(navigator.platform == "Nintendo DSi")
        {
            url += "&platform=" + encodeURIComponent(navigator.platform);
        }
        
        request.open("GET.html", url, false);
        request.send(null);
        
        array = eval("("+request.responseText+")");
        
        for(var i=0; i<array.length; i++)
        {
            if(cookie && array[i].uuid == cookie.uuid) cachedScore = array[i];
                
            array[i] = array[i].data;
        }
        
        return array;
    };
    
    this.isScoreHigher = function(score)
    {
        var cookie = getCookie("user");
        
        if(cookie && !this.cachedScore)
        {
            var request = new XMLHttpRequest();
            var array;

            request.open("GET.html", "/highscores?kind="+escape(this.identifier)+"&uuid="+escape(cookie.uuid), false);
            request.send(null);

            array = eval("("+request.responseText+")");
            
            if(array.length > 0) this.cachedScore = array[0];
        }
        
        if(!this.cachedScore) return true;
        
        return (score > this.cachedScore.score);
    };
    
    this.submitScore = function(score)
    {
        var cookie = getCookie("user");
        var wrapper = {score: score.score, uuid: (cookie ? cookie.uuid : generateUUID()), platform: navigator.platform, data: score};
        var request = new XMLHttpRequest();
        var params = "kind="+escape(this.identifier)+"&json="+escape(JSON.stringify(wrapper));
        
        if(cachedScore && cachedScore.score >= score) return false;
        
        request.open("POST.html", "/highscores", false);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Content-length", params.length);
        request.setRequestHeader("Connection", "close");        
        request.send(params);

        if(!cookie) setCookie("user", {uuid: wrapper.uuid, name: score.name});
        else setCookie("user", cookie);

        //FIX ME: check status code
    }
    
    this.getCachedName = function()
    {
        var cookie = getCookie("user");
        
        if(cookie) return cookie.name;
        
        return null;
    }
}

function HighScore(name, score)
{
    function cleanScore(value)
    {
        var result = "";
        var c;
        
        for(var i=0; i<value.length; i++)
        {
            c = value.charAt(i);
            
            if(c == '+' || c == '-' || c == '.' || 
               (c.charCodeAt(0) >= '0'.charCodeAt(0) && 
                c.charCodeAt(0) <= '9'.charCodeAt(0)))
            {
                result += c;
            }
        }
        
        return result;
    }
    
    if(!(score instanceof Number)) score = cleanScore(String(score));

    this.name = name;
    this.score = Number(score);
}