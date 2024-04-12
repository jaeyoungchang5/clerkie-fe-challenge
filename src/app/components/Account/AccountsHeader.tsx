import React from 'react'
import { AccountsHeaderProps } from '../../types/'
import { numToCurrency } from '@/app/utilities/'
import Title from '../Common/Title'

const AccountsHeader = ({ numSelectedAccounts, totalBalance }: AccountsHeaderProps) => {
    return (
        <div className='flex flex-col md:flex-row justify-between mb-4'>
            <Title title='Account Lists' />
            <p className='text-blue-700'>{numSelectedAccounts} Account{numSelectedAccounts !== 1 && 's'} Selected</p>
            <p className=''>Total Balance: {numToCurrency(totalBalance)}</p>
        </div>
    )
}

export default AccountsHeader