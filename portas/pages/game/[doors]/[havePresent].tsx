import { useEffect, useState } from "react"
import Door from "../../../components/Door"
import { createDoors, updateDoors } from "../../../functions/doors"
import styles from "../../../styles/Game.module.css"
import Link from "next/link"
import { useRouter } from "next/router"


export default function game() {

    const router = useRouter()
    const [validate, setValidate] = useState(false)
    const [doors, setDoors] = useState([])


    useEffect(() => {
        const doors = +router.query.doors
        const havePresent = +router.query.havePresent
        
        const amountDoorsValidate = doors >= 3 && doors <= 100
        const havePresentValidate = havePresent >= 1 && havePresent <= doors

        setValidate(amountDoorsValidate && havePresentValidate)
    }, [doors])


    useEffect(() => {
        const doors = +router.query.doors
        const havePresent = +router.query.havePresent
        setDoors(createDoors(doors, havePresent))
    }, [router.query])

    function renderDoors() {
      return doors.map(door => {
       return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
      })
  }

  return (

    <div id={styles.game}>
        <div className={styles.doors}>
        {validate ? 
            renderDoors() : <h2>Valores Inválidos</h2>
    }
        </div>
        <div className={styles.buttons}>
            <Link href="/">
                <button>Reinciar Jogo</button>    
            </Link>
        </div>
     </div>
  )

}