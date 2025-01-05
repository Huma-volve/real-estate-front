import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Dialog from "../components/Dialog";
import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";
import Confirmation from "../components/Confirmation";
import done from "../../assets/client/done.svg";

const OfferDetails = () => {
  const location = useLocation();
  const { companyName, price } = location.state || {};
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [isAcceptDialogOpen, setIsAcceptDialogOpen] = useState(false);
  const [dialogStatement, setDialogStatement] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  if (!location.state) {
    return <p className="text-center mt-4">No offer details available.</p>;
  }

  const handleAccept = () => {
    console.log("Offer Accepted");
    setIsAcceptDialogOpen(false);
    navigate("/client/offers/accepted-offer-details", {
      state: {
        companyName: companyName,
      },
    });
  };

  const handleReject = () => {
    console.log("Offer Rejected");
    setIsRejectDialogOpen(false);
    setShowConfirmation(true);
  };

  const openAcceptDialog = () => {
    setDialogStatement("هل أنت متأكد من قبول هذا العرض؟");
    setIsAcceptDialogOpen(true);
  };

  const openRejectDialog = () => {
    setDialogStatement("هل أنت متأكد من رفض هذا العرض؟");
    setIsRejectDialogOpen(true);
  };

  return (
    <>
      <Breadcrumb className="m-6">
        <Link to="/client/offers" className="hover:underline font-bold text-md">
          عروض
        </Link>
        <Breadcrumb.Item>
          <span className="text-primary">تفاصيل العرض</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-[90%] mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl text-primary font-bold mb-4">{companyName}</h2>
        <p className="text-black font-bold mb-4">
          اهلاً بك نحن شركة عقاركم للعقارات يمكنك الأطلاع علي ملف السيرة الذاتية
          الخاص بنا . نري ان هذا العقار يقع في مكان جيد ولكن عدد الغرف قليل
          بالنسبة للمساحه ، سنترك لك عرضنا.
        </p>
        <p className="text-xl font-bold text-[#8c94c2] mb-2">
          مبلغ التقييم: {price} ريال سعودي
        </p>
        <div className="mt-4 flex justify-around">
          <button
            className="bg-red-500 text-white font-bold py-2 px-6 rounded w-[20%]"
            onClick={openRejectDialog}
          >
            رفض
          </button>
          <button
            className="bg-green-500 text-white font-bold py-2 px-6 rounded w-[20%]"
            onClick={openAcceptDialog}
          >
            قبول
          </button>
        </div>
        {/* Reject Dialog */}
        <Dialog
          isOpen={isRejectDialogOpen}
          onAccept={handleReject}
          onReject={() => setIsRejectDialogOpen(false)}
          statement={dialogStatement}
        />
        {/* Accept Dialog */}
        <Dialog
          isOpen={isAcceptDialogOpen}
          onAccept={handleAccept}
          onReject={() => setIsAcceptDialogOpen(false)}
          statement={dialogStatement}
        />
      </div>

      {showConfirmation && (
        <Confirmation
          message="تمت عملية الرفض بنجاح"
          onTimeout={() => setShowConfirmation(false)}
          image={done}
        />
      )}
    </>
  );
};

export default OfferDetails;
