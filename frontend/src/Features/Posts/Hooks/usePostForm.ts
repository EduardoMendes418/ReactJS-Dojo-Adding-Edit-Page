import { createForm } from "@createform/react";
import z from "zod";

export const usePostForm = createForm({
  initialValues: {
    title: "",
    description: "",
    author: "",
  },
  validationSchema: z.object({
    title: z.string().max(60),
    description: z.string().max(200),
    author: z.string().max(100),
  }),
  mode: "onChange",
});
