import { Grid, styled } from "@mui/material"
import IconComponent from "../../atoms/Icons"
import AvatarComponent from "../../atoms/Avatar"
import React from "react"
import chevronDropdown from "../../../../public/assets/icons/chevronDown.svg"

const StyledIconContainer = styled(Grid)({
    paddingTop: '7px',
})

const AvatarDropdown = () => {
    return(
        <Grid container columnSpacing={1}>
            <Grid item>
                <AvatarComponent width='32px' height='32px'/>
            </Grid>
            <StyledIconContainer item>
                <IconComponent width='13px' height='13px' src={chevronDropdown}/>
            </StyledIconContainer>
        </Grid>
    )
}

export default AvatarDropdown;