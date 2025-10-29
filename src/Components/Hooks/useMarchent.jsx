import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useMarchent = () => {
  const axiosSecure = useAxios();
  const {
    data: merchants,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["merchants"],
    queryFn: async () => {
      const res = await axiosSecure.get("/merchants");
      return res.data;
    },
  });

  return [merchants, refetch, isLoading];
};

export default useMarchent;
