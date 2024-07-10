import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholder = `Digite aqui seu ${props.label}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    let classe = `campo campo__${props.type}`
    
    return (
        <div className={classe}>
            <label>{props.label}</label>
            <input type={props.type} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto