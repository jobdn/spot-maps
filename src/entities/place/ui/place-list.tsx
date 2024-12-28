"use client";

import { memo } from "react";
import Card from "./card";
import { Place } from "@/shared/types/place";
import { usePageState } from "@/shared/providers/page-provider";

export const PlacesList = ({ places }: { places: Place[] }) => {
  const { selectPlace } = usePageState();

  return (
    <div className="space-y-2 h-full overflow-y-auto">
      {places.map((place) => (
        <Card key={place.id} place={place} selectPlace={selectPlace} />
      ))}
    </div>
  );
};

export default memo(PlacesList);
