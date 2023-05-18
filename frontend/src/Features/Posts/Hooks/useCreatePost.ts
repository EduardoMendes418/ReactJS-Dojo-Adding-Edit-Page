import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../Requests";
import { Posts } from "../Types";
import { KEY } from "./Key";

export function useCreatePost() {
  const client = useQueryClient();
  return useMutation((payload: Posts.CreatePayload) => createPost(payload), {
    onMutate: async () => {
      await client.cancelQueries([KEY]);
      const backup = client.getQueryData<Posts.Data>([KEY]);
      return { backup };
    },
    onError: (_, __, context) => {
      if (context?.backup) {
        client.setQueryData([KEY], context.backup.posts);
      }
    },
    onSuccess: (data, _, context) => {
      if (context?.backup) {
        client.setQueryData([KEY], [data.data].concat(context.backup.posts));
      }
    },
    onSettled: () => client.invalidateQueries([KEY]),
  });
}
