import api, { handleError } from "../../../api/axiosConfig";

const logout = async () => {
    const token = localStorage.getItem("token");
  try {
    const response = await api.post(
      "/logout",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default logout;
