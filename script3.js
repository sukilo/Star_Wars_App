let app = document.getElementById("getChar");

//get id of current window
let id = window.location.href;
id = id.substring(id.lastIndexOf('=')+1);   

//appended URL for fetch using id with characters link
const urlNew = (`https://swapi.co/api/people/${id}`)

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

const btnHome = document.getElementById('btnHome');
if (window.location.href.match('charDetails.html') != null) {
    btnHome.addEventListener('click',function(){
    window.location.href = "index.html";
    })
}
