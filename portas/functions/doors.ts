import DoorModel from "../model/door";

export function createDoors(qntd: number, doorHavePresent: number) : DoorModel[]{
    return Array.from({length: qntd}, (_, i) => {
        const number = i + 1
        const havePresent = number === doorHavePresent
        return new DoorModel(number, havePresent)
    })
}

export function updateDoors( doors: DoorModel[], doorModified: DoorModel): DoorModel[] {
    return doors.map(doorCurrent => {
        const equalaModified = doorCurrent.number === doorModified.number

        if(equalaModified) {
            return doorModified
        } else {
           return doorModified.open ? doorCurrent : doorCurrent.unSelected()
        }
    })
}