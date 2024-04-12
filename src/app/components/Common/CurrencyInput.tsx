import React, { useMemo } from 'react'
import Input from './Input';
import { CurrencyInputProps } from '@/app/types/';
import { currencyToNum, numToCurrency } from '@/app/utilities/';

const CurrencyInput = ({ name, label, defaultText = '$0.00', value, errorMessage, disabled, extraInputClasses, onChange }: CurrencyInputProps) => {
    const formattedString: string = useMemo((): string => {
        if (!value) {
            return ''
        }
        return numToCurrency(value);
    }, [value]);

	function handleInputChange(value: string) {
        let numberValue = currencyToNum(value)
		if (!isNaN(numberValue)) {
			onChange(numberValue);
		}
	}

    function handleOnKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        const { key, currentTarget: { selectionStart } } = event;
        if (key !== 'ArrowUp' && key !== 'ArrowDown') {

        }
    }

	return (
		<Input
			name={name}
			label={label}
			defaultText={defaultText}
			value={formattedString}
			errorMessage={errorMessage}
			disabled={disabled}
			extraInputClasses={extraInputClasses}
			onChange={handleInputChange}
		/>
	)
}

export default CurrencyInput