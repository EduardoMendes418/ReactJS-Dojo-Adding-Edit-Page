import { Section } from "@sensedia-ui/grid";
import { Link, Outlet } from "react-router-dom";
import { WrapperContent } from "Layout/WrapperContent";
import { Content } from "./Content";
import { Filter } from "./Filter";
import { Button } from "@sensedia-ui/react";

export default function PostsListPage() {
  return (
    <WrapperContent>
      <Filter />
      <Section p={24}>
        <Content />
      </Section>
      <Outlet />
      <Button
        style={{ position: "absolute", right: 20, bottom: 20 }}
        icon={"add"}
        as={Link}
        to="/posts/create"
      />
    </WrapperContent>
  );
}
