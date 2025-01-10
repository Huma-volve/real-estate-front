import api, { handleError } from "../../../api/axiosConfig";

const spacialReviewer = async (id) => {
    const token = localStorage.getItem("token");

  try {
    const response = await api.get(
    `/company/reviewers/${id}`,
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

export default spacialReviewer;