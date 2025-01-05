import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./UI/errors/NotFound";
import ErrorElement from "./UI/errors/ErrorElement";
import NotAuthorized from "./UI/errors/NotAuthorized";
import ProtectedRoute from "./navigation/ProtectedRoute";
import RoleProtectedRoute from "./navigation/RoleProtectedRoute";
import "./App.css";
import Home from "./Home/Home";
import CompanyHome from "./Company/Pages/Home/Home";
import clientRoute from "./client/routes/ClientRoute";
import Login from "./Auth/components/Login";

// ! You can find an example for routing for your flow in company role
import TermsAndCondattions from "./Company/Pages/TermsAndCondation/TermsAndCondattions";
import Details from "./Company/Pages/Details/Details";
import Mybalance from "./Company/Pages/Mybalance/Mybalance";
import Paid from "./Company/Pages/paid/paid";
import Team from "./Company/Pages/Team/Team";
import Seting from "./Company/Pages/Setting/Seting";




export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        // { path: "register", element: <Register /> },
      { path: "/", element: <Home /> },
      {path: "terms", element: <TermsAndCondattions />},
      {path: "details", element: <Details />},
      {path: "mybalance", element: <Mybalance />},
      {path: "paid", element: <Paid />},
      {path: "team", element: <Team/>},
      {path:"setting", element: <Seting/>},
     
        
        // { index: true, element: <Home /> },
      ],
      errorElement: <ErrorElement />,
    },
    clientRoute,
    {
      //! Here is the main route of the role
      path: "/company",
      element: (
        <ProtectedRoute>
          {/* <RoleProtectedRoute allowedRoles={["company"]}> //! We will uncommented this line after creating the role */}
            <CompanyHome />
           
          {/* </RoleProtectedRoute> */}
        </ProtectedRoute>
      ),
      children: [
        //! Create a nested routes for your role
           
                { path: "settings", //! Name for the path
          element: (
            <ProtectedRoute>
              <RoleProtectedRoute allowedRoles={["company"]}>
                {/* Here is the element of the path */}
               
              </RoleProtectedRoute>
            </ProtectedRoute>
          ),
        }, 
       
       
      ],
      errorElement: <ErrorElement />, //! and finally the error element
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
