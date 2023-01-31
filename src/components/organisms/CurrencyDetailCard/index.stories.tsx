import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CurrencyDetailCardComponent from '.'
import BitCoinIcon from '../../../assets/images/coins/bitcoin.svg'

export default {
  title: 'Organisms/CurrencyDetailCard',
  component: CurrencyDetailCardComponent,
} as ComponentMeta<typeof CurrencyDetailCardComponent>

const Template: ComponentStory<typeof CurrencyDetailCardComponent> = (args) => (
  <div style={{ width: '1239px', height: '106px' }}>
    <CurrencyDetailCardComponent {...args} />
  </div>
)

export const CurrencyDetailCardForUpTrend = Template.bind({})
CurrencyDetailCardForUpTrend.args = {
    coinIcon: BitCoinIcon,
    coinName: 'Bitcoin',
    coinSymbol: 'BTC',
    percentageChange: +2.09,
    isAddedtoWishList: false,
    marketCap: 5862471259.356,
    volumeIn24H: 751428635.90,
    circulatingSupply : 7142539.89
}

