import React from 'react'
import { SuccessProps } from '@/app/types'

const Success = ({ successText }: SuccessProps) => {
    return (
        <div className='flex w-full h-96 items-center justify-center'>
            <p className='flex'>{successText}</p>
        </div>
    )
    }

export default Success