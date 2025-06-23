import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/main/router/config/router-config";
import { Home } from "../presentation/screens";

export const GeneralRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
