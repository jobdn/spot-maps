import { Place } from "@/shared/types/place";

export const places: Place[] = [
  { latitude: 56.330286, longitude: 43.992169, label: "Титре", text: "Сосал?" },
  { latitude: 56.316175, longitude: 44.017614, label: "ПМ", text: "Сосал?" },
].map(({ longitude, latitude, label, text }, i) => ({
  id: `${i}`,
  label,
  longitude,
  latitude,
  text,
}));
