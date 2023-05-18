import { Box } from "@sensedia-ui/grid";
import { Table, TBody, TD, TH, THead, TR } from "@sensedia-ui/primitives";
import { Button, DeleteIcon, VisibilityIcon } from "@sensedia-ui/react";
import { Skeleton } from "@sensedia-ui/skeleton";
import React from "react";
import { Link } from "react-router-dom";
import { useGetPosts } from "Features/Posts/Hooks/useGetPosts";
import { PostPagination } from "../Pagination";

function TableContent({ children }: React.PropsWithChildren) {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Title</TH>
          <TH>Description</TH>
          <TH>Actions</TH>
        </TR>
      </THead>
      {children}
    </Table>
  );
}

export function Content() {
  const { data, isLoading, error } = useGetPosts();

  if (error) {
    return <Box color="critical">Error loading posts</Box>;
  }

  if (data?.data.posts.length === 0) {
    return (
      <Box color="warning">
        No posts found with this filter. Please try adjusting your search terms
        or selecting a different filter.
      </Box>
    );
  }

  if (isLoading) {
    return (
      <TableContent>
        {Array.from({ length: 6 }).map((_, i) => (
          <TBody key={i.toString()}>
            <TR>
              <TD>
                <Skeleton />
              </TD>
              <TD>
                <Skeleton />
              </TD>
              <TD>
                <Skeleton />
              </TD>
            </TR>
          </TBody>
        ))}
      </TableContent>
    );
  }

  return (
    <>
      <TableContent>
        {data?.data.posts.map((post) => (
          <TBody key={post._id}>
            <TR>
              <TD>{post.title}</TD>
              <TD>{post.description}</TD>
              <TD>
                <Button variant="flat" as={Link} to={`${post._id}/overview`}>
                  <VisibilityIcon />
                </Button>
                <Button variant="flat" as={Link} to={`${post._id}/delete`}>
                  <DeleteIcon />
                </Button>
              </TD>
            </TR>
          </TBody>
        ))}
      </TableContent>
      <PostPagination totalItems={data?.data.totalItems ?? 1} />
    </>
  );
}
