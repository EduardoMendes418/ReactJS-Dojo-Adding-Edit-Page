import { Apps } from "./AppsModal";
import { Help } from "./HelpModal";
import { UserInformation } from "./UserModal";
import { NavSecond, Separator, NavBar, NavFirst } from "@sensedia-ui/layout";
import { Tooltip } from "@sensedia-ui/portal";
import { Button } from "@sensedia-ui/primitives";
import { SidebarIcon } from "@sensedia-ui/icons";

type SidebarProps = {
  open: boolean;
  setOpen: (Show: boolean) => void;
};

const Nav = ({ open, setOpen }: SidebarProps) => {
  return (
    <NavBar>
      <NavFirst>
        <Button
          variant="text"
          icon={<SidebarIcon color="textLowMedium" size={24} />}
          onClick={() => setOpen(!open)}
        />
      </NavFirst>

      <NavSecond>
        <Tooltip content={"Help"} animation="shift-toward" placement="bottom">
          <div>
            <Help />
          </div>
        </Tooltip>

        <Tooltip content={"Apps"} animation="shift-toward" placement="bottom">
          <div>
            <Apps />
          </div>
        </Tooltip>

        <Separator />

        <UserInformation />
      </NavSecond>
    </NavBar>
  );
};

export { Nav };
