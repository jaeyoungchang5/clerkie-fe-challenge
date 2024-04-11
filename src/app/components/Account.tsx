import React, { useEffect, useState } from 'react'
import { AccountDetails } from '../types';
import CurrencyInput from './CurrencyInput';

interface AccountProps {
    account: AccountDetails,
    updateChecked: (name: string, isChecked: boolean) => void,
    updatePaymentAmount: (name: string, value: number) => void
}

const Account = ({ account, updateChecked, updatePaymentAmount }: AccountProps) => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if (account.accountPayment > account.balance) {
            setErrorMessage('Payment cannot exceed account balance')
        } else {
            setErrorMessage('');
        }

    }, [account])

    function handleChange(value: number) {
        updatePaymentAmount(account.name, value)
    }

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        updateChecked(account.name, event.target.checked);
    }

    return (
        <div>
            Account {account.name} | Balance: ${account.balance} | Payment:
            <CurrencyInput 
                value={account.accountPayment}
                errorMessage={errorMessage}
                disabled={!account.isSelected}
                onChange={handleChange}
            />
            <input type='checkbox' checked={account.isSelected} onChange={handleCheck} />
        </div>
    )
}

export default Account