import { Place } from "@/shared/types/place";

export const places: Place[] = [
  { latitude: 43.992169, longitude: 56.330286, label: "Титре", text: "Сосал?" },
  { latitude: 44.017614, longitude: 56.316175, label: "ПМ", text: "Сосал?" },
].map(({ longitude, latitude, label, text }, i) => ({
  id: `${i}`,
  label,
  longitude,
  latitude,
  text,
}));
