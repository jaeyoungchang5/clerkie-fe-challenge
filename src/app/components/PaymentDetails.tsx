'use client';
import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import AccountsHeader from './AccountsHeader';
import { AccountDetails, Value } from '../types';
import Account from './Account';

const PaymentDetails = () => {
    const [paymentAmount, setPaymentAmount] = useState<number>();
    const [paymentErrorMessage, setPaymentErrorMessage] = useState<string>('');
    const [accounts, setAccounts] = useState<AccountDetails[]>([
        { name: 'A', balance: 45156, isSelected: false, accountPayment: 0 },
        { name: 'B', balance: 14901, isSelected: false, accountPayment: 0 },
        { name: 'C', balance:  5438, isSelected: false, accountPayment: 0 },
    ]);

    const totalBalance = accounts.reduce((sum, current) => sum + current.balance, 0);

    useEffect(() => {
        updateAccounts(accounts)
    }, [paymentAmount]);

    function updateAccounts(accountsObj: AccountDetails[]) {
        let subtotal: number = accountsObj.reduce((sum, current) => sum + (current.isSelected ? current.balance : 0), 0);
        let updatedList: AccountDetails[] = accountsObj.map(account => {
            if (!account.isSelected || !paymentAmount) {
                return {...account, accountPayment: 0}
            } else {
                return {...account, accountPayment: (account.balance / subtotal) * paymentAmount}
            }
        })
        setAccounts(updatedList);
    }

    function handleCheckedUpdate(name: string, isChecked: boolean) {
        let updatedList: AccountDetails[] = accounts.map(account => {
            if (account.name !== name) {
                return account;
            }
            return {...account, isSelected: isChecked}
        })
        
        updateAccounts(updatedList);
    }

    function handlePaymentAmountChange(value: number) {
        if (isNaN(value)) {
            return;
        }

        setPaymentAmount(value);
    }

    return (
        <div>
            Payment Detail
            <Input
                label={'Payment Amount'}
                defaultText={'$0.00'}
                value={paymentAmount}
                errorMessage={paymentErrorMessage}
                handleChange={handlePaymentAmountChange}
            />
 
            <AccountsHeader numSelectedAccounts={3} totalBalance={totalBalance} />

            {Object.entries(accounts).map(([ key, account ]) => {
                return (
                    <Account 
                        key={key} 
                        account={account} 
                        updateChecked={handleCheckedUpdate}
                        updatePaymentAmount={handlePaymentAmountChange}
                    />
                )
            })}
        </div>
    )
}

export default PaymentDetails