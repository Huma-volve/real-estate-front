import PropTypes from "prop-types";
import { Breadcrumb, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AcceptedOfferDetails = () => {
  const location = useLocation();
  const { companyName } = location.state || {};
  return (
    <>
      <Breadcrumb className="m-6">
        <Link
          to="/client/offers"
          className="hover:underline font-bold text-md text-primary"
        >
          عروض
        </Link>
        <Breadcrumb.Item>
          <span className="text-primary font-bold text-md">
            {" "}
            تفاصيل عرض مقبول{" "}
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-[90%]  bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl text-primary font-bold mb-4">{companyName}</h2>
        <p className="text-black font-bold mb-4">
          اهلاً بك نحن {companyName} للعقارات يمكنك الأطلاع علي ملف السيرة
          الذاتية الخاص بنا.
        </p>

        <div className="bg-[#f2f8f6] flex w-[50%] rounded p-4 items-center">
          <img
            src="/inspector.png"
            alt="Inspector Image"
            className="w-20 h-20 rounded-full mr-4 object-contain"
          />
          <p className="font-bold text-black mr-4"> كود المعاين: 123456 </p>
          <Button className="bg-primary">مشاهدة الملف الشخصي</Button>
        </div>
      </div>
    </>
  );
};

AcceptedOfferDetails.propTypes = {
  companyName: PropTypes.string,
};

export default AcceptedOfferDetails;
