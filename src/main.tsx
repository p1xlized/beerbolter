import { render } from "solid-js/web";
import { RouterProvider } from "@tanstack/solid-router";
import { router } from "./routes/router";
import "./styles.css";

function MainApp() {
  return <RouterProvider router={router} />;
}

const rootElement = document.getElementById("app");
if (rootElement) {
  render(() => <MainApp />, rootElement);
}
