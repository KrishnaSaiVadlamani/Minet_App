import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PaymentAndDetailsCard from '.'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'

describe('Payment and details tests', () => {
  test('Whether card is rendering or not', () => {
    render(
      <PaymentAndDetailsCard
        variant={'payment'}
        title={'Total balance'}
        icon={<MonetizationOnOutlinedIcon />}
      />
    )
  })
})
