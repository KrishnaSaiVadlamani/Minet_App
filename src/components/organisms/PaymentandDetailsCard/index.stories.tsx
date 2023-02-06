import React from "react";
import PaymentandDetailsCard from ".";
import { ComponentStory } from "@storybook/react";
import IconComponent from "../../atoms/Icons";
import DollerBlue from "../../../../public/assets/icons/dollerBlue.svg";

export default {
  title: "organisms/PaymentandDetailsCard",
  component: PaymentandDetailsCard,
};

const Template: ComponentStory<typeof PaymentandDetailsCard> = (args: any) => (
  <PaymentandDetailsCard {...args} />
);

export const PaymentCard = Template.bind({});

PaymentCard.args = {
  variant: "payment",
  title: "Payment Method",
  icon: <IconComponent src={DollerBlue} />,
  coinType: "USD Coin (cash)",
  balance: 34000,
};
