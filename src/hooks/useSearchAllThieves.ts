import { endpoints } from "@/constants/API_ENDPOINTS";
import { ApiService } from "@/service";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (searchQuery: string) => {
  const data = await ApiService.get(
    `${endpoints["userList"]}?search=${searchQuery}`,
    {}
  );
  return data;
};

export function useListSearchQuery(searchQuery: string) {
  return useQuery({
    queryKey: ["search-list-query", searchQuery],
    queryFn: ({ queryKey }) => {
      const [, search] = queryKey;
      return fetchData(search as string);
    },
  });
}
