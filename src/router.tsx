import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import App from "../views/Home.tsx";

// 1. Define the Root
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// 2. Define Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

// 3. Create the Tree
const routeTree = rootRoute.addChildren([indexRoute]);

// 4. Create and Export Router
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

// 5. Register for Type Safety
declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}
