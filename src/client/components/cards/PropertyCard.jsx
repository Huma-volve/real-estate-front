import Button from "../Button";
import cancel from "../../../assets/client/cancel.png";
import deleteIcon from "../../../assets/client/delete.svg";
import edit from "../../../assets/client/edit.png";
import PropTypes from "prop-types";
import { deleteProperty, updateProperty } from "../../clientApi/Properties";
import Dialog from "../Dialog";
import { useState } from "react";
import EditPropertyModal from "../models/EditPropertyModal";

const PropertyCard = ({ property, index, onDelete, onEdit }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [dialogStatement, setDialogStatement] = useState("");
  const [propertyToDelete, setPropertyToDelete] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeleteDialog = () => {
    setDialogStatement("هل أنت متأكد من حذف هذا العقار؟");
    setIsDeleteDialogOpen(true);
    setPropertyToDelete(property.id);
  };

  const handleDelete = async () => {
    if (propertyToDelete) {
      try {
        await deleteProperty(propertyToDelete);
        setIsDeleted(true);
        setIsDeleteDialogOpen(false);
        if (onDelete) {
          onDelete(property.id);
        }
      } catch (error) {
        console.error("Failed to delete property:", error);
      }
    }
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (editedProperty) => {
    try {
      const updatedProperty = await updateProperty(property.id, editedProperty);
      if (onEdit) {
        onEdit(updatedProperty.data);
      }
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Failed to update property:", error);
    }
  };

  const defaultImage = "https://newstart-eg.com/static/images/placeholder.jpg";

  return (
    <div
      className={`w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ${
        isDeleted ? "opacity-0 scale-95" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-40">
        <img
          src={property.images?.[0]?.url || defaultImage}
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-primary text-white text-sm px-3 py-1 rounded">
          عرض: {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">
          {property.address}
        </h3>
        <p className="text-black font-bold text-sm mb-1">
          {property.city}, {property.region}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Buttons */}
        <div className="flex justify-between">
          <Button
            icon={edit}
            label="تعديل"
            onClick={openEditModal}
            className="px-5 py-1"
          />
          <Button
            icon={cancel}
            label="حذف"
            onClick={openDeleteDialog}
            className="px-5 py-1"
          />
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        isOpen={isDeleteDialogOpen}
        onAccept={handleDelete}
        onReject={() => setIsDeleteDialogOpen(false)}
        statement={dialogStatement}
        image={deleteIcon}
      />

      {/* Edit Property Modal */}
      <EditPropertyModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        property={property}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default PropertyCard;
