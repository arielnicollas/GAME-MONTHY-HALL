import Card from "../components/Card"
import styles from "../styles/Form.module.css"
import Link from "next/link"
import NumberInput from "../components/NumberInput"
import { useState } from "react"

export default function Form() {

  const [amountDoors, setAmountDoors] = useState(3)
  const [havePresent, setHavePresent] = useState(1)
  
  return (
    <div className={styles.form}>
        <div>
          <Card bgcolor="#c0392c">
            <h1>Monthy Hall</h1>
          </Card>
          <Card>
            <NumberInput text="Quantidade de Portas" value={amountDoors} onChange={newAmount => setAmountDoors(newAmount)} />
          </Card>

        </div>
        
        <div>
            <Card >
            <NumberInput text="Porta com presente?" value={havePresent} onChange={newDoorHavePresent => setHavePresent(newDoorHavePresent)} />
            </Card>
            <Card bgcolor="#28a085">
              <Link href={`/game/${amountDoors}/${havePresent}`}>
                <h2 className={styles.link}>Iniciar</h2>
              </Link>
            </Card>
        </div>
    </div>

 

    
  )
}
