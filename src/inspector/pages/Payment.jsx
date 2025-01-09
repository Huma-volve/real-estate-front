import React from "react";
import PaidCard from "../../client/components/cards/PaidCard";
import PayCard from "../components/PayCard";
function Payment() {
  return (
    <>
      <PayCard
        image="https://newstart-eg.com/static/images/placeholder.jpg"
        title="عقار آخر في الرياض"
        location="الرياض"
        description="تتكون من صالة ومجلس وثلاث غرف نوم ومطبخ وثلاث دورات مياه وتراس  مطل على الشارع  بمساحة 138م"
        price="85000"
      />
    </>
  );
}

export default Payment;
