import React from 'react'
import CurrencyInput from '../Common/CurrencyInput';
import { AccountInfoProps, AccountProps, FormResponseNames } from '@/app/types';
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
        <div className='grid grid-cols-1 md:grid-cols-12 py-2'>
            <div className='grid col-span-4'>
                <div className='flex flex-row self-center'>
                    <input className='mr-4 w-5 h-5 self-center' type='checkbox' checked={account.isSelected} onChange={handleCheck} />
                    <AccountInfo name={account.name} balance={account.balance} />
                </div>
            </div>
            <span className='col-span-4'></span>
            <div className='col-span-4'>
                <CurrencyInput 
                    name={`${FormResponseNames.AccountPaymentPrefix}${account.name}`}
                    value={account.accountPayment}
                    errorMessage={errorMessage}
                    disabled={!account.isSelected}
                    onChange={handleChange}
                    extraInputClasses={`md:text-right ${!account.isSelected && 'bg-gray-200'}`}
                />
            </div>
        </div>
    )
}

const AccountInfo = ({ name, balance }: AccountInfoProps) => {
    return (
        <div className='flex flex-row md:flex-col gap-2 md:gap-0'>
            <p className='md:mb-1'>Account {name}</p>
            <div className='flex flex-row md:flex-col gap-1 md:gap-0'>
                <p className='text-sm md:text-xs text-gray-400 self-center md:self-start'>Balance </p>
                <p className='text-sm text-gray-400 self-center md:self-start'>{numToCurrency(balance)}</p>
            </div>
        </div>
    )
}

export default Account