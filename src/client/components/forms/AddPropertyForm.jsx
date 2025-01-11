import { useState, useRef } from "react";
import Button from "../Button";
import addPicture from "../../../assets/client/addPicture.png";
import addLocation from "../../../assets/client/addLocation.png";
import { addProperty } from "../../clientApi/Properties";
import LeafletMapPicker from "../LeafletMapPicker";
import { Alert } from "flowbite-react";

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    region: "",
    description: "",
    area: "",
    type: "سكني",
    images: [],
    latitude: null,
    longitude: null,
  });

  const [errors, setErrors] = useState({});
  const [previewImages, setPreviewImages] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const fileInputRef = useRef(null);

  const validateInputs = () => {
    const newErrors = {};
    if (!formData.address.trim()) newErrors.address = "يرجى اضافة عنوان للعقار";
    if (!formData.city) newErrors.city = "يرجى اختيار المدينة.";
    if (!formData.region) newErrors.region = "يرجى اختيار المنطقة.";
    if (!formData.description.trim()) newErrors.description = "الوصف مطلوب.";
    if (!formData.area || isNaN(formData.area) || formData.area <= 0)
      newErrors.area = "يرجى إدخال مساحة صالحة.";
    if (!formData.latitude || !formData.longitude)
      newErrors.location = "يرجى اختيار الموقع.";
    if (formData.images.length < 3)
      newErrors.images = "يرجى إضافة على الاقل 3 صور.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    console.log("Selected files:", newFiles);

    const updatedFiles = [...formData.images, ...newFiles];

    if (updatedFiles.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        images: "يرجى إضافة على الاقل 3 صور.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, images: "" }));
    }

    setFormData((prev) => ({ ...prev, images: updatedFiles }));

    const filePreviews = updatedFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(filePreviews);
  };

  const handleLocationSelect = (latitude, longitude) => {
    setFormData({ ...formData, latitude, longitude });
    setShowMap(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("address", formData.address);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("region", formData.region);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("area", formData.area);
    formDataToSend.append("latitude", formData.latitude);
    formDataToSend.append("longitude", formData.longitude);

    formDataToSend.append("type", formData.type);
    formData.images.forEach((file) => formDataToSend.append("images[]", file));

    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    setLoading(true);
    try {
      const response = await addProperty(formDataToSend);
      console.log("Property Added:", response);
      setSuccessMessage("(: تمت إضافة العقار بنجاح!");
      setFormData({
        address: "",
        city: "",
        region: "",
        description: "",
        area: "",
        type: "سكني",
        images: [],
        latitude: null,
        longitude: null,
      });
      setPreviewImages([]);
    } catch (error) {
      console.error("Failed to add property:", error);
      setErrors({ submit: "فشل إضافة العقار." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-lg shadow-lg bg-white  w-full ">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-1"
          >
            عنوان العقار
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="أدخل عنوان العقار"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* Type */}
        <div>
          <label htmlFor="type" className="block text-gray-700 font-bold mb-1">
            نوع العقار
          </label>
          <select
            id="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>سكني</option>
            <option>شقة</option>
            <option>فيلا</option>
            <option>أرض</option>
          </select>
        </div>

        {/* Area */}
        <div>
          <label htmlFor="area" className="block text-gray-700 font-bold mb-1">
            مساحة العقار
          </label>
          <input
            type="number"
            id="area"
            value={formData.area}
            onChange={handleInputChange}
            placeholder="مثال: 250"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.area && <p className="text-red-500 text-sm">{errors.area}</p>}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-gray-700 font-bold mb-1">
            أختر المدينة
          </label>
          <select
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">اختر المدينة</option>
            <option>الرياض</option>
            <option>جدة</option>
            <option>مكة</option>
          </select>
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        {/* Region */}
        <div>
          <label
            htmlFor="region"
            className="block text-gray-700 font-bold mb-1"
          >
            اختر المنطقة
          </label>
          <select
            id="region"
            value={formData.region}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">اختر المنطقة</option>
            <option>حي النرجس</option>
            <option>حي العليا</option>
            <option>حي الصحافة</option>
          </select>
          {errors.region && (
            <p className="text-red-500 text-sm">{errors.region}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-1"
          >
            بعض التفاصيل الإضافية
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="عقار يحتوي على العديد من المزايا"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            rows="4"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        {/* Location Button */}
        <div>
          <Button
            label="إضافة موقع"
            onClick={() => setShowMap(!showMap)}
            className="w-[40%] bg-gray-200 text-black rounded-lg py-2"
            icon={addLocation}
          />
          {formData.latitude && formData.longitude && (
            <p className="mt-2 text-sm text-gray-600">
              الموقع المحدد: {formData.latitude}, {formData.longitude}
            </p>
          )}
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
          {showMap && (
            <LeafletMapPicker onLocationSelect={handleLocationSelect} />
          )}
        </div>

        {/* Add Images */}
        <div>
          <Button
            label="إضافة صور العقار"
            onClick={() => fileInputRef.current.click()}
            className="w-[40%] bg-gray-200 text-black rounded-lg py-2"
            icon={addPicture}
          />

          <input
            type="file"
            id="images"
            multiple
            onChange={handleFileChange}
            className="hidden"
            ref={fileInputRef}
          />

          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images}</p>
          )}
          {previewImages.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {previewImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Preview ${index}`}
                  className="w-full h-auto"
                />
              ))}
            </div>
          )}
        </div>
  

        {/* Submit */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg font-bold hover:bg-opacity-90 w-[50%]"
            disabled={loading}
          >
            {loading ? "جاري الإضافة..." : "تأكيد"}
          </button>
        </div>
      </form>

      {successMessage && (
        <Alert color="success" onDismiss={() => setSuccessMessage("")}>
          {successMessage}
        </Alert>
      )}
      {errors.submit && (
        <Alert
          color="failure"
          onDismiss={() => setErrors({ ...errors, submit: "" })}
          className="text-danger text-bold"
        >
          {errors.submit}
        </Alert>
      )}
    </div>
  );
};

export default AddPropertyForm;
