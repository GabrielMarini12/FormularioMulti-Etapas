import { createBrowserRouter } from "react-router-dom";
import { FormSep1 } from "./pages/FormStep1";
import { FormSep2 } from "./pages/FormStep2";
import { FormSep3 } from "./pages/FormStep3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormSep1 />,
  },
  {
    path: "/FormStep2",
    element: <FormSep2 />,
  },
  {
    path: "/FormStep3",
    element: <FormSep3 />,
  },
]);

export { router };
