import api, { handleError } from "../../api/axiosConfig";

const fetchCustomerCompanyRegister = async (formData) => {
  try {
    const response = await api.post("client/register-company", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default fetchCustomerCompanyRegister;
