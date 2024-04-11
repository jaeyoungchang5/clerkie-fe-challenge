'use client';
import React, { useEffect, useState } from 'react'
import Input from './Input';
import { AccountType, InputType } from '../enums';


const PaymentInformation = () => {
	const [accountNumber, setAccountNumber] = useState<string>('');
	const [accountConfirmationNumber, setAccountConfirmationNumber] = useState<string>('');
	const [routingNumber, setRoutingNumber] = useState<string>('');
	const [accountType, setAccountType] = useState<AccountType>(AccountType.Checking);

    const [accountErrorMessage, setAccountErrorMessage] = useState<string>('');
    const [accountConfirmationErrorMessage, setAccountConfirmationErrorMessage] = useState<string>('');
    const [routingErrorMessage, setRoutingErrorMessage] = useState<string>('');
    const [accountTypeErrorMessage, setAccountTypeErrorMessage] = useState<string>('');

    useEffect(() => {
        validateAccountInput(accountNumber, accountConfirmationNumber)
    }, [accountNumber, accountConfirmationNumber])

    useEffect(() => {
        validateRoutingInput(routingNumber)
    }, [routingNumber])

    function handleAccountChange(value: string) {
        if (isValidNumber(value)) {
            setAccountNumber(value);
        }
    }

    function handleAccountConfirmationChange(value: string) {
        if (isValidNumber(value)) {
            setAccountConfirmationNumber(value);
        }
    }

    function handleRoutingChange(value: string) {
        if (isValidNumber(value)) {
            setRoutingNumber(value);
        }
    }

    function validateAccountInput(accountNumberValue: string, accountNumberConfirmationValue: string) {
        let tempAccountErrorMessage: string = '';
        let tempAccountConfirmationErrorMessage: string = '';

        if (!isValidAccount(accountNumberValue)) {
            tempAccountErrorMessage = 'Account number is invalid';
        }
        if (accountNumberConfirmationValue !== accountNumberValue) {
            tempAccountConfirmationErrorMessage = 'Account numbers do not match';
        }

        setAccountErrorMessage(tempAccountErrorMessage);
        setAccountConfirmationErrorMessage(tempAccountConfirmationErrorMessage);
    }

    function validateRoutingInput(value: string) {
        let tempErrorMessage: string = '';

        if (!isValidRouting(value)) {
            tempErrorMessage = 'Routing number is invalid';
        }

        setRoutingErrorMessage(tempErrorMessage);
    }

    function isValidNumber(value: string): boolean {
        if (value === '') return true;
        if (isNaN(+value)) return false;
        const regex = new RegExp(/^\d+$/)
        return regex.test(value);
    }

    function isValidAccount(value: string): boolean {
        if (value === '') return true;
        if (!isValidNumber(value)) return false;
        const regex = new RegExp(/^\d{9,18}$/);
        return regex.test(value);
    }

    function isValidRouting(value: string): boolean {
        if (value === '') return true;
        if (!isValidNumber(value)) return false;
        const regex = new RegExp(/^\d{9}$/);
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
                onChange={handleAccountChange}
            />
            <Input 
                label={'Confirm Account Number'}
                defaultText={'Account number'}
                value={accountConfirmationNumber}
                errorMessage={accountConfirmationErrorMessage}
                onChange={handleAccountConfirmationChange}
            />
            <Input 
                label={'Routing Number'}
                defaultText={'Routing number'}
                value={routingNumber}
                errorMessage={routingErrorMessage}
                onChange={handleRoutingChange}
            />
        </div>
    )
}

export default PaymentInformation