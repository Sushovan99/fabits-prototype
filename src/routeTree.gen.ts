/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { Route as rootRoute } from "./routes/__root";
import { Route as Project2Import } from "./routes/project2";
import { Route as Project1Import } from "./routes/project1";
import { Route as IndexImport } from "./routes/index";

// Create/Update Routes

const Project2Route = Project2Import.update({
    path: "/project2",
    getParentRoute: () => rootRoute,
} as any);

const Project1Route = Project1Import.update({
    path: "/project1",
    getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
    path: "/",
    getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
    interface FileRoutesByPath {
        "/": {
            preLoaderRoute: typeof IndexImport;
            parentRoute: typeof rootRoute;
        };
        "/project1": {
            preLoaderRoute: typeof Project1Import;
            parentRoute: typeof rootRoute;
        };
        "/project2": {
            preLoaderRoute: typeof Project2Import;
            parentRoute: typeof rootRoute;
        };
    }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
    IndexRoute,
    Project1Route,
    Project2Route,
]);

/* prettier-ignore-end */
