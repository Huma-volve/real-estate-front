import ProtectedRoute from "../../navigation/ProtectedRoute";
// import RoleProtectedRoute from "../../navigation/RoleProtectedRoute";
import Index from "../pages/Index";
import ErrorElement from "../../UI/errors/ErrorElement";
import ClientHome from "../pages/ClientHome";
import AddProperty from "../pages/AddProperty";
import Terms from "../pages/Terms";
import ClientProfile from "../pages/ClientProfile";
import Offers from "../pages/Offers";
import OfferDetails from "../pages/OfferDetails";
import AcceptedOfferDetails from "../pages/AcceptedOfferDetails";
import Logout from "../pages/Logout";
import Requests from "../pages/Requests";
import Payment from "../pages/Payment";
import PaymentDetails from "../pages/PaymentDetails";
import PaymentData from "../pages/PaymentData";

const clientRoute = {
  path: "/client",
  element: (
    <ProtectedRoute>
      {/* <RoleProtectedRoute allowedRoles={["client"]}> */}
      <Index />
      {/* </RoleProtectedRoute> */}
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: [
    { index: true, element: <ClientHome /> },
    { path: "add-property", element: <AddProperty /> },
    {
      path: "offers",
      children: [
        { index: true, element: <Offers /> },
        { path: "details", element: <OfferDetails /> },
        { path: "accepted-offer-details", element: <AcceptedOfferDetails /> },
      ],
    },
    { path: "requests", element: <Requests /> },
    {
      path: "payment",
      children: [
        { index: true, element: <Payment /> },
        { path: "payment-details", element: <PaymentDetails /> },
        { path: "payment-data", element: <PaymentData/> },
      ],
    },
    { path: "terms", element: <Terms /> },
    { path: "settings", element: <ClientProfile /> },
    { path: "logout", element: <Logout /> },
  ],
};

export default clientRoute;
