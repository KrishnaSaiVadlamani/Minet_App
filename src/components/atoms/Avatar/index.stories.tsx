import React from "react";
import { AvatarComponent } from ".";
import {ComponentStory} from "@storybook/react"

export default{
    title: 'atoms/Avatar',
    component: AvatarComponent
}

const Template: ComponentStory<typeof AvatarComponent> = (args: any) => (
    <AvatarComponent {...args} />
  )

export const AvatarComponentStory = Template.bind({})
AvatarComponentStory.args={
    height: '32px',
    width: '32px',
}