import React, { forwardRef } from 'react'
import { InputProps } from '@/app/types/';

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, label, defaultText, value, errorMessage, disabled = false, extraInputClasses, onChange }: InputProps, ref) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value, event);
	}

	return (
		<div className='grid grid-rows-4'>
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
				ref={ref}
				autoComplete='off'
			/>
			<span hidden={errorMessage === ''} className={`row-span-1 italic text-red-600 text-xs ${extraInputClasses}`}>
				{errorMessage}
			</span>
		</div>
	)
})

export default Input