
interface InputProps {
    type: string,
    name: string,
    callBack: any,
    step?: number

}

const Input = (props: InputProps) => {

    return (
        <div className="InputLabel">
            <label htmlFor={props.name}>{props.name}</label>
            <input type={props.type} 
                id={props.name} 
                step={props.step || 0} 
                onChange={(e) => props.callBack(e.target.value)} />
        </div>
    )
}

export default Input