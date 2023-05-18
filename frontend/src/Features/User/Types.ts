import { AxiosResponse } from "axios";

export namespace Users {
  export type User = {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    __v: number;
  };

  type Data = {
    currentPage: number;
    users: User[];
    totalItems: number;
    totalPages: number;
  };

  export type Filter = {
    size: number;
    page: number;
    name?: string;
    email?: string;
  };

  export type GetUsers = (params: string) => Promise<AxiosResponse<Data>>;
}
