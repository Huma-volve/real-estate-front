import Button from "../Button";
import addPicture from "../../../assets/client/addPicture.png";
import addLocation from "../../../assets/client/addLocation.png";
const AddPropertyForm = () => {
  return (
    <div className=" p-8 rounded-lg shadow-lg w-full ">
      <form className="space-y-6">
        {/* Property Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            عنوان العقار
          </label>
          <input
            type="text"
            id="title"
            placeholder="اضاف عنوان العقار"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            نوع العقار
          </label>
          <select
            id="type"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>سكني</option>
            <option>شقة</option>
            <option>فيلا</option>
            <option>أرض</option>
          </select>
        </div>

        {/* Property Area */}
        <div>
          <label htmlFor="area" className="block text-gray-700 font-bold mb-2">
            مساحة العقار
          </label>
          <input
            type="number"
            id="area"
            placeholder="مثال: 250"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            أختر المدينة
          </label>
          <select
            id="city"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>الرياض</option>
            <option>جدة</option>
            <option>مكة</option>
          </select>
        </div>

        {/* Region */}
        <div>
          <label
            htmlFor="region"
            className="block text-gray-700 font-bold mb-2"
          >
            اختر المنطقة
          </label>
          <select
            id="region"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>حي النرجس</option>
            <option>حي العليا</option>
            <option>حي الصحافة</option>
          </select>
        </div>

        {/* Additional Details */}
        <div>
          <label
            htmlFor="details"
            className="block text-gray-700 font-bold mb-2"
          >
            بعض التفاصيل الإضافية
          </label>
          <textarea
            id="details"
            placeholder="عقار يحتوي على العديد من المزايا"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            rows="4"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-around ">
          <Button
            label="إضافة موقع"
            onClick={() => console.log("Delete clicked")}
            className=" px-5 py-1 "
            icon={addLocation}
          />
          <Button
            label="إضافة صور العقار"
            onClick={() => console.log("Delete clicked")}
            className=" px-5 py-1"
            icon={addPicture}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg font-bold hover:bg-opacity-90"
          >
            تأكيد
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyForm;
