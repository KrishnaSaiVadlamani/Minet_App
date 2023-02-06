import React from "react";
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
import theme from "../src/theme/index";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import TradePage from "./components/pages/TradePage";
import PaymentSuccessPage from "./components/pages/PaymentSuccessPage";
import PurchasePage from "./components/pages/PurchaseScreen";
import DetailsPage2 from "./components/pages/Detailspage2";

const App = () => {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<TradePage />} />
            <Route path="/purchase/:coinId" element={<PurchasePage />} />
            <Route path="/detailpage/:coinId" element={<DetailsPage2 />} />
            <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  );
};
export default App;
