//Star Wars API URL
const url = 'https://swapi.co/api/films/';

const myURL = new URL(window.location.href);
//console.log(myURL.searchParams.get("id"));

const ul = document.getElementById("getFilms");

const container = document.createElement("div");
container.setAttribute("class","container");
ul.appendChild(container);

function getFilms(){

    fetch(url)    
    .then(response => response.json())
    .then (data =>{
        //console.log(data);
			data = data.results;
			        console.log(data);

			data.forEach(function(films){
				const card = document.createElement('div');
				card.setAttribute('class','card');
				
				const btn = document.createElement('button');
				 btn.textContent = films.title;
				 //console.log(films.title);
            
				container.appendChild(card);
				card.appendChild(btn);
					
				btn.onclick = function(){
                    window.location.href = `details.html?movieId=${films.episode_id}`;
				}
			}); 
        })
    .catch (function(error) {
        console.log(error);
    })
}

getFilms();