export default class DoorModel {
    #number : number
    #havePresent : boolean
    #selected : boolean
    #open : boolean
    

    constructor(number: number, havePresent = false, selected = false, open = false) {
        this.#number = number
        this.#havePresent = havePresent
        this.#selected = selected
        this.#open = open
        
    } 

    get number() {
        return this.#number
    }

    get havePresent() {
        return this.#havePresent
    }

    get selected() {
        return this.#selected
    }

    get open() {
        return this.#open
    }

    get closed() {
        return !this.open
    }


    unSelected() {
        const unSelected = false
        return new DoorModel(this.number, this.#havePresent, unSelected, this.open)
    }


    alterSelected() {
        const selected = !this.selected
        return new DoorModel (this.number, this.havePresent, selected, this.open)
    }

    openDoor() {
        const open = true
        return new DoorModel (this.number, this.havePresent, this.selected, open)
    }

}

