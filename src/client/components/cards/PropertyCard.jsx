import Button from "../Button";
import cancel from "../../../assets/client/cancel.png";
import edit from "../../../assets/client/edit.png";

const PropertyCard = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative h-40">
        <img
          src="https://newstart-eg.com/static/images/placeholder.jpg"
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-primary text-white text-sm px-3 py-1 rounded">
          عرض: 1
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary mb-2">الرياض</h3>
        <p className="text-black font-bold text-sm mb-1 ">
          عقار في شارع السند، حي النرجس، الرياض، منطقة الرياض
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          تتكون من صالة ومجلس وثلاث غرف نوم ومطبخ وثلاث دورات مياه وتراس مطل على
          الشارع بمساحة 138م
        </p>

        {/* Buttons */}
        <div className="flex justify-between">
          <Button
            icon={edit}
            label="تعديل"
            onClick={() => console.log("Edit clicked")}
            className="px-5 py-1"
          />
          <Button
            icon={cancel}
            label="إنهاء"
            onClick={() => console.log("Delete clicked")}
            className=" px-5 py-1"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
