export default function CustomTipInput(props){
    return(
        <div onChange={props.onChange}>
            <input type="number" placeholder="Custom" min={1} onChange={props.onChange} value={props.value} />
        </div>
    )
}  