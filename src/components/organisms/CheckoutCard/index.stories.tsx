import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import CheckoutCard from './index'

export default {
  title: 'Organisms/CheckoutCard',
  component: CheckoutCard,
} as ComponentMeta<typeof CheckoutCard>

const Template: ComponentStory<typeof CheckoutCard> = (args) => (
  <CheckoutCard {...args} />
)



export const BuyCheckoutCard = Template.bind({})

BuyCheckoutCard.args = {
    type: 'buy',
    btcValue: 0.0234510
}