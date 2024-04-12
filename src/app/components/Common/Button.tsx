import React from 'react'
import { ButtonProps } from '../../types/'

const Button = ({ text, type, disabled = false }: ButtonProps) => {
    return (
        <button disabled={disabled} type={type} className='flex text-center p-2 justify-center bg-blue-700 text-white rounded-lg disabled:bg-blue-300'>
            {text}
        </button>
    )
}

export default Button