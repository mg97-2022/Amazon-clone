import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (reqData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(reqData.url, {
        method: reqData.method ? reqData.method : "GET",
        body: reqData.body ? JSON.stringify(reqData.body) : null,
        headers: reqData.headers ? reqData.headers : {},
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
  }, []);

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
