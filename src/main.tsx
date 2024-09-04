import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);
