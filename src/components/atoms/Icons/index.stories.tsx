import IconComponent from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Doller from "/home/krisv/Desktop/Zemosolabs-20211002T184509Z-001/Zemosolabs/learnings/React_learnings/Minet_App/public/assets/icons/doller.svg";
import Analytics from "/home/krisv/Desktop/Zemosolabs-20211002T184509Z-001/Zemosolabs/learnings/React_learnings/Minet_App/public/assets/icons/analytics.svg";
import React from "react";

export default {
  title: "atoms/IconComponent",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

const Template: ComponentStory<typeof IconComponent> = (args: any) => (
  <IconComponent {...args} />
);

export const IconComponentStory = Template.bind({});
IconComponentStory.args = {
  height: "32px",
  width: "32px",
  src: Doller,
};

export const IconComponentStory1 = Template.bind({});
IconComponentStory1.args = {
  height: "32px",
  width: "32px",
  src: Analytics,
};
