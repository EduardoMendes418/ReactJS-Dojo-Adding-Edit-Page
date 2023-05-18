import React, { useMemo } from "react";
import { UserModal } from "@sensedia-ui/layout";
// import userImg from '@/Assets/img/default-image.jpg'

type UserInformationProps = {
  userName: string;
  userPhoto: string;
  userLevel: string;
  userEmail: string;
};

const USER = localStorage.getItem("user-data");

function redirectTo(path: string) {
  window.location.href = window.location.origin + path;
}

const UserInformation = () => {
  // const user = useMemo<UserInformationProps>(
  //   () => ({
  //     userName: USER?.name,
  //     userPhoto: USER?.image ?? userImg,
  //     userLevel: USER?.rolesFormatted,
  //     userEmail: USER?.email,
  //   }),
  //   [USER]
  // )

  return (
    <UserModal
      userProps={{}}
      editAccountLabel="Edit Account"
      logoutLabel="Logout"
      editAccount={() => redirectTo("/api-manager/#/users/list")}
      logout={() => {}}
    />
  );
};

export { UserInformation };
