'use client';
import React, { useEffect, useState } from 'react'
import Input from './Input';
import { AccountType } from '../enums';


const PaymentInformation = () => {
	const [accountNumber, setAccountNumber] = useState<number>();
	const [accountConfirmationNumber, setAccountConfirmationNumber] = useState<number>();
	const [routingNumber, setRoutingNumber] = useState<number>();
	const [accountType, setAccountType] = useState<AccountType>(AccountType.Checking);

    const [accountErrorMessage, setAccountErrorMessage] = useState<string>('');
    const [accountConfirmationErrorMessage, setAccountConfirmationErrorMessage] = useState<string>('');
    const [routingErrorMessage, setRoutingErrorMessage] = useState<string>('');
    const [accountTypeErrorMessage, setAccountTypeErrorMessage] = useState<string>('');

    function handleAccountChange(value: number) {
        if (isNaN(value)) {
            return;
        }
        setAccountNumber(value);
        validateAccountInput(value, accountConfirmationNumber);
    }

    function handleAccountConfirmationChange(value: number) {
        if (isNaN(value)) {
            return;
        }
        setAccountConfirmationNumber(value);
        validateAccountInput(accountNumber, value);
    }

    function handleRoutingChange(value: number) {
        if (isNaN(value)) {
            return;
        }
        setRoutingNumber(value);
        validateRoutingInput(value);
    }

    function validateAccountInput(accountNumberValue: number | undefined, accountNumberConfirmationValue: number | undefined) {
        let tempAccountErrorMessage: string = '';
        let tempAccountConfirmationErrorMessage: string = '';
        
        if (accountNumberValue && accountNumberValue !== 0 && !validateAccountValue(accountNumberValue)) {
            tempAccountErrorMessage = 'Account number is invalid';
        }
        if (accountNumberConfirmationValue && accountNumberConfirmationValue !== 0 && accountNumberConfirmationValue !== accountNumberValue) {
            tempAccountConfirmationErrorMessage = 'Account numbers do not match';
        }

        setAccountErrorMessage(tempAccountErrorMessage);
        setAccountConfirmationErrorMessage(tempAccountConfirmationErrorMessage);
    }

    function validateRoutingInput(value: number) {
        if (value === 0 || validateRoutingValue(value)) {
            setRoutingErrorMessage('');
        } else {
            setRoutingErrorMessage('Routing number is invalid');
        }
    }

    function validateAccountValue(value: number | undefined): boolean {
        if (!value) return true;
        const regex = new RegExp('^[0-9]{9,18}$');
        return regex.test(value.toString());
    }

    function validateRoutingValue(value: number | undefined): boolean {
        if (!value) return true;
        const regex = new RegExp('^[0-9]{9}$');
        return regex.test(value.toString());
    }

    return (
        <div>
            Payment Information
            <Input 
                label={'Account Number'}
                defaultText={'Account number'}
                value={accountNumber}
                errorMessage={accountErrorMessage}
                handleChange={handleAccountChange}
            />
            <Input 
                label={'Confirm Account Number'}
                defaultText={'Account number'}
                value={accountConfirmationNumber}
                errorMessage={accountConfirmationErrorMessage}
                handleChange={handleAccountConfirmationChange}
            />
            <Input 
                label={'Routing Number'}
                defaultText={'Routing number'}
                value={routingNumber}
                errorMessage={routingErrorMessage}
                handleChange={handleRoutingChange}
            />
        </div>
    )
}

export default PaymentInformation