//Star Wars API URL
const url = 'https://swapi.co/api/films/';

var app = document.getElementById("getDetails");

const container = document.createElement("div");
container.setAttribute("class","container");
app.appendChild(container);

window.onload = function getDetails(){

    fetch(url)    
    .then(response => response.json())
    .then(data=>{
        data = data.results;

        data.forEach(function(films){
            //this.console.log(data.results);
            if(document.location.search==`?movieId=${films.episode_id}`){
                //console.log("hello2");
    
                var keys = Object.keys(films);

                keys.forEach(function(key){
                    var template = document.querySelector("#template");
                    var clone = document.importNode(template.content, true);
                    
                    clone.querySelector(".h2").textContent = key;
                    clone.querySelector(".p").textContent = films[key];

                    app.appendChild(clone);

                 }) 

     
        }})
    })
}