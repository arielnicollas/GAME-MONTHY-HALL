import styles from "../styles/Door.module.css"
import DoorModel from '../model/door'
import Gift from "../components/Gift";

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps){
    const door  = props.value
    const selected  = door.selected && !door.open ? styles.selected : ''

    const alterSelect = e => props.onChange(door.alterSelected())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.openDoor())
        console.log(e)
    } 

    function renderDoor() {
        return(
           
                 <div className={styles.door}>
                     <div className={styles.number}>{door.number}</div>
                     <div className={styles.doorHandle} onClick={open}></div>
                </div>
        )
    }

    return(

        <div className={styles.space} onClick={alterSelect}>
             <div className={`${styles.structure} ${selected}`}>
             {door.closed ? renderDoor() : door.havePresent ? <Gift /> : false}


             </div>
         

        <div className={styles.floor}></div>
        
        </div>
              


       
    )
}