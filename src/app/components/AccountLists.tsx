import React from 'react'
import Account from './Account'
import { AccountDetails, Value } from '../types'

interface AccountListsProps {
    accounts: AccountDetails[],
    paymentAmount: Value,
    totalBalance: number,
}

const AccountLists = ({ accounts, paymentAmount, totalBalance }: AccountListsProps) => {
    return (
        <div>
            Account Lists
            <p>Total Balance: ${totalBalance}</p>

            {accounts.map((account, key) => {
                return (
                    <div key={key}>
                        <Account key={key} account={account} totalBalance={totalBalance} paymentAmount={paymentAmount} />
                    </div>
                )
            })}
        </div>
    )
}

export default AccountLists