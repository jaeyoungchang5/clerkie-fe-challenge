import React, { useEffect, useState } from 'react'
import CurrencyInput from '../Common/CurrencyInput';
import { AccountInfoProps, AccountProps } from '../../types/';
import { numToCurrency, isValidAccountPayment } from '@/app/utilities/';

const Account = ({ account, updateChecked, updatePaymentAmount }: AccountProps) => {
    const errorMessage = !isValidAccountPayment(account) ? 'Payment cannot exceed amount balance' : '';

    function handleChange(value: number) {
        updatePaymentAmount(account.name, value)
    }

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        updateChecked(account.name, event.target.checked);
    }

    return (
        <div className='flex justify-between'>
            <input type='checkbox' checked={account.isSelected} onChange={handleCheck} />
            <AccountInfo name={account.name} balance={account.balance} />
            <CurrencyInput 
                name={`account_${account.name}`}
                value={account.accountPayment}
                errorMessage={errorMessage}
                disabled={!account.isSelected}
                onChange={handleChange}
                extraInputClasses='text-right'
            />
        </div>
    )
}

const AccountInfo = ({ name, balance }: AccountInfoProps) => {
    return (
        <div className='flex flex-col'>
            <h4>Account {name}</h4>
            <p>Balance</p>
            <p>{numToCurrency(balance)}</p>
        </div>
    )
}

export default Account