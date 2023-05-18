import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownLink,
  LinkItem,
  ListLinks,
  Sidebar as SidebarComponent,
} from "@sensedia-ui/layout";
import logo from "./logo.svg";

type SidebarProps = {
  open: boolean;
};

const Sidebar = ({ open }: SidebarProps) => {
  const [t] = useTranslation();

  return (
    <SidebarComponent open={open} logo={logo}>
      <ListLinks>
        <LinkItem text={"Posts"} to={"/posts"} />
      </ListLinks>
    </SidebarComponent>
  );
};

export { Sidebar };
