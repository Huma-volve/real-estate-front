import paymentImage from "../../assets/client/payment.svg";
import { PaymentDataForm } from "../components/forms/PaymentData";
const PaymentData = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 gap-20">
      <img
        src={paymentImage}
        alt="Payment Illustration"
        className="w-[40%] h-auto"
      />

      <PaymentDataForm />
    </div>
  );
};

export default PaymentData;
