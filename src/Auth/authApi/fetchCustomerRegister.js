import api, { handleError } from "../../api/axiosConfig";

const fetchCustomerRegister = async (values) => {
  try {
    const response = await api.post("client/register-individual", {
      username: values.username,
      email: values.email,
      phone: values.phoneNumber,
      city_id: values.city,
      password: values.password,
      terms_accepted: values.termsAccepted,
      password_confirmation: values.confirmPassword,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default fetchCustomerRegister;
