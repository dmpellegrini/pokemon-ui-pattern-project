// Javascript Functionality for index.html

// Storing the PokéAPI base url to a constant 
const url = 'https://pokeapi.co/api/v2/pokemon/'

// Fetching data from the PokéAPI for first 151 Pokemon
fetch(url + "?limit=151")
  .then(response => response.json()) 
  .then(jsonResponse => {

    // Stores each Pokemon object in an array

    // Fetches each Pokemon's URL
    let pokeUrl = jsonResponse.results[0].url
    fetch(pokeUrl)
      .then(response => response.json())
      .then(jsonResponse => {
        let pokeThmbNail = jsonResponse.sprites.front_default
      })
    // for (let i = 0; i < jsonResponse.results.length; i++){
    //   const pokemon = document.createElement('p')
    //   pokemon.innerText = jsonResponse.results[i].name
    //   document.querySelector('.sprites').appendChild(pokemon)
    // }

  })
  .catch(error => {
      console.error("Something went wrong...", error)
  })

