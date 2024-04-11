import React from 'react'
import { InputType } from '../enums';

interface InputProps {
	label: string,
	defaultText: string,
	value: string | number | undefined, // pass undefined for value if you want the default text to show up
	errorMessage: string,
	handleChange: (value: number) => void,
	type?: InputType,
}

const Input = ({ label, defaultText, value, errorMessage, handleChange, type }: InputProps) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputText = event.target.value;
		if (!isNaN(+inputText)) {
			handleChange(+inputText);
		}
	}

	return (
		<div>
			<label>
				{label}
				<input
					value={value ? value : ''}
					placeholder={defaultText}
					onChange={handleInputChange}
					className={`border-2 focus:border-3 focus:outline-none focus:ring-0 ${!errorMessage ? 'focus:border-blue-700 ' : 'border-red-600 focus:border-red-500'}`}
					maxLength={30}
				/>
				{errorMessage}
			</label>
		</div>
	)
}

export default Input