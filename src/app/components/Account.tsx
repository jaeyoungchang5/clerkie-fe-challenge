import React, { useEffect, useState } from 'react'
import { AccountDetails, Value } from '../types';

interface AccountProps {
    account: AccountDetails,
    paymentAmount: Value,
    totalBalance: number,
}

const Account = ({ account, paymentAmount, totalBalance }: AccountProps) => {
    const [payment, setPayment] = useState<number>(0);

    useEffect(() => {
        setPayment( (account.balance / totalBalance) * paymentAmount.value );
    }, [paymentAmount])

    return (
        <div>Account {account.name} | Balance: ${account.balance} | Payment: ${payment.toFixed(2)}</div>
    )
}

export default Account