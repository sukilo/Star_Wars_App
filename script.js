//Star Wars films URL
const url = 'https://swapi.co/api/films/';

let app = document.getElementById("getFilms");

const container = document.createElement("div");
container.setAttribute("class","container");
app.appendChild(container);

function getFilms(){

    fetch(url)    
    .then(response => response.json())
    .then (data =>{
			data = data.results;

			data.forEach(function(films){
				const card = document.createElement('div');
				card.setAttribute('class','card');
				
				const btn = document.createElement('button');
				btn.textContent = films.title;
            
				container.appendChild(card);
				card.appendChild(btn);
					
				btn.onclick = function(){
                    window.location.href = `filmDetails.html?movieId=${films.episode_id}`;
				}
			}); 
        })
    .catch (function(error) {
        console.log(error);
    })
}

getFilms();