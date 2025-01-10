import { Outlet } from "react-router-dom";
import Layout from "../../UI/layout/Layout";
import {
  FaHome,
  FaUsers,
  FaProjectDiagram,
  FaCreditCard,
  FaRegBuilding,
  FaFileContract,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

function Index() {
  const sidebarTabs = [
    { label: "الرئيسية", link: "", icon: <FaHome /> },
    { label: "الفريق", link: "team", icon: <FaUsers /> },
    { label: "المشاريع", link: "projects", icon: <FaProjectDiagram /> },
    { label: "رصيدي", link: "mybalance", icon: <MdOutlineAccountBalanceWallet />},
    { label: "المدفوعات", link: "paid", icon: <FaCreditCard /> },
    { label: "شروط وأحكام", link: "terms", icon: <FaFileContract /> },
    { label: "الإعدادات", link: "settings", icon: <FaCog /> },
   
  ];

  return (
    <Layout sidebarTabs={sidebarTabs}>
     <Outlet/>
    </Layout>
  );
}

export default Index;
