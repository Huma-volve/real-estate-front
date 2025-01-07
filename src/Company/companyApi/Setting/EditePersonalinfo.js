import api, { handleError } from "../../../api/axiosConfig";

const editepersonalInfo = async (values) => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.post(
      "update-profile",
      {
        username: values.username,
        email: values.email,
        phone_number: values.password_confirmation,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default editepersonalInfo;