import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Card,
  CardBody,
} from "@nextui-org/react";

import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Team",
    "Bytecoin",
    "ICPC",
    "IUPC",
    "BPL",
    "Top COders",
    "Contest",
    "Leaderboard",
    "CF Standing",
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <Card justify="center">
        <CardBody>
          <NavbarContent className="hidden sm:flex gap-4">
            {menuItems.map((item, index) => (
              <NavbarItem key={`${item}-${index}`}>
                <Link>{item}</Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </CardBody>
      </Card>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link>{item}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
