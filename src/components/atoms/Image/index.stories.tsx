import React from "react";
import ImageComponent  from ".";
import {ComponentStory} from "@storybook/react"
import Bitcoin from '/home/krisv/Desktop/Zemosolabs-20211002T184509Z-001/Zemosolabs/learnings/React_learnings/Minet_App/public/assets/images/coins/bitcoin.svg'
export default{
    title: 'atoms/Image',
    component: ImageComponent,
}

const Template: ComponentStory<typeof ImageComponent> = (args:any) =>(
    <ImageComponent {...args}/>
)


export const Coin = Template.bind({})
Coin.args={
    src:Bitcoin,
    height: '60px',
    width: '60px',
}