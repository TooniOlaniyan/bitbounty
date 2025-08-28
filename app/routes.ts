import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // Landing layout routes (public + protected)
  layout("layouts/landing-layout.tsx", [
    index("routes/home.tsx"),
    route("challenges", "routes/challenges.tsx"),
    route("challenges/:challengeId", "routes/challengeId.tsx"),
    route("audit-log", "routes/audit-log.tsx"),
    route("dashboard", "routes/dashboard/dashboard.tsx"),
  ]),

  // Auth layout routes (public)
  layout("layouts/auth-layout.tsx", [
    route("signin", "routes/auth/signin.tsx"),
  ]),
] satisfies RouteConfig;
