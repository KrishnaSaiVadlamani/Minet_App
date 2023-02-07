import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SideNavCompnent from '.'

it('should renders the Side Nav', async () => {
  render(
    <BrowserRouter>
      <SideNavCompnent />
    </BrowserRouter>
  )
  const ReactElement = screen.getByTestId('sideNav')
  expect(ReactElement).toBeInTheDocument
  const Trade = screen.getByTestId('Trade')
  if (Trade) {
    fireEvent.click(Trade)
    expect(Trade).toBeInTheDocument
  }
})
