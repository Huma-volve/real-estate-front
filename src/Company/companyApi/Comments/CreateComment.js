import api, { handleError } from "../../../api/axiosConfig";

const creatComments = async (id, value) => {
  const token = localStorage.getItem("token");

  
  if (!value || !value.comment) {
    throw new Error("The comment value is required");
  }

  try {
    const response = await api.post(
      `/project-commeents/${id}`, 
      {
        comment: value.comment, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    console.log("Comment created successfully:", response.data.data);
    return response.data.data;
  } catch (error) {
    handleError(error); 
    throw error; 
  }
};

export default creatComments;
