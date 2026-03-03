"use client";

import { useParams } from "next/navigation";

export default function CarDetail() {
  const params = useParams();
  const id = params.car_id;
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Car Detail</h1>
      <p className="mt-4">Car ID: {id}</p>
    </div>
  );
}
