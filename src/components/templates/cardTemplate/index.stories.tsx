import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import CardTemplate from './index'

export default {
  title: 'templates/CardTemplate',
  component: CardTemplate,
} as ComponentMeta<typeof CardTemplate>

const Template: ComponentStory<typeof CardTemplate> = (args: any) => (
  <CardTemplate {...args} />
)

export const CardTemplateStory = Template.bind({})
CardTemplateStory.args = {
  LeftComponet: <p>LeftComponent</p>,
  RightComponet: <p>RightComponent</p>,
  cardHeight: '80px',
  cardWidth: '900px',
  cardPadding: '5px',
}
