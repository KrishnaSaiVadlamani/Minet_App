import Avatar from "@mui/material/Avatar"
import React from "react"
import Logo from "../../../assets/images/avatar.svg"

interface AvatarComponentProps{
    height: string,
    width: string,
}

export const AvatarComponent = (props:AvatarComponentProps) => {
    return(
        <div>
            <Avatar 
              alt="Avatar"
              src={Logo}
              sx={{width: props.width,height: props.height}}
              />
        </div>
    )
}