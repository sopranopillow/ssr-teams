import styles from "./Header.module.css";
import {
  Button,
  Input,
  Avatar,
  Menu,
  MenuPopover,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@fluentui/react-components";
import {
  Search24Regular,
  GridDots24Regular,
  MoreHorizontal24Regular,
  Bookmark20Regular,
  ContactCard20Regular,
  WindowNew20Regular,
} from "@fluentui/react-icons";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.headerLeft} ${styles.headerItem}`}>
        <Button appearance="transparent" icon={<GridDots24Regular />} />
      </div>
      <div className={`${styles.headerCenter} ${styles.headerItem}`}>
        <Input
          className={styles.searchBar}
          contentBefore={<Search24Regular />}
          appearance="filled-lighter"
          placeholder="Search"
        />
      </div>
      <div className={`${styles.headerRight} ${styles.headerItem}`}>
        <Button appearance="transparent" icon={<MoreHorizontal24Regular />} />
        <Menu>
          <MenuTrigger>
            <Button appearance="transparent">
              <Avatar
                color="colorful"
                name="Kevin Stugis"
                badge={{ status: "available" }}
              />
            </Button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem content={{ className: styles.menuItem }}>
                <div className={styles.persona}>
                  <Avatar
                    color="colorful"
                    name="Kevin Stugis"
                    badge={{ status: "available" }}
                  />
                  <span>Kevin Sturgis</span>
                </div>
              </MenuItem>
              <MenuDivider />
              <MenuItem content={{ className: styles.menuItem }}>
                <Bookmark20Regular />
                Saved
              </MenuItem>
              <MenuDivider />
              <MenuItem content={{ className: styles.menuItem }}>
                <ContactCard20Regular /> Manage account
              </MenuItem>
              <MenuItem content={{ className: styles.menuItem }}>
                <WindowNew20Regular />
                Teams for personal use
              </MenuItem>
              <MenuDivider />
              <MenuItem content={{ className: styles.menuItem }}>
                Sign out
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </div>
  );
};
