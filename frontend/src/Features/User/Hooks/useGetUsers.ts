import { createFilter } from "@frontend-commons/hooks";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../Requests";
import { Users } from "../Types";

export function useGetUsers() {
  const { queryParams } = useUsersFilter();
  return useQuery([`users?${queryParams}`, queryParams], () =>
    getUsers(queryParams)
  );
}

export function useGetUsersOptions() {
  const data = useQuery([`users-options`], () => getUsers(""));

  return (
    data.data?.data.users.map((user) => ({
      label: user.name,
      value: user._id,
    })) ?? []
  );
}

export const useUsersFilter = createFilter<Users.Filter>({
  size: 5,
  page: 0,
});
