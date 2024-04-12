import { AccountType, RadioGroupProps } from '@/app/types';
import React, { useState } from 'react'


const RadioGroup = ({ options }: RadioGroupProps) => {
    const [selected, setSelected] = useState<string>(options[0].value);

    function onChange(value: string) {
        setSelected(value);
    }

    return (
        <div className='flex flex-col'>
            <label className='' htmlFor='accounttype'>
				Account Type
			</label>
            <div className='flex flex-row'>
                {options.map((option, key) => {
                    return (
                        <Radio key={key} name='accounttype' value={option.value} title={option.title} isChecked={selected === option.value} onChange={onChange} />
                    )
                })}
            </div>
        </div>
    )
}

interface RadioProps {
    name: string,
    value: string,
    title: string,
    isChecked: boolean, 
    onChange: (value: string) => void
}
const Radio = ({ name, value, title, isChecked, onChange }: RadioProps) => {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value);
	}

    return (
        <div className=''>
            <input name={name} type='radio' checked={isChecked} value={value} onChange={handleChange} />
            <label className='px-2' htmlFor={name}>
                {title}
            </label>
        </div>
    )
}

export default RadioGroup