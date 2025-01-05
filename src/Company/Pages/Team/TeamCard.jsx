import React from "react";

export default function TeamCard({ setShowEdite }) {
  const handleShowEdite = () => {
    setShowEdite((prev) => !prev);
  };

  return (
    <>
      <div className="rounded-xl shadow-2xl border border-gray-300 p-6 space-y-4 mt-6">
        <div className="relative flex items-center gap-4">
          <div>
            <img
              src="/v987-09.jpg"
              alt="صورة"
              className="w-24 h-24 rounded object-cover"
            />
          </div>
          <div>
            <h2>اسم الموظف</h2>
            <p>الوصف</p>
          </div>

          <div className="absolute -top-3 -left-4 bg-primary text-white py-2 px-6 rounded-full flex items-center justify-center">
            <span>مدقق</span>
          </div>
        </div>

        <button
          className="bg-primary text-white py-2 px-4 rounded w-full"
          onClick={handleShowEdite}
        >
          تعديل
        </button>
        <div className="flex justify-between gap-4 max-[345px]:flex-col">
          <button className="w-1/2 max-[345px]:w-full bg-primary text-white py-2 px-4 rounded">
            حذف
          </button>
          <button className="w-1/2 max-[345px]:w-full text-nowrap bg-primary text-white py-2 px-4 rounded">
            ارسال البيانات
          </button>
        </div>
      </div>
    </>
  );
}
