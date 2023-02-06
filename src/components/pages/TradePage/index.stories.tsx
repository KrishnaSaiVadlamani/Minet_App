import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import TradePage from './index'

export default {
  title: 'Pages/TradePage',
  component: TradePage,
} as ComponentMeta<typeof TradePage>

const Template: ComponentStory<typeof TradePage> = () => (
  <TradePage/>
)

export const SimpleTradePage = Template.bind({})