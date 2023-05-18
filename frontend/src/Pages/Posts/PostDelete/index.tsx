import { withDialog } from "@frontend-commons/hooks";
import { DeleteModal } from "./DeleteModal";

export const PostDelete = withDialog(DeleteModal)({
  title: "Delete post",
  width: 400,
});
