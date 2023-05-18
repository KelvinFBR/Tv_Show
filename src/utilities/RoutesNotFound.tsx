import { Route, Routes } from "react-router";

interface routesNotFoundProps {
    children: JSX.Element[] | JSX.Element;
}

export const RoutesNotFound = ({ children }: routesNotFoundProps) => {
    return (
        <Routes>
            {children}
            <Route path="/*" element={<>NOT FOUND</>} />
        </Routes>
    );
};