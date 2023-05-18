import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../Requests";
import { Posts } from "../Types";
import { KEY } from "./Key";

export function useDeletePost() {
  const client = useQueryClient();
  return useMutation((id: string) => deletePost(id), {
    onMutate: async (id: string) => {
      await client.cancelQueries([KEY]);

      const backup = client.getQueryData<Posts.Data>([KEY]);

      if (backup) {
        client.setQueryData([KEY], {
          ...backup,
          posts: backup.posts.filter((p) => p._id !== id),
        });
      }
      return { backup };
    },

    onError: (_, __, context) => {
      if (context?.backup) {
        client.setQueryData([KEY], context.backup.posts);
      }
    },
    onSettled: () => client.invalidateQueries([KEY]),
  });
}
