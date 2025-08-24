import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // Landing layout routes (public)
  layout("layouts/landing-layout.tsx", [
    index("routes/home.tsx"),
    route("challenges", "routes/challenges.tsx"),
    route("audit-log", "routes/audit-log.tsx"),
  ]),

  // Auth layout routes (public)
  layout("layouts/auth-layout.tsx", [
    route("signup", "routes/auth/signup.tsx"),
    route("signin", "routes/auth/signin.tsx"),
  ]),

  // Dashboard layout routes (protected)
  layout("layouts/dashboard-layout.tsx", [
    route("dashboard", "routes/dashboard/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
