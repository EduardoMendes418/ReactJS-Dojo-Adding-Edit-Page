import { createFilter } from "@frontend-commons/hooks";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../Requests";
import { Posts } from "../Types";
import { KEY } from "./Key";

export function useGetPosts() {
  const { queryParams,state } = usePostsFilter();
  const query =  new URLSearchParams(queryParams)
  query.set('page', `${state.page -1}`)
  return useQuery([KEY, queryParams], () => getPosts(query.toString()));
}


export const usePostsFilter = createFilter<Posts.Filter>({
  size: 5,
  page: 1,
  title: "",
  author: "",
});
