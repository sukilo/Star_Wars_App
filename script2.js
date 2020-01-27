//Star Wars API URL
const url = 'https://swapi.co/api/films/';

var app = document.getElementById("getDetails");

const container = document.createElement("div");
container.setAttribute("class","container");
app.appendChild(container);

window.onload = function(){
    if(this.document.location.search=="?movieId=1"){
        
        fetch(url) 
        .then(response => response.json())
        .then (data =>{
            //console.log(data);
                data = data.results;
                        console.log(data.opening_crawl);
    
                
            })
        .catch (function(error) {
            console.log(error);
        })
    
    }
}