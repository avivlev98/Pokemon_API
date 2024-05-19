class Pokemon {

    #name
    #image
    #abilities
    #moves

    constructor (name, image, abilities, moves){
        this.#name = name
        this.#image = image
        this.#abilities = abilities
        this.#moves = moves
    }

    get name(){
        return this.#name
    }
    get image(){
        return this.#image
    }
    get abilities(){
        return this.#abilities
    }
    get moves(){
        return this.#moves
    }
    set name( newName ){
        this.#name = newName
    }
    set image( newimage ){
        this.#image = newimage
    }
    set abilities( newabilities ){
        this.#abilities = newabilities
    }
    set moves( newmoves ){
        this.#moves = newmoves
    }
}