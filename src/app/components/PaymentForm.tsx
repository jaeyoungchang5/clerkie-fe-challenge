'use client';
import React, { useState } from 'react'
import PaymentInformation from './PaymentInformation/PaymentInformation'
import PaymentDetails from './PaymentDetails/PaymentDetails'
import Button from './Common/Button';
import Success from './Common/Success';
import { AccountType, FormResponse, FormResponseNames, PaymentFormProps } from '@/app/types';
import { currencyToNum, isValidAccount, isValidRouting } from '@/app/utilities';

const PaymentForm = ({ onSubmit }: PaymentFormProps) => {
	const [didSubmit, setDidSubmit] = useState<boolean>(false);
	const [isPaymentInfoValid, setIsPaymentInfoValid] = useState<boolean>(false);
	const [isPaymentDetailValid, setIsPaymentDetailValid] = useState<boolean>(false);

	function submitForm(rawData: FormData) {
		const formData: FormResponse = {
			accountNumber: null,
			routingNumber: null,
			accountType: null,
			paymentAmount: null,
			accountPayments: [],
			errors: []
		}

		let accountNumber = rawData.get(FormResponseNames.AccountNumber)?.toString();
		let accountConfirmationNumber = rawData.get(FormResponseNames.ConfirmAccountNumber)?.toString();
		if (accountNumber && accountConfirmationNumber && isValidAccount(accountNumber) && isValidAccount(accountConfirmationNumber)) {
			formData.accountNumber = accountNumber
		} else {
			formData.errors.push('Invalid account number');
		}

		let routingNumber = rawData.get(FormResponseNames.RoutingNumber)?.toString();
		if (routingNumber && isValidRouting(routingNumber)) {
			formData.routingNumber = routingNumber
		} else {
			formData.errors.push('Invalid routing number');
		}

		let accountType = rawData.get(FormResponseNames.AccountType)?.toString();
		switch (accountType) {
			case AccountType.Checking:
			case AccountType.Savings:
				formData.accountType = accountType;
				break;
			default:
				formData.errors.push('Invalid account type');
		}

		formData.paymentAmount = currencyToNum(rawData.get(FormResponseNames.PaymentAmount)?.toString() || '');

		rawData.forEach((value, key) => {
			if (key.startsWith(FormResponseNames.AccountPaymentPrefix, 0)) {
				formData.accountPayments.push({
					name: key,
					accountPayment: currencyToNum(value.toString())
				})
			}
		})
		if (formData.accountPayments.length == 0) {
			formData.errors.push('No accounts selected');
		}

		if (formData.errors.length == 0) {
			setDidSubmit(true);
			onSubmit(formData);	
		}
	}

	function updatePaymentInfoValidity(isValid: boolean) {
		setIsPaymentInfoValid(isValid);
	}

	function updatePaymentDetailValidity(isValid: boolean) {
		setIsPaymentDetailValid(isValid);
	}

	return (
		<div className='flex items-center justify-center w-full h-full md:w-[700px] min-w-60 border rounded-lg p-6 font-normal text-black text-left text-base bg-white border-gray-500'>
			{
				!didSubmit ?
				<form action={submitForm} className='flex w-full flex-col'>
					<PaymentInformation updateValidity={updatePaymentInfoValidity} />
					<PaymentDetails updateValidity={updatePaymentDetailValidity} />
					<Button disabled={!isPaymentInfoValid || !isPaymentDetailValid} text='Submit' type='submit' />
				</form>
				: <Success successText='Form submitted!' />
			}
		</div>
	)
}

export default PaymentForm