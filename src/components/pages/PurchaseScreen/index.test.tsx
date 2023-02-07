import React from 'react'
import '@testing-library/jest-dom'
import axios from 'axios'
import PurchasePage from '.'
import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import { currencies } from '../../../utils/constants'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const wallet = {
  id: 1,
  name: 'Cash',
  balance: 5000,
  invested_amount: 5000,
}

jest.clearAllMocks()

describe('Purchase page tests', () => {
  test('Whether purchase page is rendering', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { results: currencies } })
    )

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { results: currencies[0] } })
    )

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { results: wallet } })
    )

    render(
      <BrowserRouter>
        <PurchasePage />
      </BrowserRouter>
    )
    await waitFor(() => {
      const element = screen.getByTestId('purchase-page')
      expect(element).toBeInTheDocument()
      const btn = screen.getByText('BUY NOW')
      expect(btn).toBeInTheDocument()
      fireEvent.click(btn)
    })
  })
})
