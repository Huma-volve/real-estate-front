import { useState, useEffect } from "react";
import api, { handleError } from ".././api/axiosConfig";

const useFetchCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await api.get("/cities");
        // console.log(response);
        setCities(response.data.data);
      } catch (error) {
        handleError(error, "Failed to fetch cities");
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return { cities, loading, error };
};

export default useFetchCities;
