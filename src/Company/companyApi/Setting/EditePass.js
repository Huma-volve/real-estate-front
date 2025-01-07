import api, { handleError } from "../../../api/axiosConfig";

const editepassword = async (values) => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.post(
      "update-password",
      {
        password: values.password,
        current_password: values.current_password,
        password_confirmation: values.password_confirmation,
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

export default editepassword;
