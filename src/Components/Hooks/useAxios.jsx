import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "https://gatekeeper-server-sigma.vercel.app/",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;