import Layout from "./Layout";
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

function Home() {
  const sidebarTabs = [
    { label: "الرئيسية", link: "/home", icon: <FaHome /> },
    { label: "الفريق", link: "/team", icon: <FaUsers /> },
    { label: "المشاريع", link: "/projects", icon: <FaProjectDiagram /> },
    { label: "رصيدي", link: "/balance", icon: <FaRegBuilding /> },
    { label: "المدفوعات", link: "/payments", icon: <FaCreditCard /> },
    { label: "شروط وأحكام", link: "/terms", icon: <FaFileContract /> },
    { label: "الإعدادات", link: "/settings", icon: <FaCog /> },
    { label: "تسجيل الخروج", link: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <Layout sidebarTabs={sidebarTabs}>
      <div>Hello Qaim</div>
    </Layout>
  );
}

export default Home;
