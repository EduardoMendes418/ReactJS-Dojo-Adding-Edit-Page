import { AxiosResponse } from "axios";

export namespace Posts {
  export type Post = {
    _id: string;
    title: string;
    description: string;
    author: string;
    createdAt: string;
    __v: number;
  };

  export type CreatePayload = Pick<Post, "author" | "description" | "title">;

  export type Data = {
    currentPage: number;
    posts: Post[];
    totalItems: number;
    totalPages: number;
  };

  export type Filter = {
    size: number;
    page: number;
    title?: string;
    author?: string;
  };

  export type GetPosts = (params: string) => Promise<AxiosResponse<Data>>;

  export type GetPost = (id: string) => Promise<AxiosResponse<Post>>;

  export type DeletePost = (id: string) => Promise<AxiosResponse<Post>>;

  export type CreatePost = (
    payload: CreatePayload
  ) => Promise<AxiosResponse<Post>>;
}
