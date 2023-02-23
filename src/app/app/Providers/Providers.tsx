import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { theme } from "../constants/theme";


interface Props {
  children: JSX.Element[] | JSX.Element
}


export  const Providers:FunctionComponent<Props> = ({children}) => {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
    </ThemeProvider>
    </Provider>
  );
};


