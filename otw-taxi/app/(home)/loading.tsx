"use client";

import { Card, CardBody, Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="py-4 max-w-2xs h-full flex flex-col">
            <CardBody className="flex flex-col gap-4">
              {/* Image Skeleton */}
              <div className="flex justify-center">
                <Skeleton className="rounded-3xl w-30 h-30" />
              </div>

              {/* Title */}
              <Skeleton className="h-4 w-3/4 rounded-lg mx-auto" />

              {/* Subtitle */}
              <Skeleton className="h-3 w-1/2 rounded-lg mx-auto" />

              {/* Meta Info */}
              <Skeleton className="h-3 w-full rounded-lg" />
              <Skeleton className="h-3 w-2/3 rounded-lg" />

              {/* Bottom Section */}
              <div className="mt-auto flex flex-col gap-3">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
