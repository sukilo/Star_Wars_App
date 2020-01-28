//Star Wars films URL
const url = 'https://swapi.co/api/films/';

let app = document.getElementById("getDetails");

window.onload = function getDetails(){

    fetch(url)    
    .then(response => response.json())
    .then(data=>{
        data = data.results;

        data.forEach(function(films){
            if(document.location.search==`?movieId=${films.episode_id}`){
                
                array = films.characters;
                let keys = Object.keys(films);

                keys.forEach(function(key){
                    var template = document.querySelector("#template");
                    var clone = document.importNode(template.content, true);
                    
                    clone.querySelector(".h2").textContent = key;

                    //Use <template> to display details
                    if(films[key] == films.characters){
                        clone.querySelector(".h2").textContent = key;

                        let myDiv = document.getElementById("myDiv");

                        array.forEach(function(a){
                            let q = a.substring(a.lastIndexOf("/") - 2);
                            var last = q.replace ("/","")

                            //Created <a> for each character link
                            let aTag = document.createElement("a");
                            aTag.setAttribute("href",`charDetails.html?charId=${last}`)
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
    .catch (function(error) {
        console.log(error);
    })
}

const btnHome = document.getElementById('btnHome');
if (window.location.href.match('filmDetails.html') != null) {
    btnHome.addEventListener('click',function(){
    window.location.href = "index.html";
    })
}