import { ComponentStory } from "@storybook/react";
import React from "react";
import HomeTemplate from ".";
import Header from "../../organisms/Header";
import Footer from '../../molecules/Footer'
import SideNavCompnent from '../../organisms/SideNav'

export default {
  title: "templates/HomeTemplate",
  component: HomeTemplate,
};

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
);

export const SimpleHomeTemplate = Template.bind({})

SimpleHomeTemplate.args = {
    header: <Header pageName='Trade' />,
    footer: <Footer />,
    sideNav: <SideNavCompnent />,
    children: <div style={{ height: '896px', width: '1296px' }}>content</div>
}