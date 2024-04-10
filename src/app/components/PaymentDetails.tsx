'use client';
import React, { useEffect, useState } from 'react'
import NumberInput from './NumberInput'
import AccountLists from './AccountLists';
import { AccountDetails, Value } from '../types';

const PaymentDetails = () => {
    const [paymentAmount, setPaymentAmount] = useState<Value>( {value: 0, errorMessage: ''} );
    const [accounts, setAccounts] = useState<AccountDetails[]>([
        { name: 'A', balance: 45156, isSelected: true },
        { name: 'B', balance: 14901, isSelected: true },
        { name: 'C', balance:  5438, isSelected: true }
    ]);
    const [totalBalance, setTotalBalance] = useState<number>(() => {
        let sum: number = 0;
        for (let account of accounts) {
            sum += account.balance;
        }
        return sum;
    });


    function handlePaymentAmountChange(value: string) {
        if (isNaN(+value)) {
            return;
        }

        setPaymentAmount((prev) => ({
            ...prev,
            value: +value
        }))
    }

    return (
        <div>
            Payment Details
            <NumberInput
                title={'Payment Amount'}
                defaultText={'0.00'}
                value={paymentAmount}
                handleChange={handlePaymentAmountChange}
            />

            <AccountLists accounts={accounts} paymentAmount={paymentAmount} totalBalance={totalBalance} />
        </div>
    )
}

export default PaymentDetails