import React, { useEffect, useMemo, useRef, useState } from 'react'

interface CurrencyInputProps {
	label?: string,
	defaultText?: string,
	value: number,
	errorMessage: string,
	disabled: boolean,
	onChange: (value: number) => void,
}

const CurrencyInput = ({ label, defaultText = '$0.00', value, errorMessage, disabled, onChange }: CurrencyInputProps) => {
    const formattedString: string = useMemo((): string => {
        if (!value) {
            return ''
        }
        let temp: string = value.toFixed(2);
        temp = temp.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})$)/g, '$1,')
        return `$${temp}`
    }, [value]);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputText = event.target.value;
        let numberValue = inputText.replace(/[\$,-]/g, '');
		if (!isNaN(+numberValue)) {
			onChange(+numberValue);
		}
	}

    function handleOnKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        const { key, currentTarget: { selectionStart } } = event;
        if (key !== 'ArrowUp' && key !== 'ArrowDown') {

        }
    }

	return (
		<div>
			<label>
				{label}
				<input
					value={formattedString}
					placeholder={defaultText}
					onChange={handleInputChange}
                    onKeyUp={handleOnKeyUp}
					className={`border-2 focus:border-3 focus:outline-none focus:ring-0 ${!errorMessage ? 'focus:border-blue-700 ' : 'border-red-600 focus:border-red-500'}`}
					maxLength={30}
					disabled={disabled}
				/>
				{errorMessage}
			</label>
		</div>
	)
}

export default CurrencyInput