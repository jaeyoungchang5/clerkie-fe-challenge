import React, { useEffect, useMemo, useState } from 'react'

interface CurrencyInputProps {
	label?: string,
	defaultText?: string,
	value: number | undefined, // pass undefined for value if you want the default text to show up
	errorMessage: string,
	disabled: boolean,
	onChange: (value: number) => void,
}

const CurrencyInput = ({ label, defaultText = '$0.00', value, errorMessage, disabled, onChange }: CurrencyInputProps) => {
    console.log(`rendering currrencyInput with value: ${value}`)
    const decimalSeparator: string = '.';
    const groupSeparator: string = ',';
    const formattedValue: string = value ? `$${value.toString()}` : ''
    // const [formattedValue, setFormattedValue] = useState<string>(() => {
    //     return value ? `$${value.toString()}` : '';
    // })

    const [dirty, setDirty] = useState(false);
    const [cursor, setCursor] = useState(0);
    const [changeCount, setChangeCount] = useState(0);
    const [lastKeyStroke, setLastKeyStroke] = useState<string | null>(null);

    const getFormattedString = (): string => {
        if (!value) {
            return formattedValue
        
        }
        // const regex = new RegExp('^[\$\.]$')
        // const match = value.match(regex);
        // console.log(match);
        return formatValue(value)
    }

    function formatValue(rawValue: number): string {
        
        return ''
    }


	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const inputText = event.target.value;
        let numberValue = inputText.replace('$', '');
        console.log(`handling input change: ${numberValue}`);
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
					value={formattedValue}
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