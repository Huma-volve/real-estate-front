import React from "react";
import Layout from "../../UI/layout/Layout";
import { Outlet } from "react-router-dom";
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
function InspectorIndex() {
  const sidebarTabs = [
    { label: "الرئيسية", link: "", icon: <FaHome /> },
    { label: "طلبات", link: "requests", icon: <FaRegBuilding /> },
    { label: "رصيدي", link: "account", icon: <FaProjectDiagram /> },
    { label: "المدفوعات", link: "payments", icon: <FaCreditCard /> },
    { label: "شروط وأحكام", link: "terms", icon: <FaFileContract /> },
    { label: "الإعدادات", link: "settings", icon: <FaCog /> },
    { label: "تسجيل الخروج", link: "logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <Layout sidebarTabs={sidebarTabs}>
      <Outlet />
    </Layout>
  );
}

export default InspectorIndex;
