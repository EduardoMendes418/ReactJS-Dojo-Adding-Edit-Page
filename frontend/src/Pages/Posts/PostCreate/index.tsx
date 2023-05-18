import {
  Button,
  FieldGroup,
  Row,
  Section,
  SelectBox,
  TextAreaField,
  TextField,
  Toast,
} from "@sensedia-ui/react";
import { useCreatePost } from "Features/Posts/Hooks/useCreatePost";
import { usePostForm } from "Features/Posts/Hooks/usePostForm";
import { Posts } from "Features/Posts/Types";
import { useGetUsersOptions } from "Features/User/Hooks/useGetUsers";
import { WrapperContent } from "Layout/WrapperContent";
import { useNavigate } from "react-router-dom";

type Option = { label: string; value: any };

export function PostCreate() {
  const navigate = useNavigate();
  const { register, ...form } = usePostForm();
  const options = useGetUsersOptions();
  const { mutateAsync } = useCreatePost();

  function parseUserValue(options: Option[]) {
    return options.find((o) => o.value === form.state.values.author);
  }

  async function onSubmit(e: Posts.CreatePayload) {
    try {
      await mutateAsync(e);
      Toast.success("Successfully created!");
      form.resetValues();
      navigate("/posts");
    } catch (err: any) {
      Toast.error(err.message);
    }
  }

  function onReset() {}

  return (
    <WrapperContent>
      <Section p={40}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onReset={form.handleReset(onReset)}
        >
          <Row>
            <FieldGroup lg={8}>
              <TextField
                label="Title"
                placeholder="Title here..."
                {...register("title")}
              />
            </FieldGroup>
            <FieldGroup lg={4}>
              <SelectBox
                label="Author"
                placeholder="Author here..."
                onChange={(e) => form.setFieldValue("author", e?.value)}
                value={parseUserValue(options)}
                options={options}
              />
            </FieldGroup>
            <FieldGroup lg={12}>
              <TextAreaField
                //label="Descriptions"
                placeholder="Description here..."
                {...register("description")}
              />
            </FieldGroup>
          </Row>
          <Row>
            <FieldGroup justify="flex-end">
              <Button type="reset" variant="text">
                Cancel
              </Button>
              <Button>Create</Button>
            </FieldGroup>
          </Row>
        </form>
      </Section>
    </WrapperContent>
  );
}
