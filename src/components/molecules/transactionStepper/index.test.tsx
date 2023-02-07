import React from 'react'
import { render, screen } from '@testing-library/react'
import TransactionStepper from '.'
import '@testing-library/jest-dom'

it('should renders the crypto card', async () => {
  render(<TransactionStepper symbol={''} />)
  const wrapper = screen.getByTestId('transaction-stepper')
  expect(wrapper).toBeInTheDocument()
})
