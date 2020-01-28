var app = document.getElementById("getChar");

//get id of current window
var id = window.location.href;
id = id.substring(id.lastIndexOf('=')+1);   

//appended URL for fetch using id with characters link
let urlNew = (`https://swapi.co/api/people/${id}`)

window.onload = function getChar(){

    fetch(urlNew)    
    .then(response => response.json())
    .then(data=>{
        var keys = Object.keys(data);
        
        if(document.location.search==`?charId=${id}`){
            keys.forEach(function(key){
                var template = document.querySelector("#template");
                var clone = document.importNode(template.content, true);

                clone.querySelector(".h2").textContent = key;
                clone.querySelector(".p").textContent = data[key];

                app.appendChild(clone); 
            })
        }   
    })
    .catch (function(error) {
        console.log(error);
    })
}
