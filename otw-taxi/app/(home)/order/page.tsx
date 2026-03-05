"use client";

import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Progress,
  Tab,
  Tabs,
} from "@heroui/react";
import { Clock, CheckCircle, XCircle, CircleCheckBig } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCar,
  faCarOn,
  faCheck,
  faHourglass,
  faHourglassEnd,
  faLocationArrow,
  faLocationDot,
  faRoad,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import UserMap from "../components/MapLeaflet";

export default function Order() {
  const [selected, setSelected] = useState("active");

  const [pickup, setPickup] = useState<L.LatLng | null>(null);
  const [destination, setDestination] = useState<L.LatLng | null>(null);


  const getColor = () => {
    if (selected === "active") return "primary";
    if (selected === "completed") return "success";
    if (selected === "canceled") return "danger";
    return "primary";
  };

  return (
    <div className="w-full my-6 px-4 sm:px-6 lg:px-8">
      <div className="justify-center items-center flex flex-col">
        <div className="">
          <h1 className="font-bold text-3xl my-3 font-[Sora]">ORDER</h1>
        </div>
        <Tabs
          radius="full"
          variant="bordered"
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as string)}
          color={getColor()}
          classNames={{
            tabList:
              "bg-gray-200 p-1 overflow-x-auto scrollbar-hide flex-nowrap",
            tab: "px-3 md:px-9 py-5 md:py-7 text-sm md:text-base",
            
          }}
        >
          <Tab
            key="active"
            title={
              <div className="flex items-center gap-1 md:gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span>Active</span>
              </div>
            }
          >
            <Card className="mt-4 md:w-200">
              <CardHeader className="text-sm md:text-base">
                <div className="w-full">
                  <div className="w-full flex justify-between items-center my-2">
                    <small>Feb, 18, 2026, 2:01 p.m.</small>
                    <Chip color="primary" radius="sm">
                      <div className="flex gap-2">
                        <Clock className="w-5 h-5" />
                        <p>active</p>
                      </div>
                    </Chip>
                  </div>
                  <div className="my-6 flex items-center gap-3">
                    <Avatar
                      showFallback
                      src="carousel/image2.png"
                      size="lg"
                      isBordered
                      color="primary"
                    />
                    <div>
                      <p>
                        <strong>Driver Name</strong>
                      </p>
                      <Button color="success" size="sm" className="text-white">
                        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                        Chat Driver
                      </Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4 w-full">
                      <div className="grid grid-cols-4 w-full text-center">
                        <div className="text-primary">
                          <FontAwesomeIcon icon={faHourglass} size="xl" />
                        </div>
                        <div className="">
                          <FontAwesomeIcon icon={faCar} size="xl" />
                        </div>
                        <div className="">
                          <FontAwesomeIcon icon={faCarOn} size="xl" />
                        </div>
                        <div className="">
                          <FontAwesomeIcon icon={faCheck} size="xl" />
                        </div>
                      </div>
                      <Progress size="sm" value={25} />
                      <div className="grid grid-cols-4 w-full text-center">
                        <p className="text-primary">Waiting</p>
                        <p>On The Way</p>
                        <p>To Destination</p>
                        <p>Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="text-sm md:text-base">
                <Card className="p-5 border-2 border-[lightgray]">
                  <div className="flex flex-col gap-2 my-2 mb-5">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                      <p>
                        <strong>WhatsApp : </strong>0812345
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} size="xl" />
                      <p>
                        <strong>Pickup Location : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationArrow} size="xl" />
                      <p>
                        <strong>Destination Location : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faRoad} size="xl" />
                      <p>
                        <strong>Distance : </strong>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden">
                    <UserMap
                      lat={-8.698044107173683}
                      lng={115.2438123306259}
                      pickup={pickup}
                      destination={destination}
                      setPickup={setPickup}
                      setDestination={setDestination}
                    />
                  </div>
                  <div className="w-full flex justify-between my-2">
                    <p>
                      <strong>Total : </strong>
                    </p>
                    <p className="text-primary">
                      <strong>$2.64</strong>
                    </p>
                  </div>
                </Card>
              </CardBody>
            </Card>
          </Tab>

          <Tab
            key="completed"
            title={
              <div className="flex items-center gap-1 md:gap-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span>Completed</span>
              </div>
            }
          >
            <Card className="mt-4 md:w-200">
              <CardHeader className="text-sm md:text-base">
                <div className="w-full">
                  <div className="w-full flex justify-between items-center my-2">
                    <small>Feb, 18, 2026, 2:01 p.m.</small>
                    <Chip color="success" radius="sm">
                      <div className="flex gap-2">
                        <CircleCheckBig className="w-5 h-5" />
                        <p>completed</p>
                      </div>
                    </Chip>
                  </div>
                  <div className="my-6 flex items-center gap-3">
                    <Avatar
                      showFallback
                      src="carousel/image2.png"
                      size="lg"
                      isBordered
                      color="success"
                    />
                    <div>
                      <p>
                        <strong>Driver Name</strong>
                      </p>
                      <Button color="success" size="sm" className="text-white">
                        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                        Chat Driver
                      </Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4 w-full">
                      <div className="grid grid-cols-4 w-full text-center">
                        <div className="text-success">
                          <FontAwesomeIcon icon={faHourglass} size="xl" />
                        </div>
                        <div className="text-success">
                          <FontAwesomeIcon icon={faCar} size="xl" />
                        </div>
                        <div className="text-success">
                          <FontAwesomeIcon icon={faCarOn} size="xl" />
                        </div>
                        <div className="text-success">
                          <FontAwesomeIcon icon={faCheck} size="xl" />
                        </div>
                      </div>
                      <Progress size="sm" value={100} color="success" />
                      <div className="grid grid-cols-4 w-full text-center text-success">
                        <p>Waiting</p>
                        <p>On The Way</p>
                        <p>To Destination</p>
                        <p>Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="text-sm md:text-base">
                <Card className="p-5 border-2 border-[lightgray]">
                  <div className="flex flex-col gap-2 my-2 mb-5">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                      <p>
                        <strong>WhatsApp : </strong>0812345
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} size="xl" />
                      <p>
                        <strong>Pickup Location : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationArrow} size="xl" />
                      <p>
                        <strong>Destination Location : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faRoad} size="xl" />
                      <p>
                        <strong>Distance : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faHourglassEnd} />
                      <p>
                        <strong>Time : </strong>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden">
                    <UserMap
                      lat={-8.698044107173683}
                      lng={115.2438123306259}
                      pickup={pickup}
                      destination={destination}
                      setPickup={setPickup}
                      setDestination={setDestination}
                    />
                  </div>
                  <div className="w-full flex justify-between my-2">
                    <p>
                      <strong>Total : </strong>
                    </p>
                    <p className="text-primary">
                      <strong>$2.64</strong>
                    </p>
                  </div>
                </Card>
              </CardBody>
            </Card>
          </Tab>

          <Tab
            key="canceled"
            title={
              <div className="flex items-center gap-1 md:gap-2">
                <XCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span>Canceled</span>
              </div>
            }
          >
            <Card className="mt-4 md:w-200">
              <CardHeader className="text-sm md:text-base">
                <div className="w-full">
                  <div className="w-full flex justify-between items-center my-2">
                    <small>Feb, 18, 2026, 2:01 p.m.</small>
                    <Chip color="danger" radius="sm">
                      <div className="flex gap-2">
                        <XCircle className="w-5 h-5" />
                        <p>canceled</p>
                      </div>
                    </Chip>
                  </div>
                  <div className="my-6 flex items-center gap-3">
                    <Avatar
                      showFallback
                      src="carousel/image2.png"
                      size="lg"
                      isBordered
                      color="danger"
                    />
                    <div>
                      <p>
                        <strong>Driver Name</strong>
                      </p>
                      <Button color="success" size="sm" className="text-white">
                        <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                        Chat Driver
                      </Button>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4 w-full">
                      <div className="grid grid-cols-4 w-full text-center">
                        <div className="text-danger">
                          <FontAwesomeIcon icon={faHourglass} size="xl" />
                        </div>
                        <div className="text-danger">
                          <FontAwesomeIcon icon={faCar} size="xl" />
                        </div>
                        <div className="text-danger">
                          <FontAwesomeIcon icon={faCarOn} size="xl" />
                        </div>
                        <div className="text-danger">
                          <FontAwesomeIcon icon={faXmark} size="xl"/>
                        </div>
                      </div>
                      <Progress size="sm" value={100} color="danger" />
                      <div className="grid grid-cols-4 w-full text-center text-danger">
                        <p>Waiting</p>
                        <p>On The Way</p>
                        <p>To Destination</p>
                        <p>Canceled</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="text-sm md:text-base">
                <Card className="p-5 border-2 border-[lightgray]">
                  <div className="flex flex-col gap-2 my-2 mb-5">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                      <p>
                        <strong>WhatsApp : </strong>0812345
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} size="xl" />
                      <p>
                        <strong>Pickup Location : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationArrow} size="xl" />
                      <p>
                        <strong>Destination Location : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faRoad} size="xl" />
                      <p>
                        <strong>Distance : </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faHourglassEnd} />
                      <p>
                        <strong>Time : </strong>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden">
                    <UserMap
                      lat={-8.698044107173683}
                      lng={115.2438123306259}
                      pickup={pickup}
                      destination={destination}
                      setPickup={setPickup}
                      setDestination={setDestination}
                    />
                  </div>
                  <div className="w-full flex justify-between my-2">
                    <p>
                      <strong>Total : </strong>
                    </p>
                    <p className="text-primary">
                      <strong>$2.64</strong>
                    </p>
                  </div>
                </Card>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
