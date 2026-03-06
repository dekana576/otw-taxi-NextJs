"use client";

import { Button, Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Car } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CarDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.car_id;
  return (
    <div className="my-2 md:my-3 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center">
        <Image src="../carousel/image1.png" alt="" className="" />
      </div>
      <Card className="my-2 md:my-5">
        <CardHeader>
          <div className="bg-[#5F5F5F] rounded-3xl w-full h-50 md:h-75 flex items-center justify-center">
            <Car size={200} className="text-white" />
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3">
              <Card>
                <CardBody className="h-75">
                  <div className="text-center">
                    <h1>
                      <strong>Car</strong>
                    </h1>
                    <small className="mt-4">Car ID: {id}</small>
                  </div>
                  <div className="mt-auto grid md:grid-cols-3 gap-2">
                    <Link href="/">
                      <Button className="bg-white w-full border-2">
                        <strong>Close</strong>
                      </Button>
                    </Link>

                    <Button
                      className="bg-black w-full md:col-span-2"
                      onPress={() =>
                        router.push(`/${params.car_id}/order-location`)
                      }
                    >
                      <strong className="text-white">Booking</strong>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="col-span-2">
              <Card>
                <CardBody className="h-75">
                  <div className="text-center">
                    <h1>
                      <strong>Driver</strong>
                    </h1>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
