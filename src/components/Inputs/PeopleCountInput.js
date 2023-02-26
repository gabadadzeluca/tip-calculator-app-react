import styles from './inputs.module.css';

export default function PeopleCountInput(props){
    const error = <span>{props.errorMessage}</span>
    return(
        <div>
            <div className={styles["label-div"]}>
                <p>Number of People</p>
                <span className={styles.error}>{error}</span>
            </div>
            <input min={1} type="number" placeholder="0" onChange={props.onChange} value={props.value} 
            className={`${styles["num-people"]} ${props.errorMessage !== '' ? styles["error-input"] : ""}`}
            />
        </div>
    )
}