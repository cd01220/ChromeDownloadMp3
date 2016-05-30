function HandleMouseOver(event)
{
    var target = event.target;
    if (target.childNodes.length != 0)
    {
        target = target.firstChild;
    }
    var range = document.createRange();
    range.selectNode(target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
}

function HandleMouseOut(event)
{
    window.getSelection().removeAllRanges();
}

var isInEventProcess = false;
var eventCounter     = 0;
function HandleSentencesChanges(sentences)
{       
    if (isInEventProcess)
        return;
    else
        isInEventProcess = true;
    
    /* display eventCounter to provide convenience for debug */
    eventCounter = eventCounter + 1;
    var senBar = document.getElementById("sen_bar");
    senBar.firstChild.innerHTML = "<h2>Sample, " + eventCounter.toString() + "</h2>";
    
    var nodes = sentences.getElementsByClassName("gl_fl");
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
        if (nodes[i].childNodes.length != 1)
        {
            nodes[i].innerHTML = "<span class=\"p1-8\">" + nodes[i].outerText + "</span>"; 
            nodes[i].onmouseover = HandleMouseOver;
            nodes[i].onmouseout  = HandleMouseOut;
        }
    }
    
    isInEventProcess = false;
}

var sentences = document.getElementById("sentenceSeg");
HandleSentencesChanges(sentences);
sentences.addEventListener("DOMNodeInserted", 
                           function(){HandleSentencesChanges(sentences);}, 
                           false);


