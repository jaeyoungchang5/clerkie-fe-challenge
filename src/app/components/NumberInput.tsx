import React from 'react'

interface NumberInputProps {
	title: string,
	defaultText: string,
	value: string,
	handleChange: Function,
	errorMessage: string,
}

const NumberInput = ({ title, defaultText, value, handleChange, errorMessage }: NumberInputProps) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputText = event.target.value;
		if (!isNaN(+inputText)) {
			handleChange(inputText);
		}
	}

	return (
		<div>
			<label>
			{title}
			<input
				value={value}
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

export default NumberInput