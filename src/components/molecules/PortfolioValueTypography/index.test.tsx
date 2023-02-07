import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PortfolioValueTypographyComponent from '.'

it('should renders the Portfolio Value Typography with positive trend', async () => {
  const fn = jest.fn()
  render(
    <PortfolioValueTypographyComponent isInDashBoardPage={true} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={9.0} width='185px'/>
  )
  const element = screen.getByTestId('PortfolioValueTypography')
  expect(element).toBeInTheDocument()
})

it('should renders the Portfolio Value Typography with negative trend', async () => {
    const fn = jest.fn()
    render(
      <PortfolioValueTypographyComponent isInDashBoardPage={true} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={-9.0} width='185px'/>
    )
    const element = screen.getByTestId('PortfolioValueTypography')
    expect(element).toBeInTheDocument()
})

it('should renders the Portfolio Value Typography with positive trend in  details screen', async () => {
    const fn = jest.fn()
    render(
      <PortfolioValueTypographyComponent isInDashBoardPage={false} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={-9.0} width='185px'/>
    )
    const element = screen.getByTestId('PortfolioValueTypography')
    expect(element).toBeInTheDocument()
})

it('should renders the Portfolio Value Typography with negative trend in  details screen', async () => {
    const fn = jest.fn()
    render(
      <PortfolioValueTypographyComponent isInDashBoardPage={false} investmentValue={56795.9} typeOfInvestment='Total Investment' percentChange={9.0} width='185px'/>
    )
    const element = screen.getByTestId('PortfolioValueTypography')
    expect(element).toBeInTheDocument()
})