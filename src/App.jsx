import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./UI/errors/NotFound";
import ErrorElement from "./UI/errors/ErrorElement";
import NotAuthorized from "./UI/errors/NotAuthorized";
import ProtectedRoute from "./navigation/ProtectedRoute";
import RoleProtectedRoute from "./navigation/RoleProtectedRoute";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        // { index: true, element: <Home /> },
        // { path: "login", element: <Login /> },
        // { path: "register", element: <Register /> },
      ],
      errorElement: <ErrorElement />,
    },
    {
      path: "/client",
      element: (
        <ProtectedRoute>
          <RoleProtectedRoute allowedRoles={["client"]}>
            {/* <ClientDashboard /> */}
          </RoleProtectedRoute>
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    {
      path: "/company",
      element: (
        <ProtectedRoute>
          <RoleProtectedRoute allowedRoles={["company"]}>
            {/* <CompanyDashboard /> */}
          </RoleProtectedRoute>
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    {
      path: "/reviewer",
      element: (
        <ProtectedRoute>
          <RoleProtectedRoute allowedRoles={["reviewer"]}>
            {/* <ReviewerDashboard /> */}
          </RoleProtectedRoute>
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    {
      path: "/inspector",
      element: (
        <ProtectedRoute>
          <RoleProtectedRoute allowedRoles={["inspector"]}>
            {/* <InspectorDashboard /> */}
          </RoleProtectedRoute>
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    { path: "/not-authorized", element: <NotAuthorized /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={routes} />;
}
