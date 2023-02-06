import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import WatchlistGraph from '.'

export default {
  title: 'Molecules/WatchlistGraph',
  component: WatchlistGraph,
} as ComponentMeta<typeof WatchlistGraph>

const Template: ComponentStory<typeof WatchlistGraph> = (args) => (
  <div style={{ width: '188.5px', height: '58.35px' }}>
    <WatchlistGraph {...args} />
  </div>
)

export const Profit = Template.bind({})

Profit.args = {
  profit: true,
  plValue: '+1.2%',
}

export const Loss = Template.bind({})

Loss.args = {
  profit: false,
  plValue: '-22.3%',
}
