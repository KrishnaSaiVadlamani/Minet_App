import { ComponentStory } from '@storybook/react'
import React from 'react'
import DropDownComponent from './index'
import AvatarComponent from './index'

export default {
  title: 'molecules/DropDownComponent',
  component: DropDownComponent,
} 

const Template: ComponentStory<typeof DropDownComponent> = (args: any) => (
  <AvatarComponent {...args} />
)
const handleChange =() => {
};

export const TimeDropDown = Template.bind({})
TimeDropDown.args = {
  onChange: handleChange,
  menuList: ["1H","24H","1W","1M","1Y","ALL"],
  width:"77px"
}

export const LangugaeDropDown = Template.bind({})
LangugaeDropDown.args = {
  onChange: handleChange,
  menuList: ["English"],
  width: "170px"
}

export const AssetsDropDown = Template.bind({})
AssetsDropDown.args = {
  onChange: handleChange,
  menuList: ["All Assets"],
  width: "122px"
}