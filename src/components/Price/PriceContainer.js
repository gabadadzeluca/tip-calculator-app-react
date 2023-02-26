import TotalPrice from "./TotalPrice"
import Resetbtn from "./ResetBtn"
import styles from "./price.module.css"; 

export default function PriceContainer(props){
    return(
        <div>
            <div className={styles["price-container"]}>
                <div>
                    <TotalPrice styles={styles} totalPerPerson={props.totalPerPerson}/>
                    <TotalPrice styles={styles} tipPerPerson={props.tipPerPerson}/>
                </div>
                <div>
                    <Resetbtn onClick={props.onClick}/>
                </div>
            </div>
        </div>

    )
}