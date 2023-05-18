import {
  Button,
  DialogActions,
  DialogDescription,
  Toast,
} from "@sensedia-ui/react";
import { useDeletePost } from "Features/Posts/Hooks/useDeletePost";
import React from "react";
import { useParams } from "react-router-dom";

type Props = {
  setOpen: (value: boolean) => void;
};

export function DeleteModal({ setOpen }: Props) {
  const { id } = useParams();
  const { mutateAsync, isLoading } = useDeletePost();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await mutateAsync(id ?? "");
      setOpen(false);
      Toast.success("Successfully deleted!");
    } catch (err: any) {
      Toast.error(err.message);
    }
  }

  function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <DialogDescription>Are you sure?</DialogDescription>
      <DialogActions>
        <Button variant="text" type="reset">
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Confirm
        </Button>
      </DialogActions>
    </form>
  );
}
