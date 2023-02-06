import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChooseCryptoCard from '.'
import bitcoin from '/home/krisv/Desktop/Zemosolabs-20211002T184509Z-001/Zemosolabs/learnings/React_learnings/Minet_App/public/assets/images/coins/bitcoin.svg'
export default {
  title: 'Molecules/ChooseCryptoCard',
  component: ChooseCryptoCard,
} as ComponentMeta<typeof ChooseCryptoCard>

const Template: ComponentStory<typeof ChooseCryptoCard> = (args) => (
  <div style={{ width: '159px', height: '156px' }}>
    <ChooseCryptoCard {...args} />
  </div>
)

export const Bitcoin = Template.bind({})

Bitcoin.args = {
  image: bitcoin,
  name: 'Bitcoin',
  value: 3406069.54,
  selected: true,
}
