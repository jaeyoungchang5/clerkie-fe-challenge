'use client';
import React, { useState } from 'react'
import PaymentInformation from './PaymentInformation'
import PaymentDetails from './PaymentDetails'
import Button from './Common/Button';

const PaymentForm = () => {
	const [isPaymentInfoValid, setIsPaymentInfoValid] = useState<boolean>(true);
	const [isPaymentDetailValid, setIsPaymentDetailValid] = useState<boolean>(true);

	function submitForm(formData: FormData) {
		console.log(formData);
	}

	function updatePaymentInfoValidity(isValid: boolean) {
		setIsPaymentInfoValid(isValid);
	}

	function updatePaymentDetailValidity(isValid: boolean) {
		setIsPaymentDetailValid(isValid);
	}

	return (
		<div className='flex border rounded-lg p-6 bg-white border-gray-500'>
			<form action={submitForm} className='flex flex-col'>
				<PaymentInformation updateValidity={updatePaymentInfoValidity} />
				<PaymentDetails updateValidity={updatePaymentDetailValidity} />
				<Button disabled={!isPaymentInfoValid || !isPaymentDetailValid} text='Submit' type='submit' />
			</form>
		</div>
	)
}

export default PaymentForm