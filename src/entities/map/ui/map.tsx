"use client";

import {
  YMap,
  YMapLocationRequest,
} from "@yandex/ymaps3-types/imperative/YMap";
import { useDebouncedCallback } from "use-debounce";
import React, { useMemo, useRef, useState } from "react";
import MarkerWithPopup from "./marker-with-popup";
import { Place } from "@/shared/types/place";
import { usePageState } from "@/shared/providers/page-provider";
import { getBboxByCoordinates } from "../helpers/get-bbox-by-coordinates";
import { useMap } from "@/shared/providers/map-provider";
import { LOCATION } from "../model/constants";

interface MapProps {
  places: Place[];
}

export const Map = ({ places }: MapProps) => {
  const mapRef = useRef<(YMap & { container: HTMLElement }) | null>(null);
  const { selectedPlaceId, setBounds, selectPlace } = usePageState();
  const startBounds = useMemo(
    () =>
      getBboxByCoordinates(
        places.map((place) => [place.longitude, place.latitude])
      ),
    [places]
  );
  const [location] = useState<YMapLocationRequest>(
    startBounds ? { bounds: startBounds } : { zoom: 0 }
  );
  const setBoundsDebounced = useDebouncedCallback(
    (value) => setBounds(value),
    500
  );
  const { reactifyApi } = useMap();

  if (!reactifyApi)
    return (
      <div className="flex w-full h-full items-center justify-center">
        Загрузка лучшей карты в мире...
      </div>
    );

  const {
    YMap,
    YMapListener,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
  } = reactifyApi;

  console.log(location);

  return (
    <YMap margin={[20, 20, 20, 20]} location={LOCATION} ref={mapRef}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />

      <YMapListener
        onUpdate={({ location }) => {
          setBoundsDebounced(location.bounds);
        }}
      />

      {places.map((place) => (
        <MarkerWithPopup
          key={place.id}
          place={place}
          mapRef={mapRef}
          reactifyApi={reactifyApi}
          selected={selectedPlaceId === place.id}
          selectPlace={selectPlace}
        />
      ))}
    </YMap>
  );
};
