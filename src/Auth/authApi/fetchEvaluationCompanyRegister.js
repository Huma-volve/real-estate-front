import api, { handleError } from "../../api/axiosConfig";

const fetchEvaluationCompanyRegister = async (formData) => {
  try {
    const response = await api.post("company/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default fetchEvaluationCompanyRegister;
