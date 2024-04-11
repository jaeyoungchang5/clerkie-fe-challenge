import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
    text: string,
    type: 'submit',
    onSubmit?: Function
}

const Button = ({ text, type, onSubmit }: ButtonProps) => {
    return (
        <button type={type} className='bg-black text-white rounded-lg'>
            {text}
        </button>
    )
}

export default Button