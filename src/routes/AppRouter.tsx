import { Suspense, lazy } from "react";
import { Route } from "react-router";
import { RoutesNotFound } from "../utilities/RoutesNotFound";
import { PublicRoutes } from "./routes";
// import { AuthGuard } from "../guards";
// import { PrivateRoute } from "../pages/private";

const Home = lazy(() => import("../pages/Home"));
const Details = lazy(() => import("../pages/Details"));
const Search = lazy(() => import("../pages/Search"));

export const AppRouter = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <RoutesNotFound>
                <Route path="/" element={<Home />} />
                <Route path={PublicRoutes.DETAILS} element={<Details />} />
                <Route path={PublicRoutes.SEARCH} element={<Search />} />
            </RoutesNotFound>
        </Suspense>
    );
};

