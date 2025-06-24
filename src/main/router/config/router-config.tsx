import { createRootRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { generalRoutes } from "@/app/features/general";
import { pokemonRoutes } from "@/app/features/pokemon";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

export const routeTree = rootRoute.addChildren([
  ...generalRoutes,
  ...pokemonRoutes,
]);
