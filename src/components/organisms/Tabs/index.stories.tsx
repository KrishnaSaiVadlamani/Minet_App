import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import WatchlistGraph from '.'
import TabsComponent from '.'

export default {
  title: 'Organisms/Tabs',
  component: WatchlistGraph,
} as ComponentMeta<typeof WatchlistGraph>

const Template: ComponentStory<typeof WatchlistGraph> = (args) => (
  <TabsComponent {...args} />
)

export const Profit = Template.bind({})

Profit.args = {
  investedAmount: 5676,
  currencyData: [40, 43, 45, 42, 44, 46],
  percentageChange: 1.2,
  categories: ['Jun 8', 'Jun 15', 'Jun 22', 'Jun 30', 'Jul 7', 'Jul 13'],
  coinBalance:0.0002563985,
  currentValue:85364.96,
  coinName: 'BitCoin'
}
