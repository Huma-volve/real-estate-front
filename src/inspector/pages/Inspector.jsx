import React from "react";
import Card from "../components/Card";
import Layout from "../../UI/layout/Layout"
function Inspector() {
  const info = {
    title: "عقار الشروق",
    description: ` عقار في شارع السند، حي النرجس. الرياض، منطقة الرياض.`,
    companyName: `شركة عقاركم`,
    image: "https://via.placeholder.com/400x200",
  };
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
        {" "}
        <div className="col-span-1">
          <Card info={info} />
        </div><div className="col-span-1">
          <Card info={info} />
        </div><div className="col-span-1">
          <Card info={info} />
        </div><div className="col-span-1">
          <Card info={info} />
        </div><div className="col-span-1">
          <Card info={info} />
        </div><div className="col-span-1">
          <Card info={info} />
        </div>
      </div>
    </section>
  );
}

export default Inspector;
