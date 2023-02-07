import { Grid, styled, Stack, Box } from '@mui/material'
import { BitcoinTransactionValues } from '../../../utils/constants'
import Success from '../../../../public/assets/images/success.svg'
import Failure from '../../../../public/assets/images/failed.svg'
import Pending from '../../../../public/assets/images/processed.svg'
import TypographyComponent from '../../atoms/Typography'
import theme from '../../../theme'
import IconWithTypography from '../../molecules/IconWithTypography'
import ChipItem from '../../atoms/ChipItem'
import ValueChangeTypographyComponent from '../../molecules/ValueChangeTypography'
import Slider from '../../../../public/assets/images/slider.svg'
import IconComponent from '../../atoms/Icons'
import React from 'react'
import { Transaction } from '../../../utils/types'

interface CoinProps {
  name: string
  from: string
  date: number
  month: string
  btcPrice: number
  dollarPrice: number
  status: string

}
interface TransactionHistoryProps{
  transactions: Transaction[]
}

const StyledContainer = styled(Grid)({
  width: '100%',
  height: '100%',
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: '0px 0px 4px 4px',
  margin: '0px !important',
  boxSizing: 'border-box',
})

const StyledGridContainer = styled(Grid)({
  width: '100%',
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
  '&:last-child': {
    borderBottom: 'none',
  },
  display: 'flex',
})

const LeftContainer = styled(Grid)({
  padding: '12px 24px 0px 24px',
})

const RightContainer = styled(Grid)({
  paddingTop: '25px',
  display: 'flex',
  justifyContent: 'center',
})

const ChipBox = styled(Box)({
  paddingTop: '23px',
})

const renderDate = (date: number, month: string) => {
  return (
    <Box>
      <TypographyComponent
        variant="caption2"
        children={month}
        color={theme.palette.textColor.mediumEmphasis}
      />
      <TypographyComponent
        variant="subtitle2"
        children={date.toString()}
        color={theme.palette.textColor.highEmphasis}
      />
    </Box>
  )
}

const ImageType = (status: string) => {
  if (status === 'success') {
    return Success
  } else if (status === 'pending') {
    return Pending
  }

  return Failure
}

const renderTypography = (status: string, name: string, from: string) => {
  return (
    <IconWithTypography
      image={ImageType(status)}
      imageHeight={'44px'}
      imageWidth={'44px'}
      text={name}
      textVariant={'body1'}
      textColor={theme.palette.textColor.highEmphasis}
      subText={`From ${from}`}
      subTextVariant={'caption2'}
      subTextColor={theme.palette.textColor.mediumEmphasis}
    />
  )
}

const renderChipItem = () => {
  return (
    <ChipBox>
      <ChipItem label={'Purchased'} chiptype={'rounded'} chipvariant={'dark'} />
    </ChipBox>
  )
}

const renderLeftComponent = (coin: Transaction) => {
  return (
    <Stack direction="row" alignItems={'center'}>
      {renderDate(coin.date, coin.month)}
      {renderTypography(coin.status, coin.name, coin.from)}
      {renderChipItem()}
    </Stack>
  )
}

const renderCards = (transactions: Transaction[]) => {
  console.log("Transactins ",transactions)
  return transactions.map((coin, index) => {
    return (
      <StyledGridContainer container direction={'row'} alignItems={'center'}>
        <Grid item key={index} xs={11}>
          {renderLeftComponent(coin)}
        </Grid>
        <Grid item alignItems={'flex-end'} xs={1}>
          <ValueChangeTypographyComponent
            topText={`+${coin.quantity} ${coin.symbol}`}
            bottomText={`+$${coin.price}`}
            topTextColor={theme.palette.textColor.highEmphasis}
            bottomTextColor={theme.palette.textColor.mediumEmphasis}
          />
        </Grid>
      </StyledGridContainer>
    )
  })
}

const TransactionHistory = (props:TransactionHistoryProps) => {
  return (
    <StyledContainer container data-testid="transaction-history">
      <LeftContainer item xs={11.8}>
        {renderCards(props.transactions)}
      </LeftContainer>
      <RightContainer item xs={0.2}>
        <IconComponent src={Slider}  />
      </RightContainer>
    </StyledContainer>
  )
}

export default TransactionHistory
