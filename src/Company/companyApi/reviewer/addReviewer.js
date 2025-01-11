import api, { handleError } from "../../../api/axiosConfig";

const addReviewer = async (value) => {
  const token = localStorage.getItem("token");

  try {
    const response = await api.post(
      `/company/reviewers`, 
      {
        username: value.username,
        email: value.email,
        password: value.password,
        password_confirmation: value.password_confirmation,
        phone: value.phone,
        data: value.data
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    console.log("Inspector added successfully:", response.data.data);
    return response.data.data;
  } catch (error) {
    handleError(error); 
    throw error; 
  }
};

export default addReviewer;