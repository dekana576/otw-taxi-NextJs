"use client";

import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@heroui/react";
import { Circle, Dot } from "lucide-react";

export default function ItemCard() {
  return (
    <Card className="py-4 max-w-2xs">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="card/car.png"
          width={180}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-tiny uppercase font-bold">Toyota Calya</p>
        <small className="text-default-500">seat: 5</small>
        <Chip className="bg-[#1CFB6E]/27 text-[#0EA244] my-1" variant="dot" color="success">Ready</Chip>
        <Button className="bg-[black]"><strong className="text-white">Booking</strong></Button>
      </CardBody>
    </Card>
  );
}
