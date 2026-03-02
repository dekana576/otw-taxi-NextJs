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
    <Navbar className="max-w-4xl mx-auto drop-shadow-md py-4">
      <NavbarBrand>
        <Link href="#">
          <Button isIconOnly className="p-2" size="lg">
            <House size={40} />
          </Button>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <Button isIconOnly className="p-2" size="lg">
              <List size={40} />
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
