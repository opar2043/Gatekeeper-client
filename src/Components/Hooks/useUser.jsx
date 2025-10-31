import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useUser = () => {
  const axiosSecure = useAxios()
  const {data: user ,refetch,isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  
  return [user, refetch, isLoading];
};

export default useUser;