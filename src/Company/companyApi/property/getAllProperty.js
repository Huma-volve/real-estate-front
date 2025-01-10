import api, { handleError } from "../../../api/axiosConfig";

const getAllProperty = async () => {
    const token = localStorage.getItem("token");

  try {
    const response = await api.get(
    "/company/properties",
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

export default getAllProperty;