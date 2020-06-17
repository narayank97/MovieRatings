function CreateCORSRequest(method,url){
    let xhr = new XMLHttpRequest();
    xhr.open(method,url,true);
    return xhr;
}

function search(){
    let myTitle = document.getElementById("title").value;
    let url = "http://www.omdbapi.com/?t="+myTitle+"&apikey=1e330b9b"; // add api key here
    let xhr = CreateCORSRequest('GET',url);
    
    if(!xhr){
        alert("CORS not supported");
        return;
    }

    xhr.onload=function(){
        let responseString = xhr.responseText;
        let object = JSON.parse(responseString);
        let JSONstring = JSON.stringify(object,undefined,3);
        document.getElementById("pic").src = object.Poster;
        console.log(JSONstring);
        console.log(object.Metascore);
        let myImdb = object.Ratings[0].Value;
        let rt = object.Ratings[1].Value;
        let meta = object.Ratings[2].Value;

        console.log("IMDB : "+object.Ratings[0].Value);
        console.log("Rotten Tomatoes : "+object.Ratings[1].Value);
        console.log("Metacritic : "+object.Ratings[2].Value);
        
        document.getElementById("imdb").innerText = myImdb;
        document.getElementById("rt").innerText = rt;
        document.getElementById("meta").innerText = meta;

    };

    xhr.onerror = function(){
        alert("WHOOPS there was an error!");
    }

    xhr.send();
}