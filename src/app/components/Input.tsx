import React from 'react'

interface InputProps {
	label: string,
	defaultText: string,
	value: string | undefined, // pass undefined for value if you want the default text to show up
	errorMessage: string,
	disabled?: boolean,
	onChange: (value: string) => void,
}

const Input = ({ label, defaultText, value, errorMessage, disabled = false, onChange }: InputProps) => {
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	return (
		<div>
			<label>
				{label}
				<input
					value={value}
					placeholder={defaultText}
					onChange={handleInputChange}
					className={`border-2 focus:border-3 focus:outline-none focus:ring-0 ${!errorMessage ? 'focus:border-blue-700 ' : 'border-red-600 focus:border-red-500'}`}
					maxLength={30}
					disabled={disabled}
				/>
				{errorMessage}
			</label>
		</div>
	)
}

export default Input