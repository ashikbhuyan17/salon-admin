// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import "./style/global.css";


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import ThemeProvider from "@mui/system/ThemeProvider";
import "./style/global.css";
// eslint-disable-next-line react-refresh/only-export-components
// const App = lazy(() => import("./App.jsx"));

import App from "./App.jsx";
import theme from "./style/theme.js";
// import Spinner from "./components/Spinner";
ReactDOM.createRoot(document.getElementById("root")).render(

  <ThemeProvider theme={theme}>
    {/* <HashRouter> */}

    {/* <Suspense fallback={<Spinner />}> */}
    <App />
    {/* </Suspense> */}

    {/* </HashRouter> */}
  </ThemeProvider>

);
