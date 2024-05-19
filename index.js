
document.getElementById('fetchButton').addEventListener('click', async() => {
    try{
        const response = await fetch('http://localhost:3000/pokemon')

        if(!response.ok){
            throw new Error(`http error status ${response.status}`)
        }
        const data = await response.json()
        const names = data.map(pokemon => pokemon.name)
        const images = data.map(pokemon => pokemon.sprites['front_default'])
        const abilities = data.map(pokemon => pokemon.abilities['0'].ability['name'])
        const moves = data.map(pokemon => pokemon.moves['0'].move['name'])
        const arrPokemon = []
        for (let i = 0; i < names.length; i++) {
            
            arrPokemon.push(new Pokemon(names[i], images[i], abilities[i], moves[i]))

        }

        arrPokemon.forEach(url => {
            
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card');
            cardContainer.style.margin = '50px';
        
            
            const imgElement = document.createElement('img');
            imgElement.src = url.image;
            imgElement.alt = 'SVG image';
            imgElement.width = 100;
            imgElement.height = 100;
            cardContainer.appendChild(imgElement);
        
           
            const h3name = document.createElement('h3');
            h3name.innerText = url.name;
            cardContainer.appendChild(h3name);
        
            
            const h3native = document.createElement('h3');
            h3native.innerText = url.abilities;
            cardContainer.appendChild(h3native);
        
        
            document.getElementById('svgContainer').appendChild(cardContainer);
        });
        

    } catch (error) {

        console.log('fetch error')

    }
})