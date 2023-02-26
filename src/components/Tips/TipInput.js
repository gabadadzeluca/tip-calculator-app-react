export default function TipInput(props){
    return(
        <div className={props.className} onClick={props.onClick} id={props.id}>
            {props.number}%
        </div>
    )
}