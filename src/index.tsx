import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "~/styles/globals.css";

const container = document.getElementById("root") || document.body;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
