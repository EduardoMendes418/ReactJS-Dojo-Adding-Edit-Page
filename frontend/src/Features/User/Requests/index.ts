import { Axios } from "../../HttpAdapter";
import { Users } from "../Types";

export const getUsers: Users.GetUsers = (params) => {
  return Axios.get(`/users${params}`);
};
