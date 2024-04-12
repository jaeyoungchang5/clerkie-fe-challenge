'use client';
import React, { useEffect, useMemo, useState } from 'react'
import CurrencyInput from './Common/CurrencyInput';
import AccountsHeader from './Account/AccountsHeader';
import Account from './Account/Account';
import { AccountDetails, PaymentInfoProps } from '../types/';

const PaymentDetails = ({ updateValidity }: PaymentInfoProps) => {
    const [paymentAmount, setPaymentAmount] = useState<number>(0);
    const [paymentErrorMessage, setPaymentErrorMessage] = useState<string>('');
    const [accounts, setAccounts] = useState<AccountDetails[]>([
        { name: 'A', balance: 45156, isSelected: false, accountPayment: 0 },
        { name: 'B', balance: 14901, isSelected: false, accountPayment: 0 },
        { name: 'C', balance:  5438, isSelected: false, accountPayment: 0 },
    ]);

    const numSelectedAccounts: number = useMemo((): number => {
        return accounts.reduce((sum, current) => sum + (current.isSelected ? 1 : 0), 0);
    }, [accounts]);

    useEffect(() => {
        validatePaymentInput(paymentAmount);
    }, [paymentAmount])

    useEffect(() => {
        if (numSelectedAccounts == 0 || paymentAmount == 0 || !isValidPaymentAmount(paymentAmount)) {
            updateValidity(false);
            return;
        }
        for (let account of accounts) {
            if (account.accountPayment > account.balance) {
                updateValidity(false);
                return;
            }
        }
        updateValidity(true);
    }, [paymentAmount, accounts])

    const totalBalance = accounts.reduce((sum, current) => sum + current.balance, 0);

    function updateAccounts(accountsObj: AccountDetails[], totalPayment: number) {
        let subtotal: number = accountsObj.reduce((sum, current) => sum + (current.isSelected ? current.balance : 0), 0);
        let updatedList: AccountDetails[] = accountsObj.map(account => {
            if (!account.isSelected) {
                return {...account, accountPayment: 0}
            } else {
                return {...account, accountPayment: (account.balance / subtotal) * totalPayment}
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

        updateAccounts(updatedList, paymentAmount ?? 0);
    }

    function handlePaymentAmountChange(value: number) {
        if (isNaN(value)) {
            return;
        }

        setPaymentAmount(value);
        updateAccounts(accounts, value ?? 0);
    }

    function handleAccountPaymentChange(name: string, value: number) {
        let updatedList: AccountDetails[] = accounts.map(account => {
            if (account.name !== name) {
                return account;
            }

            setPaymentAmount((paymentAmount || 0) + value - account.accountPayment);
            return {...account, accountPayment: value}
        })
        setAccounts(updatedList)
    }

    function validatePaymentInput(value: number) {
        let tempErrorMessage: string = '';
        if (!isValidPaymentAmount(value)) {
            tempErrorMessage = 'Payment cannot exceed total balance';
        }
        setPaymentErrorMessage(tempErrorMessage);
    }

    function isValidPaymentAmount(value: number): boolean { 
        if (value > totalBalance) return false;
        return true;
    }

    return (
        <div>
            Payment Detail
            <CurrencyInput
                name='paymentamount'
                label={'Payment Amount'}
                value={paymentAmount}
                errorMessage={paymentErrorMessage}
                onChange={handlePaymentAmountChange}
                disabled={false}
            />
 
            <AccountsHeader numSelectedAccounts={numSelectedAccounts} totalBalance={totalBalance} />

            {Object.entries(accounts).map(([ key, account ]) => {
                return (
                    <Account 
                        key={key} 
                        account={account} 
                        updateChecked={handleCheckedUpdate}
                        updatePaymentAmount={handleAccountPaymentChange}
                    />
                )
            })}
        </div>
    )
}

export default PaymentDetails