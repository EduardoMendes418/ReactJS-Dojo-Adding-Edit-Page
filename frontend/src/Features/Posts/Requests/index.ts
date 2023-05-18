import { Axios } from "../../HttpAdapter";
import { Posts } from "../Types";

export const getPosts: Posts.GetPosts = (params) => {
  return Axios.get(`/posts?${params}`);
};

export const getPost: Posts.GetPost = (id) => {
  return Axios.get(`/posts/${id}`);
};

export const deletePost: Posts.DeletePost = (id) => {
  return Axios.delete(`/posts/${id}`);
};

export const createPost: Posts.CreatePost = (payload) => {
  return Axios.post(`/posts`, payload);
};
