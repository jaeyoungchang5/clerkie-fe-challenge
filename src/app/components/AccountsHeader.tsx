import React from 'react'

interface AccountsHeaderProps {
    numSelectedAccounts: number,
    totalBalance: number
}

const AccountsHeader = ({ numSelectedAccounts, totalBalance }: AccountsHeaderProps) => {
    return (
        <div>
            Account Lists: {numSelectedAccounts} Accounts Selected
            <p>Total Balance: ${totalBalance}</p>

        </div>
    )
}

export default AccountsHeader