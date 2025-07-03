import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./config/router-config";
import { queryClient } from "@/core/query";

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

export const Router = () => <RouterProvider router={router} />;
