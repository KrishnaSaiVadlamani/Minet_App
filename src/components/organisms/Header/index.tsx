import { Box, Divider, Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import ButtonComponent from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import AvatarDropdown from "../../molecules/AvatarDropdown";

interface IHeaderProps {
  pageName: string;
}

const CustomBox = styled(Box)({
  padding: "20px 24px 20px 24px",
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1500px",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "98vw",
  },
  [theme.breakpoints.down("lg")]: {
    minWidth: "1366px",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "97vw",
  },
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
});
const CustomButton = styled(ButtonComponent)({
  borderRadius: "4px",
  padding: "0px 16px 0px 16px",
  width: "120px",
  height: "42px",
});

const StyledTypographyComponent = styled(TypographyComponent)({
  paddingTop: "4.5px",
});

const Header = (props: IHeaderProps) => {
  const { pageName } = props;
  return (
    <CustomBox>
      <Grid container>
        <Grid item xs={6}>
          <StyledTypographyComponent
            variant="h6"
            width="122px"
            height="34px"
            color="textColor.highEmphasis"
          >
            {pageName}
          </StyledTypographyComponent>
        </Grid>

        <Grid
          item
          container
          wrap="nowrap"
          xs={6}
          justifyContent="flex-end"
          columnGap={2}
        >
            <Grid item>
                <CustomButton
                  variant="contained" label={"SELL"}
                 sx = {{backgroundColor: theme.palette.primary.warning300}}
                >
                  <TypographyComponent variant="button">
                    SELL
                  </TypographyComponent>
                </CustomButton>
            </Grid>

          <Grid item>
              <CustomButton variant="contained" sx = {{backgroundColor:"primary"}} label={"BUY"}>
                <TypographyComponent variant="button">BUY</TypographyComponent>
              </CustomButton>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item display="flex" alignItems="center">
            <AvatarDropdown />
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default Header;
