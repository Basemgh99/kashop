import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react"; 
import axiosInstance from "../api/axiosinstance";
function useCategories() {
  const getCategories = async () => {
    const response = await axiosInstance.get(`/Categories`,);

    return response.data;
  };

  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });
}

export default useCategories;