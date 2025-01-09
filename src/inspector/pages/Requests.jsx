import React, { useState } from "react";
import "./requests.css";

function Requests() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const order = [
    {
      id: 1,
      name: "شركة الاحمدية",
      describtion: `اهلاً بك نحن شركة الاحمدية للعقارات يمكنك الأطلاع علي ملف السيرة الذاتية الخاص بنا . 
      نري ان هذا العقار  يقع في مكان جيد ولكن عدد الغرف قليل بالنسبة للمساحه ، سنترك لك عرضنا.`,
      image: "https://newstart-eg.com/static/images/placeholder.jpg",
      price: 1000000,
      type:'عقار سكني',
      area:"300 متر",
      country:"الرياض",
      email:"alahmdy55@yahoo.com",
      neighborhood:"حي النرجس",
    },
  ];

  const handleAccept = () => {
    setIsAccepted(true);
    setIsRejected(false);
    setIsModalOpen(false);

  };

  const handleReject = () => {
    setIsRejected(true);
    setIsAccepted(false);
    setIsModalOpen(false);

  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {order.map((order) => (
        <div className="bg-white rounded-lg shadow-lg px-4 py-6" key={order.id}>
          <div className="flex">
            <img
              src={order.image}
              alt="Property"
              className="w-1/4 h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold text-primary">{order.name}</h2>
              <p className="text-gray-600">{order.describtion}</p>
            </div>
          </div>
          <div className="mt-8 font-bold text-lg">
            <button
              className={`text-white text-sm px-12 py-2 rounded-lg ml-8 ${
                isAccepted ? "bg-green-500" : "back-green"
              }`}
              onClick={handleAccept}
            >
              قبول
            </button>
            <button
              className={`text-white text-sm px-12 py-2 rounded-lg ml-8 ${
                isRejected ? "bg-red-500" : "back-red"
              }`}
              onClick={handleReject}
            >
              رفض
            </button>
            <button
              className="text-white text-sm px-24 py-2 rounded-lg bg-primary"
              onClick={handleOpenModal}
            >
              مشاهدة التفاصيل
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-lg max-h-[80vh] overflow-y-auto">
      {/* Close Button */}
      <div className="flex ">
        <button
          className="text-black text-lg  py-2 rounded-lg"
          onClick={handleCloseModal}
        >
          X
        </button>
      </div>
      {/* Modal Content */}
      <img src={order[0].image} alt="Property" className="mb-4" />
      <p className="text-gray-600 mb-6">{order[0].describtion}</p>
      <h2 className="text-xl font-bold mb-4 text-primary">النوع</h2>
      <p>{order[0].type}</p>
      <h2 className="text-xl font-bold mb-4 text-primary">المساحة</h2>
      <p>{order[0].area}</p>
      <h2 className="text-xl font-bold mb-4 text-primary">المدينه</h2>
      <p>{order[0].country}</p>
      <h2 className="text-xl font-bold mb-4 text-primary">الحي</h2>
      <p>{order[0].neighborhood}</p>
      <h2 className="text-xl font-bold mb-4 text-primary">شركة التقييم</h2>
      <p>{order[0].name}</p>
      <h2 className="text-xl font-bold mb-4 text-primary">البريد الالكتروني</h2>
      <p>{order[0].email}</p>
      <h2 className="text-xl font-bold mb-4 text-primary">السعر</h2>
      <p>{order[0].price}</p>
      {/* Action Buttons */}
      <div className="flex justify-between gap-6 mt-4">
        <button
          className={`text-white text-sm w-full py-3 rounded-lg ${
            isAccepted ? "bg-green-500" : "back-green"
          }`}
          onClick={handleAccept}
        >
          قبول
        </button>
        <button
          className={`text-white text-sm w-full py-3 rounded-lg ${
            isRejected ? "bg-red-500" : "back-red"
          }`}
          onClick={handleReject}
        >
          رفض
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Requests;
