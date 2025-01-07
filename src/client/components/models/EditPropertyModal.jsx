import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const EditPropertyModal = ({ isOpen, onClose, property, onSave }) => {
  const [editedProperty, setEditedProperty] = useState({
    address: property.address,
    city: property.city,
    region: property.region,
    description: property.description,
    area: property.area || "",
  });

  const [errors, setErrors] = useState({
    address: "",
    city: "",
    region: "",
    description: "",
    area: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateFields = () => {
    let validationErrors = {};

    if (!editedProperty.address) {
      validationErrors.address = "الرجاء إدخال العنوان";
    }
    if (!editedProperty.city) {
      validationErrors.city = "الرجاء إدخال المدينة";
    }
    if (!editedProperty.region) {
      validationErrors.region = "الرجاء إدخال المنطقة";
    }
    if (!editedProperty.description) {
      validationErrors.description = "الرجاء إدخال الوصف";
    }
    if (!editedProperty.area || editedProperty.area <= 0) {
      validationErrors.area = "الرجاء إدخال مساحة صالحة";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSave = () => {
    if (validateFields()) {
      onSave(editedProperty);
      onClose();
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <h2 className="text-lg font-bold text-primary mb-4">تعديل العقار</h2>
        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm text-gray-600">
            العنوان
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={editedProperty.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm text-gray-600">
            المدينة
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={editedProperty.city}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        {/* Region */}
        <div className="mb-4">
          <label htmlFor="region" className="block text-sm text-gray-600">
            المنطقة
          </label>
          <input
            type="text"
            id="region"
            name="region"
            value={editedProperty.region}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.region && (
            <p className="text-red-500 text-sm">{errors.region}</p>
          )}
        </div>

        {/* Area */}
        <div className="mb-4">
          <label htmlFor="area" className="block text-sm text-gray-600">
            المساحة (م²)
          </label>
          <input
            type="number"
            id="area"
            name="area"
            value={editedProperty.area}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.area && <p className="text-red-500 text-sm">{errors.area}</p>}
        </div>

         {/* Description */}
         <div className="mb-4">
          <label htmlFor="description" className="block text-sm text-gray-600">
            الوصف
          </label>
          <textarea
            id="description"
            name="description"
            value={editedProperty.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="3"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <Button
            label="إغلاق"
            onClick={onClose}
            className="px-4 py-1 ml-5 text-white bg-gray-500 rounded "
          />
          <Button
            label="حفظ"
            onClick={handleSave}
            className="px-4 py-1 text-white bg-primary rounded"
          />
        </div>
      </div>
    </div>
  ) : null;
};

EditPropertyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditPropertyModal;
