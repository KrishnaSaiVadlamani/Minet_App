import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ButtonComponent from ".";

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />

export const Outlined = Template.bind({})
export const Text = Template.bind({})
export const Contained = Template.bind({})

Outlined.args = {
  label: 'Button',
  variant: 'outlined',
  children: 'outlined',
}
Text.args = {
  label: 'Button',
  variant: 'text',
  children: 'Text',
}
Contained.args = {
  label: 'Button',
  variant: 'contained',
  children: 'Contained',
}