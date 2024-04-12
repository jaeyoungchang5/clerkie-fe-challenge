import React from 'react'

const RadioGroup = () => {
    return (
        <div className='flex flex-col'>
            <label className='' htmlFor='accounttype'>
				Account Type
			</label>
            <div className='flex flex-row'>
                <Radio />
                <Radio />
            </div>
        </div>
    )
}

const Radio = () => {
    return (
        <div className=''>
            <input
                name='checking'
                type='radio' id='checking'
            />
            <label className='px-2' htmlFor={'checking'}>
                Checking
            </label>
        </div>
    )
}

export default RadioGroup