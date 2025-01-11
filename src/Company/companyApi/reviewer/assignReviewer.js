import api, { handleError } from "../../../api/axiosConfig";

const assignReviewer = async (id) => {
    const token = localStorage.getItem("token");

  try {
    const response = await api.put(
    `/projects/reviewers/${id}`,
      {
        reviewer_id: id,
      }
      ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default assignReviewer;