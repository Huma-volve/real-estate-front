import api, { handleError } from "../../../api/axiosConfig";

const assignInspector = async (id) => {
    const token = localStorage.getItem("token");

  try {
    const response = await api.put(
    `/projects/inspectors/${id}`,
    {
      inspector_id: id,
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

export default assignInspector;