import api, { handleError } from "../../api/axiosConfig";

const fetchInspectorRegister = async (formData) => {
  try {
    const response = await api.post("inspector/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default fetchInspectorRegister;
