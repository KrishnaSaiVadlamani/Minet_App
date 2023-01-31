import React from "react"
import Header from "."
import { ComponentStory } from '@storybook/react'


export default{
    title: "organisms/Header",
    component: Header,
}

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const Trade = Template.bind({})

Trade.args={
    pageName: 'Trade',
}