import { Map } from "@/entities/map";
import { MapProvider } from "@/shared/providers/map-provider";
import { PageStateProvider } from "@/shared/providers/page-provider";
import { places } from "./data/base";
import { PlacesList } from "@/entities/place";

export default function Home() {
  const apiUrl = `https://api-maps.yandex.ru/3.0/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`;

  return (
    <PageStateProvider>
      <div className="absolute w-full h-full inset-0 overflow-hidden flex">
        <div className="p-2 w-80 shrink-0 md:block hidden">
          <div className="flex items-center justify-between mb-1">
            <div>Places - {places.length}</div>
          </div>

          <PlacesList places={places} />
        </div>

        <div className="relative h-full w-full">
          <MapProvider apiUrl={apiUrl}>
            <Map places={places} />
          </MapProvider>
        </div>
      </div>
    </PageStateProvider>
  );
}
