import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "@/main/router/config/router-config";
import { Home, UnderMaintenance } from "../presentation/screens";

const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  // TODO: Remove redirect when home page is ready
  beforeLoad: () => {
    throw redirect({ to: "/pokemon" });
  },
  component: Home,
});

const UnderMaintenanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/under-maintenance",
  component: UnderMaintenance,
});

export const generalRoutes = [HomeRoute, UnderMaintenanceRoute];
