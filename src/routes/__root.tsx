import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const isDev = import.meta.env.DEV;

export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet />
            {isDev && <TanStackRouterDevtools />}
        </>
    ),
});
