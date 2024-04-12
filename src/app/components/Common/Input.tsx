import React from 'react'
import { InputProps } from '../../types/';

const Input = ({ name, label, defaultText, value, errorMessage, disabled = false, extraInputClasses, onChange }: InputProps) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	return (
		<div className='grid grid-rows-4 mr-4'>
			<label className='row-span-1' htmlFor={label}>
				{label}
			</label>
			<input
				name={name}
				value={value}
				placeholder={defaultText}
				onChange={handleInputChange}
				className={`self-center row-span-2 w-full p-2 rounded-md border-2 focus:border-3 focus:outline-none focus:ring-0 ${!errorMessage ? 'focus:border-blue-700 ' : 'border-red-300 focus:border-red-600'} ${extraInputClasses}`}
				maxLength={30}
				disabled={disabled}
				autoComplete='off'
			/>
			<span hidden={errorMessage === ''} className={`row-span-1 italic text-red-600 text-xs ${extraInputClasses}`}>
				{errorMessage}
			</span>
		</div>
	)
}

export default Input