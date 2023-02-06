import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import AmountDetailsCardComponent from '.'

export default {
  title: 'organisms/AmountDetailsCard',
  component: AmountDetailsCardComponent,
} as ComponentMeta<typeof AmountDetailsCardComponent>

const Template: ComponentStory<typeof AmountDetailsCardComponent> = (args) => (
  <AmountDetailsCardComponent {...args} />
)

const handleChange = () => {}
export const AmountDetailsCardBuy = Template.bind({})
AmountDetailsCardBuy.args = {
  price: 3406069.54,
  balance: 340000,
  transactionType: 'buy',
  coin: 'Bitcoin BTC',
  handleChange: handleChange,
}

