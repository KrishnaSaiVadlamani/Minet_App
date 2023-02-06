import { Box, Stack, styled, Tab, Tabs, Grid } from "@mui/material";
import DropDownComponent from "../../molecules/Dropdown";
import Footer from "../../molecules/Footer";
import SearchField from "../../molecules/Searchfield";
import Header from "../../organisms/Header";
import SideNavCompnent from "../../organisms/SideNav";
import HomeTemplate from "../../templates/HomeTemplate";
import { timeValues } from "../../../utils/constants";
import TradeTable from "../../organisms/TradeTable";
import theme from "../../../theme";
import { useTimePeriodHook } from "./hook";
import { timeProps } from "../../../utils/types";
import React, { useState } from "react";
import { TabPanelProps } from "../../organisms/Tabs";

const SearchFieldBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "12px",
  paddingRight: "23px",
});

const TableBox = styled(Box)({
  paddingRight: "23px",
  paddingBottom: "30px",
  minHeight: "650px",
});

const StyledBox = styled(Box)({
  paddingTop: "24px",
});

const StyledTabs = styled(Tabs)({
  "& .MuiButtonBase-root": {
    padding: "0px",
    minHeight: "28px",
  },
  "& .MuiTabs-indicator": {
    top: "35px",
  },
  "& .MuiTabs-root": {
    padding: "0px",
  },
  minHeight: "37px !important",
  width: "100%",
  borderBottom: `1px solid ${theme.palette.greyColors.grey100}`,
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const TradePage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const {
    timePeriod,
    searchValue,
    handleSearchFieldChange,
    handleTimeDropDownChange,
  } = useTimePeriodHook();

  const renderSearchFields = () => {
    return (
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={8}>
          <StyledTabs value={value} onChange={handleChange}>
            <Tab label="All Assests" {...a11yProps(0)} defaultChecked={true} />
            <Tab label="WatchList" {...a11yProps(1)} />
          </StyledTabs>
        </Grid>
        <Grid item>
          <SearchFieldBox>
            <Stack spacing={"12px"} direction="row">
              <SearchField
                placeholder="Search all assets"
                filter={false}
                handleChange={handleSearchFieldChange}
                backgroundColor={theme.palette.structural.main}
                value={searchValue}
              />
              <DropDownComponent
                width={"78px"}
                menuList={timeValues}
                onChange={handleTimeDropDownChange}
                backgroundColor={theme.palette.structural.main}
              />
              <DropDownComponent
                width={"122px"}
                menuList={["All assets"]}
                onChange={() => {}}
                backgroundColor={theme.palette.structural.main}
              />
            </Stack>
          </SearchFieldBox>
        </Grid>
      </Grid>
    );
  };

  const renderChildren = (timePeriod: timeProps) => {
    return (
      <StyledBox>
        {renderSearchFields()}
        {renderTable(timePeriod)}
      </StyledBox>
    );
  };

  const renderTable = (timePeriod: timeProps) => {
    return (
      <>
        <TabPanel value={value} index={0}>
          <TableBox>
            <TradeTable timePeriod={timePeriod} filterValue={searchValue} />
          </TableBox>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableBox>
            <TradeTable timePeriod={timePeriod} filterValue={searchValue} tableType={"watchlist"} />
          </TableBox>
        </TabPanel>
      </>
    );
  };

  return (
    <HomeTemplate
      header={<Header pageName={"Trade"} />}
      footer={<Footer />}
      sideNav={<SideNavCompnent />}
      children={renderChildren(timePeriod)}
    />
  );
};

export default TradePage;
