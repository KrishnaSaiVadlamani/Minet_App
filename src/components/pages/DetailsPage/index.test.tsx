import {  render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom'
import React from 'react'
import DetailsPage from '.'

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))
it('should renders the currency details screen', async () => {
  render(
    <Router>
      <DetailsPage />
    </Router>
  )
  await waitFor(() => {
    let element = screen.getByTestId('currencyDetails')
    expect(element).toBeInTheDocument
  })
})
