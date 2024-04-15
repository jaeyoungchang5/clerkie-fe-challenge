import React, { useEffect, useMemo, useRef } from 'react'
import Input from './Input';
import { CurrencyInputProps } from '@/app/types/';
import { inputStringToCurrencyNum, numToCurrency } from '@/app/utilities/';

const CurrencyInput = ({ name, label, defaultText = '$0.00', value, errorMessage, disabled, extraInputClasses, onChange }: CurrencyInputProps) => {
	const ref = useRef<HTMLInputElement>(null);

    const formattedString: string = useMemo((): string => {
        if (!value) {
            return ''
        }
        return numToCurrency(value);
    }, [value]);

	useEffect(() => {
		ref.current?.setSelectionRange(-1, -1);
	}, [ref, value])

	function handleInputChange(value: string) {
        let numberValue = inputStringToCurrencyNum(value)
		if (!isNaN(numberValue)) {
			onChange(numberValue);
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
			ref={ref}
			onChange={handleInputChange}
		/>
	)
}

export default CurrencyInput