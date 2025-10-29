import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const usePayment = () => {
  const axiosSecure = useAxios()
  const {data: payment ,refetch,isLoading} = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payment");
      return res.data;
    },
  });
  
  return [payment, refetch, isLoading];
};

export default usePayment;