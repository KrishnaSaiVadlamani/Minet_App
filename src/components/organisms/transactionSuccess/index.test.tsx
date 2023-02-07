import React from 'react'
import { render, screen } from '@testing-library/react'
import TransactionSuccess from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

it('should renders the Success buy card', async () => {
  render(<BrowserRouter><TransactionSuccess price="1000" successType="sell" symbol={''} /></BrowserRouter>)
  const wrapper = screen.getByTestId('transaction-success-container')
  expect(wrapper).toBeInTheDocument()


})
it('should renders the Success sell card', async () => {
  render(<BrowserRouter><TransactionSuccess price="1000" successType="buy" symbol={''} /></BrowserRouter>)
   const wrapper = screen.getByTestId('transaction-success-container')
   expect(wrapper).toBeInTheDocument()
})
