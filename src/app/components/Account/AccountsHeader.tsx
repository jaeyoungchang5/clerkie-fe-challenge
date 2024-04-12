import React from 'react'
import { AccountsHeaderProps } from '../../types/'
import { numToCurrency } from '@/app/utilities/'

const AccountsHeader = ({ numSelectedAccounts, totalBalance }: AccountsHeaderProps) => {
    return (
        <div>
            Account Lists: {numSelectedAccounts} Account{numSelectedAccounts !== 1 && 's'} Selected
            <p>Total Balance: {numToCurrency(totalBalance)}</p>
        </div>
    )
}

export default AccountsHeader