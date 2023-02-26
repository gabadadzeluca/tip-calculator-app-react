export default function TotalPrice(props){
    const total = props.hasOwnProperty('totalPerPerson')  ? props.totalPerPerson : props.tipPerPerson;
    const totalName = props.hasOwnProperty('totalPerPerson')  ? 'Total' : 'Tip Amount';
    return(
        <div>
            <div>
                <p className={props.styles["white-text"]}>{totalName}</p>
                <p className={props.styles["gray-text"]}>/ person</p>
            </div>
            <h3 className={props.styles["total"]}>
                ${total}
            </h3>
        </div>
    )
}