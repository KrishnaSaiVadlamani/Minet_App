import { TextField, styled, IconButton, Stack, Divider } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import IconComponent from '../../atoms/Icons'
import search from '../../../../public/assets/icons/search.svg'
import filter from '../../../../public/assets/icons/filter.svg'

interface SearchFieldProps {
  placeholder: string
  filter: boolean
  handleChange: (value: string) => void
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
  backgroundColor?: string
  value?: string
}

const StyledSearchField = styled(TextField)((props: SearchFieldProps) => ({
  '& .MuiOutlinedInput-root': {
    width: props.filter ? '348px' : '230px',
    height: '40px',
    paddingRight: '5px',
    borderRadius: '4px',
    backgroundColor: props.backgroundColor,
    '&:hover fieldset': {
      border: `1px solid ${theme.palette.greyColors.grey100}`,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.greyColors.grey100} !important`,
    padding: '0px',
  },
  'input': {
    '&::placeholder': {
      color: theme.palette.textColor.main,
      fontFace: theme.typography.body2,
    }
  }
}))

const StyledIconButton = styled(IconButton)({
  paddingTop: '13px',
  '&:hover': {
    background: 'none',
  }
})

const StyledDivider = styled(Divider)({
  height: '30px', 
})

const renderStack = (handleClick: React.MouseEventHandler<HTMLButtonElement>) => {
  return (
    <Stack
      direction="row"
      divider={<StyledDivider orientation="vertical" variant = 'middle' flexItem style={{marginTop: '10px'}}/>}
      spacing={1}
    >
      {renderSearchIcon(handleClick)}
      {renderFilterIcon()}
    </Stack>
  )
}

const renderSearchIcon = (handleClick: React.MouseEventHandler<HTMLButtonElement>) => {
  return (
    <StyledIconButton onClick={handleClick}>
        <IconComponent src={search} height="20.31px" width="20.31px" />
      </StyledIconButton>
  )
}

const renderFilterIcon = () => {
  return (
    <StyledIconButton >
        <IconComponent src={filter} height="22px" width="18px"/>
      </StyledIconButton>
  )
}
const renderEndAdornment = (
  filter: boolean,
  handleClick: React.MouseEventHandler<HTMLButtonElement>
) => {
  if (filter) {
    return (renderStack(handleClick))
  } else {
    return (
      renderSearchIcon(handleClick)
    )
  }
}

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  handleChange,
  handleClick,
  filter,
  backgroundColor,
  value
}) => {
  return (
    <StyledSearchField
    variant='outlined'
      placeholder={placeholder}
      onChange={(event) => handleChange(event.target.value)}
      handleChange={handleChange}
      handleClick={handleClick}
      filter={filter}
      InputProps={{
        endAdornment: renderEndAdornment(filter, handleClick ? handleClick : () => {}),
      }}
      backgroundColor={backgroundColor}
      value={value}
    />
  )
}

export default SearchField
