"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="my-5 md:my-5">
        <Carousel />
      </div>

      <div className="my-5 md:my-5">
        <SearchBar />
      </div>

      <Card className="my-5 md:my-10">
        <CardHeader className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-4xl font-bold">Welcome to ACME</h1>
        </CardHeader>

        <CardBody>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-3">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-3">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>
        </CardBody>
      </Card>
    </div>
  );
}
