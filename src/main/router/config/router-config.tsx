import { createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { generalRoutes } from "@/app/features/general";
import { pokemonRoutes } from "@/app/features/pokemon";

type RouterContext = {
  queryClient: QueryClient;
};

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});

export const routeTree = rootRoute.addChildren([
  ...generalRoutes,
  ...pokemonRoutes,
]);
