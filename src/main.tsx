import { render } from "solid-js/web";
import { RouterProvider } from "@tanstack/solid-router";

import "./styles.css";
import { router } from "./routes/router";

function MainApp() {
  return <RouterProvider router={router} />;
}

const rootElement = document.getElementById("app");
if (rootElement) {
  render(() => <MainApp />, rootElement);
}
