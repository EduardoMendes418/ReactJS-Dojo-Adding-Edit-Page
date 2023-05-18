import { useQuery } from "@tanstack/react-query";
import { getPost } from "../Requests";
import { KEY } from "./Key";

export function useGetPost(id: string) {
  return useQuery([KEY], () => getPost(id));
}
