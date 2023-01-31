import { Grid, styled } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ImageComponent from '../../atoms/Image'
import Logo from '../../../assets/icons/logo.svg'
import DashboardInActive from '../../../assets/icons/dashboard.svg'
import Analytics from '../../../assets/icons/analytics.svg'
import Trades from '../../../assets/icons/trade.svg'
import Notification from '../../../assets/icons/notification.svg'
import LogOut from '../../../assets/icons/logout.svg'
import IconComponent from '../../atoms/Icons'

const StyledGrid = styled(Grid)(() => ({
  width: '80px',
  gap: '44px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'absolute',
}))

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
}))

const iconsList = [Analytics, Trades, Notification, LogOut]

const SideNavComponent = () => {
  return (
    <StyledGrid>
      <StyledBox>
        <ImageComponent src={Logo} width="32px" height="32px" />
      </StyledBox>
      <StyledBox>  
          <IconComponent
            src={DashboardInActive}
            width="20px"
            height="20px"
          />
      </StyledBox>
      {iconsList.map((iconSrc) => (
        <StyledBox key={iconSrc}>
          <IconComponent src={iconSrc} height="20px" width="auto" />
        </StyledBox>
      ))}
    </StyledGrid>
  )
}

export default SideNavComponent
