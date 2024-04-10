'use client';
import React, { useEffect, useState } from 'react'
import NumberInput from './NumberInput';
import { AccountType } from '../enums';
import { Value } from '../types';


const PaymentInformation = () => {
	const [accountNumber, setAccountNumber] = useState<Value>( {value: 0, errorMessage: ''} );
	const [accountNumberConfirm, setAccountNumberConfirm] = useState<Value>( {value: 0, errorMessage: ''} );
	const [routingNumber, setRoutingNumber] = useState<Value>( {value: 0, errorMessage: ''} );
	const [accountType, setAccountType] = useState<AccountType>(AccountType.Checking);

    function handleAccountChange(value: number) {
        if (isNaN(+value)) {
            return;
        }
        validateAccountInput(+value, accountNumberConfirm.value);
    }

    function handleAccountConfirmChange(value: number) {
        if (isNaN(+value)) {
            return;
        }
        validateAccountInput(accountNumber.value, +value);
    }

    function handleRoutingChange(value: number) {
        if (isNaN(+value)) {
            return;
        }
        if (value === 0 || validateRoutingValue(value)) {
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

    function validateAccountInput(accountNumberValue: number, accountNumberConfirmValue: number) {
        if (accountNumberValue === 0 || validateAccountValue(accountNumberValue)) {
            updateAccountNumber(accountNumberValue, true, '');
        } else {
            updateAccountNumber(accountNumberValue, false, 'Account number is invalid');
        }
        if (accountNumberConfirmValue === 0 || accountNumberValue === accountNumberConfirmValue) {
            updateAccountConfirmNumber(accountNumberConfirmValue, true, '');
        } else {
            updateAccountConfirmNumber(accountNumberConfirmValue, false, 'Account numbers do not match');
        }        
    }

    function validateAccountValue(value: number): boolean {
        const regex = new RegExp('^[0-9]{9,18}$');
        return regex.test(value.toString());
    }

    function validateRoutingValue(value: number): boolean {
        const regex = new RegExp('^[0-9]{9}$');
        return regex.test(value.toString());
    }

    function updateAccountNumber(accountNumberValue: number, isValid: boolean, errorMessage: string) {
        setAccountNumber({
            value: accountNumberValue,
            errorMessage: errorMessage
        });
    }

    function updateAccountConfirmNumber(accountNumberValue: number, isValid: boolean, errorMessage: string) {
        setAccountNumberConfirm({
            value: accountNumberValue,
            errorMessage: errorMessage
        });
    }

    return (
        <div>
            Payment Information
            <NumberInput 
                title={'Account Number'}
                defaultText={'Account number'}
                value={accountNumber}
                handleChange={handleAccountChange}
            />
            <NumberInput 
                title={'Confirm Account Number'}
                defaultText={'Account number'}
                value={accountNumberConfirm}
                handleChange={handleAccountConfirmChange}
            />
            <NumberInput 
                title={'Routing Number'}
                defaultText={'Routing number'}
                value={routingNumber}
                handleChange={handleRoutingChange}
            />
        </div>
    )
}

export default PaymentInformation