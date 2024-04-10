import React, { useState } from 'react'
import PaymentInformation from './PaymentInformation'
import PaymentDetails from './PaymentDetails'

const PaymentForm = () => {

	return (
		<div>
			<form>
				<PaymentInformation />
				<PaymentDetails />
			</form>
		</div>
	)
}

export default PaymentForm