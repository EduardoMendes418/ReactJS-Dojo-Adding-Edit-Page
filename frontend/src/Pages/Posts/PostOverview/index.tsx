import {
  Box,
  Button,
  Col,
  EditIcon,
  Row,
  Section,
  Typography,
} from "@sensedia-ui/react";
import { useGetPost } from "Features/Posts/Hooks/useGetPost";
import { Posts } from "Features/Posts/Types";
import { WrapperContent } from "Layout/WrapperContent";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { PostForm } from "../Components/PostForm";

export function PostOverview() {
  const { id = "" } = useParams<{ id: string }>();
  const { data } = useGetPost(id);

  return (
    <WrapperContent>
      <Row>
        <Col lg={12}>
          <Box justify="flex-end">
            <Button variant="text" as={Link} to="/posts">
              Back
            </Button>
            <Button as={Link} to={`/posts/${id}/edit `}>
              <EditIcon /> Edit
            </Button>
          </Box>
        </Col>
      </Row>

      <PostInfo post={data?.data} />
    </WrapperContent>
  );
}

type Props = {
  post?: Posts.Post;
};

export function PostInfo({ post }: Props) {
  return (
    <Row>
      <Col lg={6}>
        <Typography as="label-2">Title</Typography>
        <Typography fontSize={16} mt={15}>
          {post?.title}
        </Typography>
      </Col>
      <Col lg={6}>
        <Typography as="label-2">Author</Typography>
        <Typography fontSize={16} mt={15}>
          {post?.author}
        </Typography>
      </Col>
      <Col lg={12}>
        <Typography as="label-2">Title</Typography>
        <Typography fontSize={16} mt={15}>
          {post?.description}
        </Typography>
      </Col>
    </Row>
  );
}
