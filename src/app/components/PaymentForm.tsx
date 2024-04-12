'use client';
import React, { useState } from 'react'
import PaymentInformation from './PaymentInformation/PaymentInformation'
import PaymentDetails from './PaymentDetails/PaymentDetails'
import Button from './Common/Button';
import Success from './Common/Success';

const PaymentForm = () => {
	const [didSubmit, setDidSubmit] = useState<boolean>(false);
	const [isPaymentInfoValid, setIsPaymentInfoValid] = useState<boolean>(false);
	const [isPaymentDetailValid, setIsPaymentDetailValid] = useState<boolean>(false);

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
		<div className='flex items-center w-full md:w-[700px] min-w-60 justify-center border rounded-lg p-6 text-black bg-white border-gray-500'>
			{
				!didSubmit ?
				<form action={submitForm} className='flex w-full flex-col'>
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