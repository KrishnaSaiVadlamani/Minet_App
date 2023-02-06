import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import IconWithTypography from './index'
import Image from '../../../../public/assets/images/coins/bitcoin.svg'
import theme from '../../../theme'
import IncreasingTrendArrow from '../../../../public/assets/icons/greenIncreasingTrend.svg'

export default {
  title: 'molecules/IconWithTypography',
  component: IconWithTypography,
} as ComponentMeta<typeof IconWithTypography>

const Template: ComponentStory<typeof IconWithTypography> = (args: any) => (
  <IconWithTypography {...args} />
)

export const IconWithTypographyStoryTextandSubtext = Template.bind({})
IconWithTypographyStoryTextandSubtext.args = {
  image: Image,
  text: 'Bitcoin',
  textVariant: 'body1',
  textColor: theme.palette.textColor.highEmphasis,
  subText: 'BTC',
  subTextVariant: 'overline',
  subTextColor: theme.palette.textColor.mediumEmphasis,
  gapBetweenText: '1px'
}

export const IconWithTypographyStoryTextOnly = Template.bind({})
IconWithTypographyStoryTextOnly.args = {
  image: IncreasingTrendArrow,
  text: '+1.2%',
  iconandtextgap: '5px',
  textVariant: 'overline',
  textColor: theme.palette.primary.success500,
}
