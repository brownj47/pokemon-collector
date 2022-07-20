const Pokemon = require("./Pokemon");

class Trainer {
    constructor(name, pokemon = []){
        this.pokemon = pokemon;
        this.name = name;

    }
    addPokemon(name, hp, atk){
        const newMon = new Pokemon(name, hp, atk)
        this.pokemon.push(newMon)
    }
    getRandomPokemon(){
        const randInd = Math.floor(Math.random()*this.pokemon.length)

        return this.pokemon[randInd]
    }
}

module.exports = Trainer;