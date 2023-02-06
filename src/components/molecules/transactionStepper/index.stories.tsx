import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TransactionStepper from '.'
export default {
  title: 'Molecules/TransactionStepper',
  component: TransactionStepper,
} as ComponentMeta<typeof TransactionStepper>

const Template: ComponentStory<typeof TransactionStepper> = () => (
  <div >
    <TransactionStepper  />
  </div>
)

export const TransactionStepperStory = Template.bind({})

