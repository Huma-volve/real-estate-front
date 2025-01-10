import api, { handleError } from "../../../api/axiosConfig";

const spacialInspector = async (id) => {
    const token = localStorage.getItem("token");

  try {
    const response = await api.get(
    `/company/inspectors/${id}`,
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

export default spacialInspector;