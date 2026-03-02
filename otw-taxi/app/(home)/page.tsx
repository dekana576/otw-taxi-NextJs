"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 
      <div className="my-5 md:my-5">
        <Carousel />
      </div>

      <div className="my-5 md:my-5">
        <SearchBar />
      </div>

      <Card className="mt-5 md:mt-5">
        <CardHeader className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-4xl font-bold">
            Welcome to ACME
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </CardHeader>

        <CardBody>
          <p className="mb-4 text-sm md:text-base text-gray-500">
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>

          <Button
            color="primary"
            variant="flat"
            className="w-full md:w-auto"
          >
            Learn more
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}