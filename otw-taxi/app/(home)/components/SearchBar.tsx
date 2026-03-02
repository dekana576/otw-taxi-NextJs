"use client";

import { Input } from "@heroui/react";
import { Search, SlidersHorizontal } from "lucide-react";

export const SearchControl = () => {
  return (
    <div className="">
      <SlidersHorizontal className="text-[gray]" />
    </div>
  );
};

export default function SearchBar() {
  return (
    <div className="flex justify-center drop-shadow-lg">
      <Input
        radius="full"
        startContent={<Search className="text-[gray]" size="30px" />}
        endContent={<SearchControl />}
        placeholder=" Search..."
        size="lg"
      />
    </div>
  );
}
