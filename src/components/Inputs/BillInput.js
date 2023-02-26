import styles from "./inputs.module.css";

export default function BillInput(props){
    return(
        <div>
            <p>Bill</p>
            <input type='number' onChange={props.onChange} value={props.value} className={styles["num-bill"]}/>
        </div>
    )
}