// import { ReactQr } from "@/features/read-qr";

import { Map } from "@/entities/map";
import Script from "next/script";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <ReactQr /> */}
      <Script
        src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAP_KEY}&lang=ru_RU`}
        strategy="beforeInteractive"
      />
      <div style={{ width: "100svw", height: "100svh" }}>
        <Map />
      </div>
    </div>
  );
}
