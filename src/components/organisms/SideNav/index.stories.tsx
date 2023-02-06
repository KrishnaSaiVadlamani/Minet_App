import React from "react";
import SideNavComponent from ".";
import {ComponentStory} from "@storybook/react"

export default {
  title: "organisms/SideNav",
  component: SideNavComponent,
};

const Template: ComponentStory<typeof SideNavComponent> = () => (
  <SideNavComponent />
)

export const SideNavigation = Template.bind({})