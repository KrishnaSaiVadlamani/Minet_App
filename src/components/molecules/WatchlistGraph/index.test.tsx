import React from 'react'
import { render, screen } from '@testing-library/react'
import WatchlistGraph from '.'
import '@testing-library/jest-dom'
jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

it('should renders the profit Graph card', async () => {
  render(<WatchlistGraph plValue="+1.2%" profit={true} height="60" />)
  const graph = screen.getByTestId('watchlistGraph')
  expect(graph).toBeInTheDocument()
  const text = screen.getByText('+1.2%')
  expect(text).toBeInTheDocument()
})
it('should renders the loss Graph card', async () => {
  render(<WatchlistGraph plValue="-2.2%" profit={false} height="60" />)
  const text = screen.getByText('-2.2%')
  expect(text).toBeInTheDocument()
})
