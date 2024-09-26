import {
  Card,
  CardBody,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/team",
      label: "Team",
    },
    {
      href: "/bytecoin",
      label: "Bytecoin",
    },
    {
      href: "/biupc",
      label: "BIUPC",
    },
    {
      href: "/icpc",
      label: "ICPC",
    },
    {
      href: "/bpl",
      label: "BPL",
    },
    {
      href: "/topcoders",
      label: "Top COders",
    },
    {
      href: "/contest",
      label: "Contest",
    },
    {
      href: "/leaderboard",
      label: "Leaderboard",
    },
    {
      href: "/cfstanding",
      label: "CF Standing",
    },

    {
      href: "/about",
      label: "About",
    },

    {
      href: "/features",
      label: "Features",
    },
  ];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <Card className="hidden sm:flex ">
        <CardBody>
          <NavbarContent justify="center" className="gap-4">
            {menuItems.map((item, index) => (
              <NavbarItem key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? "show active" : "")}
                >
                  {item.label}
                </NavLink>
              </NavbarItem>
            ))}
          </NavbarContent>
        </CardBody>
      </Card>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <NavLink
              to={item.href}
              className={({ isActive }) => (isActive ? "show active" : "")}
            >
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
