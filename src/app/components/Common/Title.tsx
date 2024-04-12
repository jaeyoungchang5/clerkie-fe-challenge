import { TitleProps } from '@/app/types'
import React from 'react'

const Title = ({title}: TitleProps) => {
  return (
    <p className='font-medium'>{title}</p>
  )
}

export default Title