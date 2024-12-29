import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {

        //!apply logic to check if user is authenticated, when API is ready
    };
    fetchUser();
  }, []);

  return { user, isAuthenticated };
}
