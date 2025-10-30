import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useAuthorization = () => {
  const axiosSecure = useAxios();
  const {
    data: authorization,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["authorization"],
    queryFn: async () => {
      const res = await axiosSecure.get("/authorization");
      return res.data;
    },
  });

  return [authorization, refetch, isLoading];
};

export default useAuthorization;