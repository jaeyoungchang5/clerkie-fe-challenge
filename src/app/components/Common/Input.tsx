import React from 'react'
import { InputProps } from '../../types/';

const Input = ({ name, label, defaultText, value, errorMessage, disabled = false, extraInputClasses, onChange }: InputProps) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	return (
		<div className='flex flex-col'>
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
			<span hidden={errorMessage === ''} className={`italic text-red-600 text-xs ${extraInputClasses}`}>
				{errorMessage}
			</span>
		</div>
	)
}

export default Input