import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./config/router-config";

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

export const Router = () => <RouterProvider router={router} />;
