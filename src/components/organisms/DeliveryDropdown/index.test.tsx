import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import DeliveryDropdown from '.'

describe('Delivery dropdown tests', () => {
  test('Whether element is rendering', () => {
    render(
      <DeliveryDropdown instantTime={'2 hours'} fee={'0.001'} title={'title'} symbol={''} />
    )
    const deliveryDropdown = screen.getByTestId('dropdown')
    expect(deliveryDropdown).toBeInTheDocument()
  })

  test('whether menu is opening or not', () => {
    render(
      <DeliveryDropdown instantTime={'2 hours'} fee={'0.001'} title={'title'} symbol={''} />
    )
    const deliveryDropdown = screen.getByTestId('dropdown')
    fireEvent.click(deliveryDropdown)
  })
})
