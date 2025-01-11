import api, { handleError } from "../../../api/axiosConfig";

const getTerms = async () => {

  try {
    const response = await api.get(
    "/terms",
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    handleError(error);
  }
};

export default getTerms;