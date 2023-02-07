import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

it('should renders the Header ', () => {
  const fn = jest.fn()
  render(<BrowserRouter><Header pageName="Trade" /></BrowserRouter>)
  const wrapper = screen.getByTestId('Header')
  expect(wrapper).toBeInTheDocument()
})
