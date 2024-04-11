'use client';
import React, { FormEvent, useState } from 'react'
import PaymentInformation from './PaymentInformation'
import PaymentDetails from './PaymentDetails'
import Button from './Button';

const PaymentForm = () => {
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