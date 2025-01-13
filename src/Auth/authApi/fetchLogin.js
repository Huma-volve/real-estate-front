import api, { handleError } from "../../api/axiosConfig";

const fetchlogin = async (values) => {
  try {
    const response = await api.post("login", {
      email: values.email,
      password: values.password,
    });
    localStorage.setItem("token", response.data.data.token);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export default fetchlogin;
