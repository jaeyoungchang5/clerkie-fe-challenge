'use client';
import React, { useEffect, useState } from 'react'
import NumberInput from './NumberInput';

enum AccountType {
	Checking,
	Savings
}

type PaymentValue = {
    value: string,
    errorMessage: string,
}

const PaymentInformation = () => {
	const [accountNumber, setAccountNumber] = useState<PaymentValue>( {value: '', errorMessage: ''} );
	const [accountNumberConfirm, setAccountNumberConfirm] = useState<PaymentValue>( {value: '', errorMessage: ''} );
	const [routingNumber, setRoutingNumber] = useState<PaymentValue>( {value: '', errorMessage: ''} );
	const [accountType, setAccountType] = useState<AccountType>(AccountType.Checking);

    function handleAccountChange(value: string) {
        if (isNaN(+value)) {
            return;
        }
        validateAccountInput(value, accountNumberConfirm.value);
    }

    function handleAccountConfirmChange(value: string) {
        if (isNaN(+value)) {
            return;
        }
        validateAccountInput(accountNumber.value, value);
    }

    function handleRoutingChange(value: string) {
        if (isNaN(+value)) {
            return;
        }
        if (value === '' || validateRoutingValue(value)) {
            setRoutingNumber({
                value: value,
                errorMessage: ''
            });
        } else {
            setRoutingNumber({
                value: value,
                errorMessage: 'Routing number is invalid'
            });
        }
    }

    function validateAccountInput(accountNumberValue: string, accountNumberConfirmValue: string) {
        if (accountNumberValue === '' || validateAccountValue(accountNumberValue)) {
            updateAccountNumber(accountNumberValue, true, '');
        } else {
            updateAccountNumber(accountNumberValue, false, 'Account number is invalid');
        }
        if (accountNumberConfirmValue === '' || accountNumberValue === accountNumberConfirmValue) {
            updateAccountConfirmNumber(accountNumberConfirmValue, true, '');
        } else {
            updateAccountConfirmNumber(accountNumberConfirmValue, false, 'Account numbers do not match');
        }        
    }

    function validateAccountValue(value: string): boolean {
        const regex = new RegExp('^[0-9]{9,18}$');
        return regex.test(value);
    }

    function validateRoutingValue(value: string): boolean {
        const regex = new RegExp('^[0-9]{9}$');
        return regex.test(value);
    }

    function updateAccountNumber(accountNumberValue: string, isValid: boolean, errorMessage: string) {
        setAccountNumber({
            value: accountNumberValue,
            errorMessage: errorMessage
        });
    }

    function updateAccountConfirmNumber(accountNumberValue: string, isValid: boolean, errorMessage: string) {
        setAccountNumberConfirm({
            value: accountNumberValue,
            errorMessage: errorMessage
        });
    }

    return (
        <div>
            Payment Information
            <NumberInput 
                title={"Account Number"}
                defaultText={"Account number"}
                value={accountNumber.value}
                handleChange={handleAccountChange}
                errorMessage={accountNumber.errorMessage}
            />
            <NumberInput 
                title={"Confirm Account Number"}
                defaultText={"Account number"}
                value={accountNumberConfirm.value}
                handleChange={handleAccountConfirmChange}
                errorMessage={accountNumberConfirm.errorMessage}
            />
            <NumberInput 
                title={"Routing Number"}
                defaultText={"Routing number"}
                value={routingNumber.value}
                handleChange={handleRoutingChange}
                errorMessage={routingNumber.errorMessage}
            />
        </div>
    )
}

export default PaymentInformation