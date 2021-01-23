import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import MarsInfo from './components/MarsInfo'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/marsinfo' component={MarsInfo} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
