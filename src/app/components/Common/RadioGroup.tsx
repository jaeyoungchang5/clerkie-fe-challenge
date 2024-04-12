import { RadioGroupProps } from '@/app/types';
import React, { useState } from 'react'


const RadioGroup = ({ label, options }: RadioGroupProps) => {
    const [selected, setSelected] = useState<string>(options[0].value);

    function onChange(value: string) {
        setSelected(value);
    }

    return (
        <div className='grid grid-rows-4'>
            <label className='row-span-1' htmlFor='accounttype'>
				{label}
			</label>
            <div className='self-center row-span-2'>
                <div className='flex flex-row'>
                    {options.map((option, key) => {
                        return (
                            <Radio key={key} name='accounttype' value={option.value} title={option.title} isChecked={selected === option.value} onChange={onChange} />
                        )
                    })}
                </div>
            </div>
            <span hidden={true} className='row-span-1'></span>
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
        <div className='align-center'>
            <input className='w-4 h-4' name={name} type='radio' checked={isChecked} value={value} onChange={handleChange} />
            <label className='px-2' htmlFor={name}>
                {title}
            </label>
        </div>
    )
}

export default RadioGroup