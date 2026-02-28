"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import Link from "next/link";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";



export default function Home() {
  return (
    <Card className="max-w-4xl mx-auto mt-5">
      <CardHeader>
        <h1 className="text-3xl font-bold">Welcome to ACME</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </CardHeader>
      <CardBody>
        <p className="mb-4">
          It uses utility classes for typography and spacing to space content out
          within the larger container.
        </p>
        <Button color="primary" variant="flat">
          Learn more
        </Button>
      </CardBody>
    </Card>
  );
}
