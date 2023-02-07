import React from 'react'
import { render, screen } from '@testing-library/react'
import TabsComponent from './index'
jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

it('Should check grapg on detail screen', () => {
  render(
    <TabsComponent
      investedAmount={5676}
      currencyData={[40, 43, 45, 42, 44, 46]}
      percentageChange={-0.02}
      categories={['Jun 8', 'Jun 15', 'Jun 22', 'Jun 30', 'Jul 7', 'Jul 13']}
      coinBalance={0.0002563985}
      currentValue={85364.96}
      coinName='Bitcoin' transactions={[]}    />
  )
  const element = screen.getAllByTestId('tabs')
  expect(element).toBeDefined()
})
