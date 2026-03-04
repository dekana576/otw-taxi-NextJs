"use client";

import { useState } from "react";
import L from "leaflet";
import UserMap from "@/app/(home)/components/MapLeaflet";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { ArrowRight, MapPin, Navigation, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function OrderLocation() {
  const [pickup, setPickup] = useState<L.LatLng | null>(null);
  const [destination, setDestination] = useState<L.LatLng | null>(null);

  return (
    <Card className="my-2 md:my-5">
      <CardHeader className="h-150">
        <UserMap
          lat={-8.698044107173683}
          lng={115.2438123306259}
          pickup={pickup}
          destination={destination}
          setPickup={setPickup}
          setDestination={setDestination}
        />
      </CardHeader>

      <CardBody className="h-150">
        <div className="mx-5">
          <div className="my-2">
            <div className="flex gap-2 mb-3 items-center">
              <FontAwesomeIcon icon={faLocationDot} size="xl"/>
              <p><strong>Pickup Location</strong></p>
            </div>
            <Input
              variant="bordered"
              value={
                pickup
                  ? `${pickup.lat.toFixed(5)}, ${pickup.lng.toFixed(5)}`
                  : ""
              }
              placeholder="Click map to select pickup"
              readOnly
            />
          </div>

          <div className="my-2">
            <div className="flex gap-2 mb-3 items-center">
              <FontAwesomeIcon icon={faLocationArrow} size="xl"/>
              <p><strong>Destination Location</strong></p>
            </div>
            <Input
              variant="bordered"
              value={
                destination
                  ? `${destination.lat.toFixed(5)}, ${destination.lng.toFixed(5)}`
                  : ""
              }
              placeholder="Click map to select destination"
              readOnly
            />
          </div>

          <div className="my-2">
            <div className="flex gap-2 mb-3 items-center">
              <FontAwesomeIcon icon={faWhatsapp} size="xl"/>
              <p><strong>WhatsApp Number</strong></p>
            </div>
            <Input variant="bordered" placeholder="Enter WhatsApp ..." />
          </div>
        </div>
        <div className="mt-auto mx-5">
          <Card className="bg-linear-to-r from-[#0066CC] to-[#003D80] py-2">
            <CardBody>
              <div className="text-center text-white">
                <p>Distance: - </p>
                <p>
                  <strong>Estimated Price: -</strong>
                </p>
              </div>
            </CardBody>
          </Card>
          <Button className="w-full my-2 bg-[#212529] text-white grid grid-cols-3" radius="full">
            <div className=""></div>
            <p>Book Taksol</p>
            <div className="ms-auto">
              <ArrowRight />
            </div>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
