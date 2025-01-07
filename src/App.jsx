import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./UI/errors/NotFound";
import ErrorElement from "./UI/errors/ErrorElement";
import NotAuthorized from "./UI/errors/NotAuthorized";
import ProtectedRoute from "./navigation/ProtectedRoute";
import RoleProtectedRoute from "./navigation/RoleProtectedRoute";
import "./App.css";
import Home from "./Home/Home";
import Inspector from "./inspector/pages/Inspector";
import compantRoute from "./Company/routes/CompanyRoutes";
import clientRoute from "./client/routes/ClientRoute";
import Login from "./Auth/components/Login";
import Register from "./Auth/components/Register";
import CustomerRegister from "./Auth/components/CustomerRegister";
import InspectorRegister from "./Auth/components/InspectorRegister";
import PersonCustomerRegisteration from "./Auth/components/PersonCustomerRegisteration";
import CompanyCustomerRegisteration from "./Auth/components/CompanyCustomerRegisteration";
import EvaluationCompanyRegister from "./Auth/components/EvaluationCompanyRegister";
import { Toaster } from "react-hot-toast";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "customerRegister", element: <CustomerRegister /> },
        {
          path: "evaluationCompanyRegister",
          element: <EvaluationCompanyRegister />,
        },
        { path: "inspectorRegister", element: <InspectorRegister /> },
        {
          path: "personCustomerRegister",
          element: <PersonCustomerRegisteration />,
        },
        {
          path: "companyCustomerRegister",
          element: <CompanyCustomerRegisteration />,
        },
      ],
      errorElement: <ErrorElement />,
    },
    clientRoute,
    compantRoute,
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
            <Inspector />
          </RoleProtectedRoute>
        </ProtectedRoute>
      ),
      errorElement: <ErrorElement />,
    },
    { path: "/not-authorized", element: <NotAuthorized /> },
    { path: "*", element: <NotFound /> },
  ]);

  return<>
  <Toaster/>
  <RouterProvider router={routes} />;
  </>
  
  
}
