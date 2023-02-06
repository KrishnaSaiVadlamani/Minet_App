import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import theme from '../../../theme'
import GraphComponent from './index'

export default {
  title: 'organisms/GraphComponent',
  component: GraphComponent,
} as ComponentMeta<typeof GraphComponent>

const Template: ComponentStory<typeof GraphComponent> = (args: any) => (
  <GraphComponent {...args} />
)

export const GraphComponentStory = Template.bind({})
GraphComponentStory.args = {
  height: '246',
  width: '100%',
  borderColor: theme.palette.graphColor.borderColor,
  fillColor: theme.palette.graphColor.fillColor,
  borderColor2: theme.palette.graphColor.borderColor2,
  fillColor2: theme.palette.graphColor.fillColor2,
  dashboardPage: false,
  categories: ['Jun 8', 'Jun 15', 'Jun 22', 'Jun 30', 'Jul 7', 'Jul 13'],
  data: [40, 43, 45, 42, 44, 46],
  data2: [34, 54, 23, 90, 12, 34],
  investmentValue: 1000002,
  percentChange: +1.2,
  typeOfInvestment: 'Current value',
  investmentValue2: 34000,
  percentChange2: -1.2,
  typeOfInvestment2: 'Bitcoin',
}

