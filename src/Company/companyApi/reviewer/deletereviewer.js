import api, { handleError } from "../../../api/axiosConfig";

const deletereviewer = async (id) => {
  const token = localStorage.getItem("token");

  try {
    const response = await api.delete(
      `/company/reviewers/${id}`, 
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

export default deletereviewer;
