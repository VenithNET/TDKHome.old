function ShoutBox()
{
    var listeners = {"avatar": []};
    var messages = [];
    var cached = {};
    var timeDelta = 0;
    var bucket = "general";
    
    this.MAX_CHARS = 100;
    
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
    
    this.getCachedName = function()
    {
        var cookie = getCookie("user");
        
        if(cookie) return cookie.name;
        
        return null;
    }
    
    this.login = function(name)
    {
        var cookie = getCookie("user");
        
        this.name = name;
        
        if(!cookie)
        {
            setCookie("user", {uuid: generateUUID(), name: name});
        }
        else if(name != cookie.name)
        {
            cookie.name = name;
            setCookie("user", cookie);
        }
    }
    
    this.update = function()
    {
        var request = new XMLHttpRequest();
        var reply;
        var array;
        
        request.open("GET.html", "/shoutbox?bucket="+escape(bucket), false);
        request.send(null);

        if(request.status != 200) return;
        
        //reply = eval("("+request.responseText+")");
        reply = JSON.parse(request.responseText);
        array = reply.buckets[bucket];

        timeDelta = reply.time - new Date().getTime();
      
        for(var i=0; i<array.length; i++)
        {
            if(!cached[array[i].messageid]) 
            {
                array[i].timestamp -= timeDelta;
                messages.push(array[i]);
                cached[array[i].messageid] = true;
            }
        }

        array = reply.commands;

        for(var i=0; i<array.length; i++)
        {
            if(array[i].type == "redirect")
            {
                bucket = array[i].bucket;
            }
            else if(array[i].type == "avatar")
            {
                var cookie = getCookie("user");

                cookie.avatar = array[i].avatar;
                setCookie("user", cookie);

                this.dispatchEvent({type: "avatar", avatar: cookie.avatar});
            }
        }
    };
    
    this.getMessageCount = function()
    {
        return messages.length;
    };
    
    this.getMessage = function(index)
    {
        return messages[index];
    };
    
    this.shout = function(text, avatar)
    {
        var message = {text: text, from: this.name};

        if(avatar) message.avatar = avatar;
        
        var request = new XMLHttpRequest();
        var params = "bucket="+encodeURIComponent(bucket)+"&json="+encodeURIComponent(JSON.stringify(message));
        var reply;
        var array;
        
        if(text.length > this.MAX_CHARS)
        {
            alert("You are "+(text.length - this.MAX_CHARS)+" characters over the limit.");
            return false;
        }
        
        request.open("POST.html", "/shoutbox", false);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        request.setRequestHeader("Content-Length", params.length);
        request.setRequestHeader("Connection", "close");        
        request.send(params);

        if(request.status != 200) return false;

        //reply = eval("("+request.responseText+")");
        reply = JSON.parse(request.responseText);
        array = reply.buckets[bucket];

        timeDelta = reply.time - new Date().getTime();

        for(var i=0; i<array.length; i++)
        {
            if(!cached[array[i].messageid]) 
            {
                array[i].timestamp -= timeDelta;
                messages.push(array[i]);
                cached[array[i].messageid] = true;
            }
        }

        array = reply.commands;

        for(var i=0; array && i<array.length; i++)
        {
            if(array[i].type == "redirect")
            {
                bucket = array[i].bucket;
            }
            else if(array[i].type == "avatar")
            {
                var cookie = getCookie("user");

                cookie.avatar = array[i].avatar;
                setCookie("user", cookie);

                this.dispatchEvent({type: "avatar", avatar: cookie.avatar});
            }
        }
        
        return true;
    };

    this.getRecentUsers = function()
    {
        var index = {};
        var users = [];

        for(var i=messages.length-1, j=0; i>=0 && j<100; i--, j++)
        {
            if(!index[messages[i].uuid])
            {
                users.push(messages[i]);
                index[messages[i].uuid] = true;
            }
        }

        return users;
    };

    this.reportUser = function(uuid, ip)
    {
        var message = {uuid: uuid, ip: ip};

        var request = new XMLHttpRequest();
        var params = "&json="+encodeURIComponent(JSON.stringify(message));

        request.open("POST.html", "/reportuser", false);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        request.setRequestHeader("Content-Length", params.length);
        request.setRequestHeader("Connection", "close");
        request.send(params);

        if(request.status != 200) return false;

        return true;
    }

    this.addEventListener = function(type, listener, useCapture)
    {
        if(!listeners[type]) listeners[type] = [];

        listeners[type].push(listener);
    };

    this.dispatchEvent = function(event)
    {
        for(var i=0; i<listeners[event.type].length; i++)
        {
            listeners[event.type][i](event);
        }
    };
}