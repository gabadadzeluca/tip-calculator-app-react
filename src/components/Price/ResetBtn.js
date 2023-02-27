import styles from "./price.module.css"; 
export default function Resetbtn(props){
    return(
        <button onClick={props.onClick} className={props.btnActive ? '' : styles.inactive}>RESET</button>
    )
}