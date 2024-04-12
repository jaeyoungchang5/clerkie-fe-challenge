import React from 'react'
import { InputProps } from '../../types/';

const Input = ({ name, label, defaultText, value, errorMessage, disabled = false, extraInputClasses, onChange }: InputProps) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	return (
		<div className='flex flex-col self-center'>
			<label className='' htmlFor={label}>
				{label}
			</label>
			<input
				name={name}
				value={value}
				placeholder={defaultText}
				onChange={handleInputChange}
				className={`p-2 rounded-md border-2 focus:border-3 focus:outline-none focus:ring-0 ${!errorMessage ? 'focus:border-blue-700 ' : 'border-red-300 focus:border-red-600'} ${extraInputClasses}`}
				maxLength={30}
				disabled={disabled}
				autoComplete='off'
			/>
			<p hidden={errorMessage === ''} className='italic text-red-600 text-sm'>
				{errorMessage}
			</p>
		</div>
	)
}

export default Input