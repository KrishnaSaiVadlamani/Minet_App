import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PaymentSuccessPage from '.'


it('should renders the buy', async () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/', search: '?value=teresa_teng' , state:{ quantity:0.02563,transactionType: 'buy'}}]}>
      <PaymentSuccessPage />
    </MemoryRouter>
  )
})

it('should renders the sell', async () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/', search: '?value=teresa_teng' , state:{ quantity:0.02563,transactionType: 'sell'}}]}>
      <PaymentSuccessPage />
    </MemoryRouter>
  )
})