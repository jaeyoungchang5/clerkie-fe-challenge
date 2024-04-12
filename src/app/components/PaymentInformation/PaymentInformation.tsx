'use client';
import React, { useEffect, useState } from 'react'
import Input from '../Common/Input';
import RadioGroup from './RadioGroup';
import Title from '../Common/Title';
import { PaymentInfoProps, RadioButtonOption } from '../../types';
import { isValidAccount, isValidNumber, isValidRouting } from '@/app/utilities/';
import { demoOptions } from '../../../../demo_data';

const PaymentInformation = ({ updateValidity }: PaymentInfoProps) => {
	const [accountNumber, setAccountNumber] = useState<string>('');
	const [accountConfirmationNumber, setAccountConfirmationNumber] = useState<string>('');
	const [routingNumber, setRoutingNumber] = useState<string>('');
    const accountOptions: RadioButtonOption[] = demoOptions;
    const [accountErrorMessage, setAccountErrorMessage] = useState<string>('');
    const [accountConfirmationErrorMessage, setAccountConfirmationErrorMessage] = useState<string>('');
    const [routingErrorMessage, setRoutingErrorMessage] = useState<string>('');

    useEffect(() => {
        validateAccountInput(accountNumber, accountConfirmationNumber)
    }, [accountNumber, accountConfirmationNumber])

    useEffect(() => {
        validateRoutingInput(routingNumber)
    }, [routingNumber])

    useEffect(() => {
        if (isValidAccount(accountNumber) && isValidAccount(accountConfirmationNumber) && isValidRouting(routingNumber)) {
            updateValidity(true)
        } else {
            updateValidity(false);
        }
    }, [accountNumber, accountConfirmationNumber, routingNumber])

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

        if (accountNumberValue !=='' && !isValidAccount(accountNumberValue)) {
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

        if (value !=='' && !isValidRouting(value)) {
            tempErrorMessage = 'Routing number is invalid';
        }

        setRoutingErrorMessage(tempErrorMessage);
    }

    

    return (
        <div className='flex flex-col'>
            <div className='mb-4'>
                <Title title='Payment Information' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                <Input 
                    name='accountnumber'
                    label={'Account Number'}
                    defaultText={'Account number'}
                    value={accountNumber}
                    errorMessage={accountErrorMessage}
                    onChange={handleAccountChange}
                />
                <Input 
                    name='confirmaccountnumber'
                    label={'Confirm Account Number'}
                    defaultText={'Account number'}
                    value={accountConfirmationNumber}
                    errorMessage={accountConfirmationErrorMessage}
                    onChange={handleAccountConfirmationChange}
                />
                <Input 
                    name='routingnumber'
                    label={'Routing Number'}
                    defaultText={'Routing number'}
                    value={routingNumber}
                    errorMessage={routingErrorMessage}
                    onChange={handleRoutingChange}
                />
                <RadioGroup options={accountOptions} />
            </div>
        </div>
    )
}

export default PaymentInformation