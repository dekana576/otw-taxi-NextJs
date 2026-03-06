"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { House, List } from "lucide-react";

export default function HomeNavbar() {
  return (
    <Navbar
      className="w-full shadow-2xl rounded-2xl"
      maxWidth="xl"
      isBlurred= {false}
      
    >
      <NavbarBrand>
        <Link href="/">
          <Button
            isIconOnly
            size="lg"
            className="p-2"
          >
            <House className="w-6 h-6 md:w-7 md:h-7" />
          </Button>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/order">
            <Button
              isIconOnly
              size="lg"
              className="p-2"
            >
              <List className="w-6 h-6 md:w-7 md:h-7" />
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}