import { MenuItem, Select, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../theme";
import IconComponent from "../../atoms/Icons";
import TypographyComponent from "../../atoms/Typography";
import ChevronDown from "./../../../assets/icons/Vector.svg";

interface DropDownComponentProps {
  onChange: (arg: any) => void;
  menuList: Array<String>;
  width: string | React.CSSProperties;
  backgroundColor?: string | React.CSSProperties;
}
const StyledDropDown = styled(Select)(() => ({
  "& .MuiSelect-select": {
    height: "22px",
    padding: "9px 0 8px 4px !important",
  },
  "& .MuiTypography-root": {
    paddingLeft: "8px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.greyColors.grey100} !important`,
    padding: "0px",
  },
  input: {
    "&::placeholder": {
      padding: "0px !important",
      color: "textColor.main",
      fontFace: "body2",
    },
  },
}));

const StyledBox = styled(Box)(() => ({
  minWidth: "32px !important",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "3px",
  marginLeft: "0px",
}));

const DropDownComponent = (props: DropDownComponentProps) => {
  const { menuList, onChange, backgroundColor, width } = props;
  return (
    <StyledDropDown
      defaultValue={menuList[0]}
      onChange={(e) => props.onChange(e.target.value)}
      sx={{ width: width, backgroundColor: backgroundColor }}
      IconComponent={() => (
        <StyledBox>
          <IconComponent src={ChevronDown} width="13px" height="13px" />
        </StyledBox>
      )}
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      }}
    >
      {menuList.map((menuItem) => (
        <MenuItem key={menuItem} value={menuItem}>
          <TypographyComponent variant="body1">{menuItem}</TypographyComponent>
        </MenuItem>
      ))}{" "}
    </StyledDropDown>
  )
};

export default DropDownComponent;
