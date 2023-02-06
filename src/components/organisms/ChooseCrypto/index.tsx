import { Box, Grid, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import { CryptoCurrency } from "../../../utils/types";
import TypographyComponent from "../../atoms/Typography";
import { CHOOSE_CRYPTO, pictures } from "../../../utils/constants";
import ChooseCrypto from "../../molecules/ChooseCryptoCard";

interface ChooseCurrencyProps {
  currenciesData: CryptoCurrency[];
  coinId?:string
}

const CustomBox = styled(Box)({
  border: `1px solid ${theme.palette.greyColors.grey100}`,
  borderRadius: "4px",
  padding: "20px",
  height: "375px",
  background: theme.palette.structural.main,
});

const StyledGrid = styled(Grid)({
  overflowY: "scroll",
  "&::-webkit-scrollbar": { width: "0.3rem" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.structural.main,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.greyColors.grey300,
    borderRadius: "10px",
  },
});

const ChooseCurrency: React.FC<ChooseCurrencyProps> = (
  props: ChooseCurrencyProps
) => {
  const { currenciesData } = props;
  return (
    <CustomBox>
      <Grid container direction={"column"} gap={2} height="100%">
        <Grid item>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            {CHOOSE_CRYPTO}
          </TypographyComponent>
        </Grid>

        <StyledGrid
          item
          container
          maxHeight={"328px"}
          rowSpacing={2}
          columnSpacing={0.5}
        >
          {currenciesData &&
            currenciesData.map((currency) => {
              return (
                <Grid item md={3}>
                  <ChooseCrypto
                    image={pictures[currency.icon]}
                    name={currency.name}
                    value={currency.price}
                    selected={currency.id === (props.coinId || "bitcoin") ? true : false}
                  />
                  
                </Grid>
              );
            })}
        </StyledGrid>
      </Grid>
    </CustomBox>
  );
};

export default ChooseCurrency;
