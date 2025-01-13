import { useState, useEffect } from "react";
import api, { handleError } from ".././api/axiosConfig";

const useFetchAreasFromCities = (city_id) => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await api.get(`/cities/${city_id}/areas`);
        // console.log(response);
        setAreas(response.data.data || []);
      } catch (error) {
        handleError(error, "Failed to fetch cities");
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (city_id) {
      fetchAreas();
    }
  }, [city_id]);

  return { areas, loading, error };
};

export default useFetchAreasFromCities;
