import {  usePostsFilter, useGetPosts } from "Features/Posts/Hooks/useGetPosts";
import { Pagination } from "@sensedia-ui/react";

type Props = {
  totalItems:number
}
export function PostPagination(props:Props) {
  const { state, setPagination } = usePostsFilter();

  return <Pagination
      setPagination={e=>{
        setPagination({
          page: e.page,
          size: e.limit
        })
      }}
      pagination={{
        size: props.totalItems,
        page: state.page,
        limit: state.size
      }}
  />
}
