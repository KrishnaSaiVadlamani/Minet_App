import { Box, Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme"
import TypographyComponent from "../../atoms/Typography"

interface PaymentandDetailsCardProps {
  variant: "payment";
  title: string;
  icon: React.ReactElement;
  coinType?: string;
  balance?: number;
  coinSymbol?: string;
}

const StyledGrid = styled(Grid)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
  background: theme.palette.structural.main,
});

const PaymentandDetailsCard = (props: PaymentandDetailsCardProps) => {
  const { variant, title, icon, coinType, balance, coinSymbol } = props;
  return (
    <Box>
      <StyledGrid
        container
        direction={"column"}
        display="flex"
        gap={1.5}
        padding="24px"
      >
        <Grid item>
          <TypographyComponent variant="body1" children={title} />
        </Grid>
        <Grid item>
          <StyledGrid
            container
            padding={"15px"}
            direction={"row"}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Grid item>
              <Grid
                container
                direction={"row"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                <Grid item>{icon}</Grid>
                <Grid item>
                  {props.variant === "payment" && (
                    <Grid container direction={"column"} gap={0.5}>
                      <Grid item>
                        <TypographyComponent
                          variant="caption1"
                          children={coinType}
                        />
                      </Grid>
                    </Grid>
                  )}
                  
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {(variant === "payment") && (
                <TypographyComponent
                  variant="caption1"
                  color={theme.palette.textColor.mediumEmphasis}
                  children="Default"
                />
              )}
              
            </Grid>
          </StyledGrid>
        </Grid>
      </StyledGrid>
    </Box>
  );
};

export default PaymentandDetailsCard;
