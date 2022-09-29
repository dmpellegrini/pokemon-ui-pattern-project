// Javascript Functionality for index.html

// Storing the PokéAPI base url to a constant 
const url = 'https://pokeapi.co/api/v2/pokemon/'

// Fetches data from the PokéAPI for first 151 Pokemon
fetch(url + "?limit=151")
  .then(response => response.json()) 
  .then(jsonResponse => {
    const pokemons = jsonResponse.results
    
    for (let i = 0; i < pokemons.length; i++) {
      makePokeBtn(pokemons[i].url)
    }
  })
  .catch(error => {
      console.error("Pokemon not retrieved", error)
  })

// Fetches individual Pokemon to update the DOM
function makePokeBtn(pokeUrl) {
  fetch(pokeUrl)
    .then(response => response.json())
    .then(pokemon => {
      // Retrieves and assigns Thumbnail URL for Pokemon button
      const pokeTNURL = pokemon.sprites.front_default
      const pokeThmbNail = document.createElement('img')
      pokeThmbNail.src = pokeTNURL
      


      // Creates Pokemon button to open modal
      const pokeButton = document.createElement('button')
      pokeButton.classList.add('sprite')
      pokeButton.appendChild(pokeThmbNail)
      console.log(pokemon)
      document.querySelector('.sprites').appendChild(pokeButton)

      pokeButton.addEventListener('click', () => {
        pokeClick(pokemon)
      })

    })
    .catch(error => {
      console.error("Pokemon attributes not retrieved", error)
    })
}

function pokeClick (pokemon) {
  console.log(pokemon)
  // Generates pokemon artwork and bio info and assigns it to tags
  const pokeArtUrl = pokemon.sprites.other["official-artwork"].front_default
  const pokeOffArt = document.createElement('img')
  pokeOffArt.src = pokeArtUrl
  const pokeName = document.createElement('h1') 
  pokeName.innerText = pokemon.name
  const pokeBio = document.createElement('p')
  pokeBio.innerText = "Lorem Ipsum"


  // Creates a new divs for Pokemon contents
  const infoDiv = document.createElement('div')
  infoDiv.classList.add('info')
  const bioBoxDiv = document.createElement('div')
  bioBoxDiv.classList.add('bioBox')

  // Appends tags to each of the modals inner divs
  bioBoxDiv.appendChild(pokeName)
  bioBoxDiv.appendChild(pokeBio)
  infoDiv.appendChild(pokeOffArt)
  infoDiv.appendChild(bioBoxDiv)

  // Appends inner modal's divs to modal under certain conditions
  let modalDiv = document.querySelector('.modal')
  if (modalDiv.innerHTML === "") {
    modalDiv.appendChild(infoDiv)
  }
  else if (modalDiv.innerHTML = infoDiv.outerHTML) {
    modalDiv.innerHTML = ""
  }else{
    modalDiv.innerHTML = ""
    modalDiv.appendChild(infoDiv)
  }
}

