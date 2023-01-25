import { Typography } from "@mui/material";
import { ComponentStory } from "@storybook/react";
import React from "react";
import { ButtonComponent } from ".";

export default {
  title: "atoms/Button",
  component: ButtonComponent,
};

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Outlined = Template.bind({});

Outlined.args = {
  variant: "outlined",
  children: "outlined",
};

export const Text = Template.bind({});

Text.args = {
  variant: "text",
  children: "text",
};

export const Contained = Template.bind({});

Contained.args = {
  variant: "contained",
  children: "contained",
};
