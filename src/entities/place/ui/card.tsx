import { Place } from "@/shared/types/place";
import { memo } from "react";

const Card = ({
  place,
  selectPlace,
}: {
  place: Place;
  selectPlace: (id: string | null) => void;
}) => (
  <div
    onMouseEnter={() => selectPlace(place.id)}
    onMouseLeave={() => selectPlace(null)}
    className="p-4 rounded-lg bg-slate-700 hover:bg-slate-600"
  >
    {place.label}
  </div>
);

export default memo(Card);
