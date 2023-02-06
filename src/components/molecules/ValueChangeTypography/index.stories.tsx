import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ValueChangeTypographyComponent from '.'
import Typography from '.'

export default {
  title: 'molecules/ValueChangeTypography',
  component: ValueChangeTypographyComponent,
} as ComponentMeta<typeof ValueChangeTypographyComponent>

const Template: ComponentStory<typeof ValueChangeTypographyComponent> = (
  args
) => <Typography {...args} />



export const valuechangePercentage = Template.bind({})
valuechangePercentage.args = {
  topText: '$ 230,966.85',
  bottomText: '+1.06%',
  bottomTextColor: "primary.success500",
}
