import Avatar from "@mui/material/Avatar"
import React from "react"
import Logo from "/home/krisv/Desktop/Zemosolabs-20211002T184509Z-001/Zemosolabs/learnings/React_learnings/Minet_App/public/assets/images/avatar.svg"

interface AvatarComponentProps{
    height: string,
    width: string,
}

const AvatarComponent = (props:AvatarComponentProps) => {
    return(
        <div>
            <Avatar 
              alt="Avatar"
              src={Logo}
              sx={{width: props.width,height: props.height}}
              data-testid = "avatar"
              />
        </div>
    )
}

export default AvatarComponent;