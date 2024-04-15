import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./Routes/Routes";
import FrirebaseProvider from "./FirebaseProvider/FrirebaseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FrirebaseProvider>
      <RouterProvider router={routes} />
    </FrirebaseProvider>
  </React.StrictMode>
);
