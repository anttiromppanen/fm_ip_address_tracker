import Search from "./Search";
import ResultSection, { HeaderProps } from "./ResultSection";

// This is used in App.js also
export const headerHeight = "h-[300px] md:h-[280px]";

function Header({ ip, city, region, postalCode, timezone, isp }: HeaderProps) {
  return (
    <div
      className={`
      bg-userHeaderBgMobile md:bg-userHeaderBgDesktop absolute left-0 top-0 z-10 flex
      w-full flex-col items-center bg-cover bg-no-repeat
      ${headerHeight}`}
    >
      <h1 className="mt-8 text-2xl text-white md:mt-9 md:text-3xl">
        IP Address Tracker
      </h1>
      <div className="mt-8 w-full px-6 md:mt-6 md:w-2/5 md:px-0">
        <Search />
      </div>
      {/* RESULT SECTION */}
      <ResultSection
        ip={ip}
        city={city}
        region={region}
        postalCode={postalCode}
        timezone={timezone}
        isp={isp}
      />
    </div>
  );
}

export default Header;
