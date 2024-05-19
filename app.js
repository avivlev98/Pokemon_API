

const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

app.get('/pokemon', async(req,res) => {
    
    try {
        const pokemonData = [];
    
        for (let i = 1; i <= 30; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const apiRes = await fetch(url);
            
            if (!apiRes.ok) {
                throw new Error(`HTTP error status: ${apiRes.status}`);
            }
    
            const data = await apiRes.json();
            pokemonData.push(data);
        }
    
        res.json(pokemonData);

    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        res.status(500).json({ error: "Failed to fetch Pokémon data" });
    }
    

})

app.get('/flags', async(req,res) => {
    
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})