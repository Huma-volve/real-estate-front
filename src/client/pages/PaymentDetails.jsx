import { Button } from "flowbite-react";
import paymentImage from "../../assets/client/payment.svg";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentDetails = () => {
  const location = useLocation();
  const { title } = location.state || {};
  const navigate = useNavigate();

  const HandlePaymentData = () => {
    navigate("/client/payment/payment-data");
  };

  return (
    <div className="flex h-screen bg-gray-50 gap-20 ">
      <div className="m-10">
        <p className="font-bold text-black text-lg mb-2">المبلغ المستحق</p>
        <p className="border shadow-lg rounded-lg p-4 font-bold text-medium mb-4">
          125,000 ريال
        </p>
        <p className="font-bold mb-4 ">
          المبلغ مقدم مقابل خدمات شركة
          <span className="font-bold text-primary text-medium pr-2">
            {title}
          </span>
        </p>
        <Button className="bg-primary w-full" onClick={HandlePaymentData}>
          دفع
        </Button>
      </div>

      <img src={paymentImage} alt="Payment Illustration" className="w-[40%] " />
    </div>
  );
};

export default PaymentDetails;
