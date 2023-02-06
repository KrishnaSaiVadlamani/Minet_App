import { ComponentStory, ComponentMeta } from '@storybook/react'
import TransactionHistory from './index'

export default {
  title: 'Organisms/TransactionHistory',
  component: TransactionHistory,
} as ComponentMeta<typeof TransactionHistory>

const Template: ComponentStory<typeof TransactionHistory> = () => (
  <TransactionHistory/>
)

export const SimpleTransactionHistory = Template.bind({})