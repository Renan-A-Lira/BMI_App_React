
import {useRef, useEffect} from 'react'
import {useField} from '@unform/core'


interface InputProps {
    type: string,
    name: string,
    step?: number

}

const Input = (props: InputProps) => {


    const { fieldName, defaultValue, registerField } = useField(props.name)

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: (ref) => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            }
        })
    }, [fieldName, registerField])

    return (
        <div className="InputLabel">
            <label htmlFor={props.name}>{props.name}</label>
            <input type={props.type}
                name={props.name}
                ref={inputRef}
                id={props.name} 
                step={props.step || 0} 
            />
        </div>
    )
}

export default Input