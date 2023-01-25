import React from "react";
import { TypographyComponent } from ".";
import {Story} from '@storybook/react';

export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
};

const Template: Story<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args}>Typography</TypographyComponent>
);

export const h1Text = Template.bind({})

h1Text.args = {
  variant: 'h1',
  children: 'h1 Text',
}
