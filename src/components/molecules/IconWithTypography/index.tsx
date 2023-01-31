import { Box, styled } from '@mui/material'
import React from 'react'
import ImageComponent from '../../atoms/Image'
import TypographyComponent from '../../atoms/Typography'
import { TypographyProps } from '@mui/material/Typography'

interface IconWithTypographyProps extends TypographyProps {
  image: string
  imageHeight?: string
  imageWidth?: string
  iconandtextgap?: string
  text: string
  textVariant: any
  textColor: string | undefined
  subText?: string
  subTextVariant?: any
  subTextColor?: string
  textHeight?: string
  textWidth?: string
  margin?: string
  gapBetweenText?: string
}

interface FlexRowBoxProps {
  iconandtextgap?: string
  margin?: string
}

const FlexRowBox = styled(Box)((props: FlexRowBoxProps) => ({
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  gap: props.iconandtextgap ? props.iconandtextgap : '10px',
  margin: props.margin ? props.margin : '0',
  padding: '24px',
  border: '10px soild black'
}))

const FlexColumnBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
})

const IconWithTypography = (props: IconWithTypographyProps) => {
  const {
    image,
    text,
    textVariant,
    subText,
    subTextVariant,
    imageHeight,
    imageWidth,
    textColor,
    subTextColor,
    iconandtextgap,
    textWidth,
    textHeight,
    margin,
    gapBetweenText
  } = props
  return (
    <div>
      <FlexRowBox
        iconandtextgap={iconandtextgap}
      >
        <ImageComponent src={image}/>
        <FlexColumnBox gap={gapBetweenText? gapBetweenText : '4px'}>
          <TypographyComponent
            variant={textVariant}
            style={{ color: textColor}}
          >
            {text}
          </TypographyComponent>
          {subText && (
            <TypographyComponent
              variant={subTextVariant}
              style={{ color: subTextColor }}
            >
              {subText}
            </TypographyComponent>
          )}
        </FlexColumnBox>
      </FlexRowBox>
    </div>
  )
}

export default IconWithTypography
