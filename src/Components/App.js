import React, { useEffect, useContext } from "react";
import GlobalStyles from "../CSS/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../CSS/theme";
import Router from "./Router";
import store from "../store";
import { Provider } from "react-redux";
import LangProvider from "../LangProvider";
import SubProvider from "../SubProvider";
import BasketProvider from "../BasketProvider";
import ScatterProvider from "../scatterProvider";

export default () => {
  return (
    <Provider store={store}>
      <ScatterProvider>
        <LangProvider>
          <SubProvider>
            <BasketProvider>
              <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router />
              </ThemeProvider>
            </BasketProvider>
          </SubProvider>
        </LangProvider>
      </ScatterProvider>
    </Provider>
  );
};
