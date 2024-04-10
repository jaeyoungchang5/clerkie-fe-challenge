import React from 'react'
import { Value } from '../types';

interface NumberInputProps {
	title: string,
	defaultText: string,
	value: Value,
	handleChange: Function,
	isCurrency?: boolean,
}

const NumberInput = ({ title, defaultText, value, handleChange, isCurrency }: NumberInputProps) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputText = event.target.value;
		if (!isNaN(+inputText)) {
			handleChange(+inputText);
		}
	}

	return (
		<div>
			<label>
			{title}
			<input
				value={value.value}
				placeholder={defaultText}
				onChange={handleInputChange}
				className={`border-2 focus:border-3 focus:outline-none focus:ring-0 ${!value.errorMessage ? 'focus:border-blue-700 ' : 'border-red-600 focus:border-red-500'}`}
				maxLength={30}
			/>
			{value.errorMessage}
			</label>
		</div>
	)
}

export default NumberInput