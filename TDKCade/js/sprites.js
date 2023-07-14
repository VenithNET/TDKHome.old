function Sprite(file, canvas)
{
    var that = this;

    var CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%2b/index.html";
    var CODE_LOOKUP = [];

    for(var i=0; i<CODES.length; i++) { CODE_LOOKUP[CODES.charCodeAt(i)] = i };

    var palette;
    var data;
    var width;
    var height;

    var imageData;
    var extents;

    var ctx = canvas.getContext("2d");

    function load()
    {
        var request = new XMLHttpRequest();
        var text;

        request.open("GET.html", file, false);
        request.send(null);

        text = request.responseText;

        parse(text);
    }

    function parse(text)
    {
        var index = 0;
        var code;

        var header = CODE_LOOKUP[text.charCodeAt(index++)];
        var size;
        var temp;

        if(header != 1) throw new Error("Unknown file type "+header);

        width = get18BitValue(text.charCodeAt(index++), text.charCodeAt(index++), text.charCodeAt(index++)) + 1;
        height = get18BitValue(text.charCodeAt(index++), text.charCodeAt(index++), text.charCodeAt(index++)) + 1;
        size = CODE_LOOKUP[text.charCodeAt(index++)] + 1;

        that.width = width;
        that.height = height;

        palette = new Array(size);

        for(var i=0; i<size; i++)
        {
            temp = get24BitValue(text.charCodeAt(index++), text.charCodeAt(index++), text.charCodeAt(index++), text.charCodeAt(index++));

            palette[i] = [
                (temp & 0xFF0000) >> 16,
                (temp & 0xFF00) >> 8,
                (temp & 0xFF),
                0xFF
            ];
        }

        data = Array(width*height);

        for(var i=0; i<data.length; i++)
        {
            data[i] = CODE_LOOKUP[text.charCodeAt(index++)];
        }

        flattenData();

        extents = new Array(get18BitValue(text.charCodeAt(index++), text.charCodeAt(index++), text.charCodeAt(index++)) * 2);

        for(var i=0; i<extents.length; i++) extents[i] = get18BitValue(text.charCodeAt(index++), text.charCodeAt(index++), text.charCodeAt(index++));
    }

    function get18BitValue(code1, code2, code3)
    {
        return ((CODE_LOOKUP[code1] << 12) | (CODE_LOOKUP[code2] << 6) | CODE_LOOKUP[code3]);
    }

    function get24BitValue(code1, code2, code3, code4)
    {
        return ((CODE_LOOKUP[code1] << 18) | (CODE_LOOKUP[code2] << 12) | (CODE_LOOKUP[code3] << 6) | CODE_LOOKUP[code4]);
    }

    load();

    function flattenData()
    {
        //var newData = new Array(width*height*4);

        imageData = new ImageData(width, height);
        var newData = imageData.data;

        for(var i=0; i<data.length; i++)
        {
            var x = i * 4;
            var color = palette[data[i]];

            newData[x++] = color[0];
            newData[x++] = color[1];
            newData[x++] = color[2];
            newData[x] = color[3];
        }

        data = newData;
    }

    this.render = function(x, y)
    {
        var tempdata = ctx.getImageData(x, y, width, height);
        var sdata = tempdata.data;
        var ddata = imageData.data;
        var length = tempdata.data.length;
        var temp;


        for(var i=0, j=0; i<length;)
        {
            temp = extents[j];
            
            for(var k=0; k<temp; k++)
            {
                ddata[i] = sdata[i++];
                ddata[i] = sdata[i++];
                ddata[i] = sdata[i++];
                i++;
            }

            j++;

            i += extents[j++] * 4;
        }

        ctx.putImageData(imageData, x, y);
    };
}