import React from 'react'
import { ButtonProps } from '../../types/'

const Button = ({ text, type, disabled = false }: ButtonProps) => {
    return (
        <button disabled={disabled} type={type} className={`flex text-center p-2 justify-center bg-black text-white rounded-lg ${disabled && 'bg-gray-500'}`}>
            {text}
        </button>
    )
}

export default Button