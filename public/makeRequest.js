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
        console.log(object.Poster);
        console.log(JSONstring);
    };

    xhr.onerror = function(){
        alert("WHOOPS there was an error!");
    }

    xhr.send();
}