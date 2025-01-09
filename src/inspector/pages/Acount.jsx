import React from "react";
import img from "../../assets/inspector/dd84aa6b753a8861a71ffcc48daa302c.png";
function Acount() {
  return (
    <div className="px-32 ">
      <div className="bg-white shadow-2xl rounded-2xl text-center p-8">
        <img src={img} alt="" className="max-w-[25%] mx-auto mt-8" />
        <div className="w-[90%] mx-auto bg-[#D1E8E24D] rounded-2xl p-12 mt-14 shadow-2xl ">
          <h2 className="text-4xl font-semibold">رصيد حسابي</h2>
          <p className="text-3xl font-medium text-primary">1,000 ريال</p>
        </div>
        <div className="w-[90%] mx-auto bg-[#D1E8E24D] rounded-2xl p-12 mt-14 shadow-2xl ">
          <h2 className="text-4xl font-semibold">رصيد مستحق</h2>
          <p className="text-3xl font-medium text-primary">500 ريال</p>
        </div>
      </div>
    </div>
  );
}

export default Acount;
