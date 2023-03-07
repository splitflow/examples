import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createDesignerTool } from "@splitflow/designer";
// we make sure all styles are reseted so styling with SplitFlow is consistent
import "the-new-css-reset/css/reset.css";
import "./index.css";
// splitflow initialization must be done before importing UI components
import splitflowApp from "./splitflow";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Radix from "./radix/Radix";

// create designer tool if it has been enabled
if (splitflowApp().devtool) {
  createDesignerTool();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/radix",
    element: <Radix />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
