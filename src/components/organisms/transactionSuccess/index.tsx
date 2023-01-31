import { Box, styled } from '@mui/material'
import React from 'react'
import IconComponent from '../../atoms/Icons'
import Success from '../../../assets/images/success.svg'
import TypographyComponent from '../../atoms/Typography'
import ButtonComponent from '../../atoms/Button'
import { transactionSuccess } from '../../../utils/constants'
import theme from '../../../theme'

interface TransactionSuccessProps {
  successType: 'buy' | 'sell'
  price: string
}

const ContainerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignContent: 'center',
  alignItems: 'center',
  width: '396px',
}))

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '24px',
  alignContent: 'center',
  alignItems: 'center',
}))

const TextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
}))

const TransactionSuccess = (props: TransactionSuccessProps) => {
  const { successType, price } = props
  return (
    <div>
      <ContainerBox>
        <IconComponent src={Success} height="64px" width="64px" />
        <TextContainer>
          <TypographyComponent variant="heading4">
            {price}
          </TypographyComponent>
          <TypographyComponent
            variant="body2"
            style={{
              textAlign: 'center',
            }}
          >
            {successType == 'sell'
              ? transactionSuccess.sell.text
              : transactionSuccess.buy.text}
          </TypographyComponent>
        </TextContainer>
        <Box></Box>
        <ButtonContainer>
          
            <ButtonComponent
              backgroundColor={theme.palette.primary.color1}
              variant="outlined"
              style={{ height: '42px' }}
            >
              {successType === 'buy'
                ? transactionSuccess.buy.button
                : transactionSuccess.sell.button}
            </ButtonComponent>
          <ButtonComponent
            backgroundColor={theme.palette.primary.color1}
            variant="contained"
            style={{ height: '42px' }}
          >
            GO TO USD COIN
          </ButtonComponent>
        </ButtonContainer>
      </ContainerBox>
    </div>
  )
}

export default TransactionSuccess