import React from "react";

function Card({ info }) {
  return (
    <div className=" bg-white rounded-lg shadow-lg ">
      <img
        src={info.image}
        alt="Property"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between">
          <div className="mb-4 flex-1">
            {" "}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {info.title}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{info.description}</p>
            <p className="text-sm text-gray-600 mb-4">
              اسم شركة التقييم:{" "}
              <span className="font-bold">{info.companyName}</span>
            </p>
          </div>
          <div className="flex-1">
            {" "}
            <button className="bg-custom-gradient text-white text-sm px-4 py-2 rounded-lg w-full mb-4">
              تقديم تقرير المعاينة
            </button>
          </div>
        </div>

        <div className="flex justify-around items-center gap-2 mb-4">
          <button className="bg-green-500 p-3 rounded-full shadow-lg">
            <img
              src="https://img.icons8.com/material-rounded/24/ffffff/whatsapp.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </button>
          <button className="bg-blue-500 p-3 rounded-full shadow-lg">
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/new-post.png"
              alt="Email"
              className="w-6 h-6"
            />
          </button>
          <button className="bg-cyan-500 p-3 rounded-full shadow-lg">
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/chat.png"
              alt="Chat"
              className="w-6 h-6"
            />
          </button>
        </div>

        <button className="bg-custom-gradient text-white text-sm px-4 py-2 rounded-lg w-full">
          مشاهدة التفاصيل
        </button>
      </div>
    </div>
  );
}

export default Card;
