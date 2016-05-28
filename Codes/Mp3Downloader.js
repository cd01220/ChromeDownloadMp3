function HandleMouseOver(event)
{
    target = event.target;
    target.focus();
    var range = document.createRange();
    range.selectNode(target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
}

function HandleSentencesChanges(sentences)
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
    
    nodes = sentences.getElementsByClassName("sen_en");
    for (i = 0, len = nodes.length; i < len; i++)
    {
        nodes[i].innerHTML = "<span class=\"p1-8\">" + nodes[i].outerText + "</span>"; 
        nodes[i].onmouseover = HandleMouseOver;
    }
}

var sentences = document.getElementById("sentenceSeg");
HandleSentencesChanges(sentences);
sentences.addEventListener("DOMSubtreeModified", 
                           function(){HandleSentencesChanges(sentences);}, 
                           false);


