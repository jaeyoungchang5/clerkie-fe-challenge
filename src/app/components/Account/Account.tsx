import React, { useEffect, useState } from 'react'
import CurrencyInput from '../Common/CurrencyInput';
import { AccountInfoProps, AccountProps } from '../../types/';
import { numToCurrency, isValidAccountPayment } from '@/app/utilities/';

const Account = ({ account, updateChecked, updatePaymentAmount }: AccountProps) => {
    const errorMessage = !isValidAccountPayment(account) ? 'Payment exceeds account balance' : '';

    function handleChange(value: number) {
        updatePaymentAmount(account.name, value)
    }

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        updateChecked(account.name, event.target.checked);
    }

    return (
        <div className='flex justify-between mb-6'>
            <div className='flex flex-row'>
                <input className='mr-4' type='checkbox' checked={account.isSelected} onChange={handleCheck} />
                <AccountInfo name={account.name} balance={account.balance} />
            </div>
            <div className=''>
                <CurrencyInput 
                    name={`account_${account.name}`}
                    value={account.accountPayment}
                    errorMessage={errorMessage}
                    disabled={!account.isSelected}
                    onChange={handleChange}
                    extraInputClasses={`text-right ${!account.isSelected && 'bg-gray-200'}`}
                />
            </div>
        </div>
    )
}

const AccountInfo = ({ name, balance }: AccountInfoProps) => {
    return (
        <div className='flex flex-col'>
            <p className='mb-1'>Account {name}</p>
            <p className='text-xs text-gray-400'>Balance</p>
            <p className='text-sm text-gray-400'>{numToCurrency(balance)}</p>
        </div>
    )
}

export default Account