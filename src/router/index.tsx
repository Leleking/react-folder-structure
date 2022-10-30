/* eslint-disable */
// @ts-nocheck

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import PrivateWrapper from "./ProtectedRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component, auth }) => (
          <Route
            path={path}
            key={path}
            element={<PrivateWrapper auth={auth}>{component}</PrivateWrapper>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
