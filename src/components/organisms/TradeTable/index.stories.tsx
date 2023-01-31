import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import TradeTable from './index'

export default {
  title: 'Organisms/TradeTable',
  component: TradeTable,
} as ComponentMeta<typeof TradeTable>

const Template: ComponentStory<typeof TradeTable> = (args) => (
  <TradeTable {...args} />
)

export const SimpleTradeTable = Template.bind({})

SimpleTradeTable.args = {
  timePeriod: '1m',
  filterValue: ""
}