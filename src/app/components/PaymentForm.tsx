'use client';
import React, { FormEvent, useState } from 'react'
import PaymentInformation from './PaymentInformation'
import PaymentDetails from './PaymentDetails'
import Button from './Button';

const PaymentForm = () => {
	const [isPaymentInfoValid, setIsPaymentInfoValid] = useState<boolean>(true);
	const [isPaymentDetailValid, setIsPaymentDetailValid] = useState<boolean>(true);
	function onSubmit(event: FormEvent<HTMLFormElement>) {
		
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<PaymentInformation />
				<PaymentDetails />
				<Button text='Submit' type='submit' />
			</form>
		</div>
	)
}

export default PaymentForm