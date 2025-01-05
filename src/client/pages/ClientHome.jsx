import { Breadcrumb } from "flowbite-react";
import PropertyCard from "../components/cards/PropertyCard";

function ClientHome() {
  return (
    <>
    <Breadcrumb className="text-primary font-bold text-lg">
    الرئيسة
    <Breadcrumb.Item>جميع العقارات</Breadcrumb.Item>
  </Breadcrumb>
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
    </>
  );
}

export default ClientHome;
