import { ComponentStory } from "@storybook/react";
import React from "react";
import ChooseCurrency from ".";
import { currencies } from '../../../utils/constants'


export default {
  title: "organisms/ChooseCrypto",
  component: ChooseCurrency,
};

const Template: ComponentStory<typeof ChooseCurrency> = (args) => (
  <div style={{ width: "708px", height: "414px" }}>
    <ChooseCurrency {...args} />
  </div>
);

export const primary = Template.bind({})
primary.args={
    currenciesData: currencies
}