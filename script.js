//Star Wars API URL
const url = 'https://swapi.co/api/films/?format=json';

const ul = document.getElementById("list_of_films");

function createNode(element) {
    return document.createElement(element); 
  }

  function appendNode(parent, element) {
    return parent.appendChild(element); 
  }


fetch(url)
    .then(response =>{
       //console.log(response.json());
       return response.json();
    })
    .then (data =>{
        //console.log(response);
    
        data.results.map((movieTitle)=>{
            let li = createNode('li'),
            span = createNode('span');
            span.innerText = movieTitle.title;

            appendNode(li,span);
            appendNode(ul,li);
        })
    })
    .catch (function(error) {
        console.log(error);
    })