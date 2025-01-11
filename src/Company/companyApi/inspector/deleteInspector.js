import api, { handleError } from "../../../api/axiosConfig";

const deleteinspector = async (id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await api.delete(
      `/company/inspectors/${id}`, 
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

   
    return response.data;
  } catch (error) {
    handleError(error); 
    throw error; 
  }
};

export default deleteinspector;
