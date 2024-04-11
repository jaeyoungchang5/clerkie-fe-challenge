import React, { useEffect, useState } from 'react'
import { AccountDetails } from '../types';
import Input from './Input';

interface AccountProps {
    account: AccountDetails,
    updateChecked: (name: string, isChecked: boolean) => void,
    updatePaymentAmount: (value: number) => void
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
    }

    function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
        updateChecked(account.name, event.target.checked);
    }

    return (
        <div>
            Account {account.name} | Balance: ${account.balance} | Payment:
            <Input 
                label={''}
                defaultText={'$0.00'}
                value={account.accountPayment}
                errorMessage={errorMessage}
                handleChange={handleChange}
            />
            <input type='checkbox' checked={account.isSelected} onChange={handleCheck} />
        </div>
    )
}

export default Account