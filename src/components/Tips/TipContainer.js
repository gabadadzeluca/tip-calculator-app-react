import CustomTipInput from "./CustomTipInput";
import TipInput from "./TipInput";
import styles from './tips.module.css';

export default function Tipcontainer(props){
    return(
        <div>
            <p>
                Select Tip %
            </p>
            <div className={styles["tip-container"]}>
                {props.tips.map((number) => {
                    return <TipInput  number={number} onClick={props.onClick} id={number} 
                    className={`${styles["tip-input"]} ${props.selectedTip === number ? styles["selected"] : ""}`}/>;
                })}
                <CustomTipInput onChange={props.onChange} value={props.value}/>
            </div>
        </div>
    )
}