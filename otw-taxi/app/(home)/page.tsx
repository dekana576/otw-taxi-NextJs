"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@heroui/react";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import { Car, SlidersHorizontal } from "lucide-react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { useRouter } from "next/navigation";


const base_url =
  "https://22f766af-a68f-4e84-bab4-b02cde04069a.mock.pstmn.io/admin/cars/";

interface Car {
  car_id: string;
  car_name: string;
  plate_code: string;
  seat: number;
  types: {
    type_name: string;
  };
  brands: {
    brand_name: string;
  };
}

export default function Home() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: cars,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const response = await axios.get<{ data: Car[] }>(base_url);
      console.log(response.data.data);
      return response.data.data;
    },
  });
  const [seatFilter, setSeatFilter] = useState<number | "all">("all");
  const filteredCars =
    seatFilter === "all"
      ? cars
      : cars?.filter((car) => car.seat === seatFilter);

  if (isLoading) return <p>Loading...</p>;
  if (isError) throw error;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="my-5 md:my-5">
        <Carousel />
      </div>

      <div className="my-5 md:my-5">
        <SearchBar />
      </div>

      <Card className="my-5 md:my-10">
        <CardHeader className="grid grid-cols-2">
          <div className="flex gap-3 m-3">
            <Button className="bg-[black] text-white w-full" isDisabled>
              Motorcycle
            </Button>
            <Dropdown backdrop="opaque">
              <DropdownTrigger>
                <Button className="bg-black text-white w-full">
                  {seatFilter === "all" ? "All Car" : `Seat ${seatFilter}`}
                  <SlidersHorizontal size={20} />
                </Button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="Seat Filter"
                onAction={(key) => {
                  if (key === "all") {
                    setSeatFilter("all");
                  } else {
                    setSeatFilter(Number(key));
                  }
                }}
              >
                <DropdownItem key="all" className="bg-[#5F5F5F] text-white my-1"><strong>All</strong></DropdownItem>
                <DropdownItem key="5" className="bg-[#5F5F5F] text-white my-1">Seat 5</DropdownItem>
                <DropdownItem key="7" className="bg-[#5F5F5F] text-white my-1">Seat 7</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardHeader>

        <CardBody>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-2">
            {filteredCars?.map((car) => (
              <Card className="py-4 max-w-2xs" key={car.car_id}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <div className="bg-[#5F5F5F] p-8 rounded-3xl">
                    <Car size={100} className="text-white" />
                  </div>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <p className="text-tiny uppercase font-bold text-center">
                    <strong>{car.car_name}</strong>
                  </p>
                  <small className="text-default-500 text-center">
                    {car.plate_code}
                  </small>
                  <div className="grid grid-cols-3 text-center">
                    <small className="text-default-500">
                      {car.types.type_name}{" "}
                    </small>
                    <small>|</small>
                    <small className="text-default-500">
                      {car.brands.brand_name}
                    </small>
                  </div>
                  <small className="text-default-500">seat: {car.seat}</small>
                  <Chip
                    className="bg-[#1CFB6E]/27 text-[#0EA244] my-1"
                    variant="dot"
                    color="success"
                  >
                    Ready
                  </Chip>
                  <Button className="bg-[black]" onPress={() => router.push(`/${car.car_id}/detail`)}>
                    <strong className="text-white">Booking</strong>
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-2"></div>
        </CardBody>
      </Card>
    </div>
  );
}
