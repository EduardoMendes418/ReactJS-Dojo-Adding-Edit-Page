import { Box, Col, Row } from "@sensedia-ui/grid";
import { Button, SelectBox, TextField } from "@sensedia-ui/primitives";
import React from "react";
import { usePostsFilter } from "Features/Posts/Hooks/useGetPosts";
import { useGetUsersOptions } from "Features/User/Hooks/useGetUsers";
type Option = { label: string; value: any };

export function Filter() {
  const { set, state, submit, reset } = usePostsFilter();
  const userOptions = useGetUsersOptions();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    set({ [e.target.name]: e.target.value });
  }

  function handelOnChangeUser(e?: Option) {
    set({ author: e?.value });
  }

  function parseUserValue(options: Option[]) {
    return options.find((o) => o.value === state.author);
  }


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submit();
  }

  function handleReset(e: React.FormEvent) {
    e.preventDefault();
    reset();
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Row>
        <Col lg={4}>
          <TextField
            label="Post title"
            onChange={handleChange}
            placeholder="Search by title..."
            name="title"
            value={state.title}
          />
        </Col>
        <Col lg={4}>
          <SelectBox
            label="Post author"
            options={userOptions}
            onChange={handelOnChangeUser}
            placeholder="Search by author..."
            name="author"
            value={parseUserValue(userOptions)}
          />
        </Col>
        <Col lg={4}>
          <Box justifyContent="flex-end">
            <Button type="submit" variant="outlined">
              Search
            </Button>
            <Button type="reset" variant="text">
              Reset
            </Button>
          </Box>
        </Col>
      </Row>
    </form>
  );
}
