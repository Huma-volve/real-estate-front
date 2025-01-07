import ProtectedRoute from "../../navigation/ProtectedRoute";
import ErrorElement from "../../UI/errors/ErrorElement";
import Details from "../Pages/Details/Details";
import CompanyHome from "../Pages/Home/Home";
// import RoleProtectedRoute from "../../navigation/RoleProtectedRoute";
import Index from "../pages/Index";
import LogOut from "../Pages/LogOut/LogOut";
import Mybalance from "../Pages/Mybalance/Mybalance";
import Paid from "../Pages/paid/Paid";
import Projects from "../Pages/Projects/Projects";
import Seting from "../Pages/Setting/Seting";
import ChooseTeam from "../Pages/ChooseTeam/ChooseTeam";
import Team from "../Pages/Team/Team";
import TeamCard from "../Pages/Team/Team";
import TeamReport from "../Pages/Team/TeamReport";
import TermsAndCondattions from "../Pages/TermsAndCondation/TermsAndCondattions";
import PreviwerReport from "../Pages/Reports/PreviwerReport";
import Profile from "../Pages/Profile/Profile";
import CompanyReport from "../Pages/Reports/CompanyReport";
import Comments from "../Pages/Comments/Comments";




const compantRoute = {
  path: "/company",
  element: (
    <ProtectedRoute>
      {/* <RoleProtectedRoute allowedRoles={["client"]}> */}
      <Index />
      {/* </RoleProtectedRoute> */}
    </ProtectedRoute>
  ),
  errorElement: <ErrorElement />,
  children: [
    { index: true, element: <CompanyHome /> },
    {path:"team",element:<Team/>},
    {path:"settings",element:<Seting/>},
    {path:"terms",element:<TermsAndCondattions/>},
    {path:"projects",element:<Projects/>,children:[
      {index:true,element:<CompanyHome/>},
      {path:"projects",element:<CompanyHome/>},
      {path:"TeamReport",element:<TeamReport/>},
      {path:"details",element:<Details/>},
      {path:"chooseTeam",element:<ChooseTeam/>},
      {path:"previwerReport",element:<PreviwerReport/>},
      {path:"companyReport",element:<CompanyReport/>},

      {path:"profile",element:<Profile/>},
      {path:"comments",element:<Comments/>},
      
      
    ]},
    {path:"mybalance" ,element:<Mybalance/>},
    {path:"",element:<TeamCard/>},
    {path:"paid",element:<Paid/>},
    {path:"logout",element:<LogOut/>},
    
    
    ,
  ],
};

export default compantRoute;
