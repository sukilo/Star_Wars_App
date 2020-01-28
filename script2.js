//Star Wars API URL
const url = 'https://swapi.co/api/films/';

var app = document.getElementById("getDetails");

window.onload = function getDetails(){

    fetch(url)    
    .then(response => response.json())
    .then(data=>{
        data = data.results;

        data.forEach(function(films){
            //this.console.log(data.results);
            if(document.location.search==`?movieId=${films.episode_id}`){
                console.log("hello2");

                console.log(films.characters);
                
                //Gets Last parameter of the URL for each link in characters
                array = films.characters;

                var keys = Object.keys(films);

                keys.forEach(function(key){
                    var template = document.querySelector("#template");
                    var clone = document.importNode(template.content, true);
                    
                    clone.querySelector(".h2").textContent = key;

                    if(films[key] == films.characters){
                        clone.querySelector(".h2").textContent = key;

                        var myDiv= document.getElementById("myDiv");

                        array.forEach(function(a){
                            var q = a.substring(a.lastIndexOf("/") - 1);
                            var last = q.replace ("/","")
                            //console.log(last);

                            var aTag = document.createElement("a");
                            aTag.setAttribute("href",`details2.html?charId=${last}`)
                            aTag.innerHTML = last;
                            myDiv.appendChild(aTag);

                            app.appendChild(clone); 
                            app.appendChild(myDiv); 
                        })
                    }else{
                       clone.querySelector(".p").textContent = films[key];

                    app.appendChild(clone); 
                    }
                    

                 }) 

     
        }})
    })
}

