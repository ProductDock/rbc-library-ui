import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
import theme from "./theme";

const isMockServiceWorkerEnabled = () => {
  return process.env.REACT_APP_MSW_MOCKING_ENABLED === "true";
};

if (process.env.NODE_ENV === "development" && isMockServiceWorkerEnabled()) {
  // eslint-disable-next-line global-require
  const { worker } = require("./msw/browser");
  worker.start();
  // eslint-disable-next-line no-console
  console.log(`%c[MSW] active handlers ⬇️ `, "color: #4ea6e9");
  worker.printHandlers();
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
