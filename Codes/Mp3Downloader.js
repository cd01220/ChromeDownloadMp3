function EditSentences(sentences)
{    
    nodes = sentences.getElementsByClassName("gl_fl");
    for (i = 0, len = nodes.length; i < len; i++)
    {
        if (nodes[i].childNodes.length < 2)
        {
            var txt = nodes[i].firstChild.getAttribute("onmousedown");
            var download = document.createElement("a"); 
            download.href=txt.match("https.*mp3");
            download.innerHTML = "download";
            nodes[i].appendChild(download);
        }
    }
}

var sentences = document.getElementById("sentenceSeg");
sentences.onmouseover = function(){EditSentences(sentences);};
