import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function useCategories() {
  const getCategories = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BURL}/Categories`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );

    return response.data;
  };

  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });
}

export default useCategories;