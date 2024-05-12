import { useQuery } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import Header, { headerHeight } from "./components/Header/Header";
import { getData } from "./services/geolocation_api_service";
import LocationInfo from "./types/types";

const MapLazy = lazy(() => import("./components/Map"));

function App() {
  const { isLoading, data } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  if (isLoading)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
        Loading...
      </div>
    );

  const { ip, location, isp } = data as LocationInfo;
  const { city, region, postalCode, timezone, lat, lng } = location;

  return (
    <>
      <Header
        city={city}
        region={region}
        postalCode={postalCode}
        ip={ip}
        isp={isp}
        timezone={timezone}
      />
      {/* header is position: absolute, so this is just to block Map being full height */}
      <div className={headerHeight} />
      <Suspense
        fallback={
          <div className="fixed left-1/2 top-[60%] -translate-x-1/2 -translate-y-[60%] text-2xl">
            Loading map...
          </div>
        }
      >
        <MapLazy lat={lat} lng={lng} />
      </Suspense>
    </>
  );
}

export default App;
