import React from 'react'
import 'jest'
import { render, screen } from '@testing-library/react'
import GraphComponent from './index'
import theme from '../../../theme'
jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))


it('Should check graph on detail screen', () => {
  render(
    <GraphComponent
      height="246"
      width="1224"
      borderColor={theme.palette.graphColor.borderColor}
      fillColor={theme.palette.graphColor.fillColor}
      categories={['Jun 8', 'Jun 15', 'Jun 22', 'Jun 30', 'Jul 7', 'Jul 13']}
      data={[40, 43, 45, 42, 44, 46]}
      investmentValue={1000002}
      percentChange={+1.2}
      typeOfInvestment="Current value" Page={false}    />
  )

  const element = screen.getByTestId('graph-detail')
  expect(element).toBeDefined()
})

