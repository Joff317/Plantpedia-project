import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import logo from "../../assets/fern-821293_640.jpg";
import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Search plant",
      navlink: "/searchPlant",
    },
    {
      name: "Search by categories",
      navlink: "/plantCategories",
    },
    {
      name: "Search by countries",
      navlink: "/country",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-green-500"
      maxWidth="full"
    >
      <NavbarContent className="max-w-[600px]">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavLink to="/">
          <NavbarBrand>
            <img src={logo} className="w-12 h-12 rounded-xl mr-2" />
            <p className="text-black">PlantPedia</p>
          </NavbarBrand>
        </NavLink>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" id="nav-ul">
        <NavbarItem>
          <NavLink
            to="/searchPlant"
            id="home-item"
            className={`navitem ${
              location.pathname === "/searchPlant" ? "active" : ""
            }`}
          >
            Search Plant
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/searchCategories"
            aria-current="page"
            className={`navitem ${
              location.pathname === "/searchCategories" ? "active" : ""
            }`}
          >
            Search by categories
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/searchCountries"
            className={`navitem ${
              location.pathname === "/searchCountries" ? "active" : ""
            }`}
          >
            Search by countries
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className="w-full"
              href={item.navlink}
              size="lg"
            >
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
