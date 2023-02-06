import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PortfolioValueTypographyComponent from '.'

export default {
  title: 'molecules/PortfolioValueTypography',
  component: PortfolioValueTypographyComponent,
} as ComponentMeta<typeof PortfolioValueTypographyComponent>

const Template: ComponentStory<typeof PortfolioValueTypographyComponent> = (args) => (
    <PortfolioValueTypographyComponent {...args}/>
)



export const BitcoinPagePortfolioValueTypography = Template.bind({})

BitcoinPagePortfolioValueTypography.args = {
    typeOfInvestment: 'Current Value',
    isInDashBoardPage: false,
    percentChange: -2.3,
    investmentValue: 56890890.57,
    width: '186px'
}