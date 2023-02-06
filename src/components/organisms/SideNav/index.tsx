import { Grid, styled } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ImageComponent from '../../atoms/Image'
import Logo from '../../../../public/assets/icons/logo.svg'
import DashboardInActive from '../../../../public/assets/icons/dashboard.svg'
import DashboardActive from '../../../../public/assets/icons/dashboardactive.svg'
import Analytics from '../../../../public/assets/icons/analytics.svg'
import Trades from '../../../../public/assets/icons/trade.svg'
import Notification from '../../../../public/assets/icons/notification.svg'
import LogOut from '../../../../public/assets/icons/logout.svg'
import IconComponent from '../../atoms/Icons'
import { Link, useLocation, BrowserRouter as Router } from 'react-router-dom'

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

const SideNavComponentLocation = () => {
  const location = useLocation().pathname
  return (
    <StyledGrid>
      <StyledBox>
        <ImageComponent src={Logo} width="32px" height="32px" />
      </StyledBox>
      <Link to="/">
      <StyledBox>  
          <IconComponent
            src={location !== '/' ? DashboardInActive : DashboardActive}
            width="20px"
            height="20px"
          />
      </StyledBox>
      </Link>
      {iconsList.map((iconSrc) => (
        <StyledBox key={iconSrc}>
          <IconComponent src={iconSrc} height="20px" width="auto" />
        </StyledBox>
      ))}
    </StyledGrid>
  )
}



export default SideNavComponentLocation



