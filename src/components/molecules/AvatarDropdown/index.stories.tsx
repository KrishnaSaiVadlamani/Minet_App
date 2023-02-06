import { ComponentStory } from "@storybook/react";
import React from "react";
import AvatarDropdown from ".";

export default{
    title: "molecules/AvatarDropdown",
    component: AvatarDropdown
}

const Template: ComponentStory<typeof AvatarDropdown> = () => (
    <AvatarDropdown/>
)

export const ItemRounded = Template.bind({})