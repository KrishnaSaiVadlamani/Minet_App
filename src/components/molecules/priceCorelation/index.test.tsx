import React from 'react'
import { render, screen } from '@testing-library/react'
import PriceCorelation from '.'
import '@testing-library/jest-dom'

it('should renders Icon With Typography having text and subtext', async () => {
  render(<PriceCorelation />)
  let wrapper = screen.getByTestId('price-corelation')
  expect(wrapper).toBeInTheDocument()
})
