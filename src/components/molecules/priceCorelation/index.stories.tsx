import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import PriceCorelation from './index'

export default {
  title: 'molecules/PriceCorelation',
  component: PriceCorelation,
} as ComponentMeta<typeof PriceCorelation>

const Template: ComponentStory<typeof PriceCorelation> = () => (
  <PriceCorelation />
)

export const PriceCorelationStory = Template.bind({})
