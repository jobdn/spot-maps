"use client";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactifiedModule } from "@yandex/ymaps3-types/reactify/reactify";
import { LOCATION } from "../model/constants";

// const ymaps3Reactify = await ymaps3.import("@yandex/ymaps3-reactify");
// const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
// const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
//   reactify.module(ymaps3);

type ReactifiedApi = ReactifiedModule<typeof ymaps3>;

export const Map = () => {
  const [reactifiedApi, setReactifiedApi] = React.useState<ReactifiedApi>();

  React.useEffect(() => {
    Promise.all([ymaps3.import("@yandex/ymaps3-reactify"), ymaps3.ready]).then(
      ([{ reactify }]) =>
        setReactifiedApi(reactify.bindTo(React, ReactDOM).module(ymaps3))
    );
  }, []);

  if (!reactifiedApi) {
    return null;
  }

  const { YMapMarker, YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    reactifiedApi;

  return (
    // <YMap location={LOCATION}>
    //   <YMapDefaultSchemeLayer />
    //   <YMapDefaultFeaturesLayer />
    // </YMap>
    <YMap location={LOCATION} mode="vector">
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />

      <YMapMarker coordinates={[25.229762, 55.289311]} draggable={true}>
        <section>
          <h1>You can drag this header</h1>
        </section>
      </YMapMarker>
    </YMap>
  );
};
