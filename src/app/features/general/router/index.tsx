import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/main/router/config/router-config";
import { Home, UnderMaintenance } from "../presentation/screens";

const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const UnderMaintenanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/under-maintenance",
  component: UnderMaintenance,
});

export const generalRoutes = [HomeRoute, UnderMaintenanceRoute];
