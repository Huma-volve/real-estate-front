import api, { handleError } from "../../api/axiosConfig";

// Fetch Client Properties
export const getProperties = async () => {
  try {
    const response = await api.get("properties");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch Client Properties");
  }
};

// Add Property
export const addProperty = async (formDataToSend) => {
  for (let [key, value] of formDataToSend.entries()) {
    console.log(key, value);
  }
  try {
    const response = await api.post("properties", formDataToSend);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to add Property");
  }
};

// Delete Property
export const deleteProperty = async (id) => {
  try {
    const response = await api.delete(`properties/${id}`);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to add Property");
  }
};

// Update Property
export const updateProperty = async (id, updatedData) => {
  console.log("Data sent to API:", updatedData);
  try {
    const response = await api.put(`properties/${id}`, updatedData);
    console.log("Response from API:", response.data);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to update Property");
  }
};
