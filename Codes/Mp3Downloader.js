function EditSentences()
{    
    var sentences = document.getElementById("sentenceSeg");
    for (i = 0; i < sentences.childNodes.length; i++)
    {
        if (sentences.childNodes[i].getAttribute("class") != "se_li")
            continue;
        var glfl = sentences.childNodes[i].childNodes[2].childNodes[0]
        if (glfl.childNodes.length < 2)
        {
            var txt = glfl.childNodes[0].getAttribute("onmousedown");   
            var download = document.createElement("a"); 
            download.href=txt.match("https.*mp3");
            download.innerHTML = "download";
            glfl.appendChild(download);
        }
    }
}

function AddButton()
{
    var table = document.getElementById("sen_bar").childNodes[0];
    table.onclick = function(){EditSentences();};
}

AddButton();

