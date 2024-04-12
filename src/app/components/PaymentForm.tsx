'use client';
import React, { useState } from 'react'
import PaymentInformation from './PaymentInformation'
import PaymentDetails from './PaymentDetails'
import Button from './Common/Button';
import Success from './Common/Success';

const PaymentForm = () => {
	const [didSubmit, setDidSubmit] = useState<boolean>(false);
	const [isPaymentInfoValid, setIsPaymentInfoValid] = useState<boolean>(true);
	const [isPaymentDetailValid, setIsPaymentDetailValid] = useState<boolean>(true);

	function submitForm(formData: FormData) {
		console.log(formData);
		setDidSubmit(true);
	}

	function updatePaymentInfoValidity(isValid: boolean) {
		setIsPaymentInfoValid(isValid);
	}

	function updatePaymentDetailValidity(isValid: boolean) {
		setIsPaymentDetailValid(isValid);
	}

	return (
		<div className='flex border rounded-lg p-6 bg-white border-gray-500'>
			{
				!didSubmit ?
				<form action={submitForm} className='flex flex-col'>
					<PaymentInformation updateValidity={updatePaymentInfoValidity} />
					<PaymentDetails updateValidity={updatePaymentDetailValidity} />
					<Button disabled={!isPaymentInfoValid || !isPaymentDetailValid} text='Submit' type='submit' />
				</form>
				: <Success />
			}
		</div>
	)
}

export default PaymentForm