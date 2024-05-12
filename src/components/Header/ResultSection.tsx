export interface HeaderProps {
  ip: string;
  city: string;
  region: string;
  postalCode: string;
  timezone: string;
  isp: string;
}

function ResultSection({
  ip,
  city,
  region,
  postalCode,
  timezone,
  isp,
}: HeaderProps) {
  return (
    <div
      className="
        [&>div>h2]:text-userDarkGray flex w-[calc(100%-48px)] translate-y-6 flex-col items-center gap-y-4
        rounded-xl bg-white px-8 py-5 text-center shadow-lg *:flex-1 *:px-0 md:translate-y-11
        md:flex-row md:items-start md:py-9 md:text-left md:*:px-8 lg:w-[70%]
        [&>div>h2]:text-[10px] [&>div>h2]:font-semibold [&>div>h2]:tracking-widest md:[&>div>h2]:text-sm [&>div>p]:text-xl
        [&>div>p]:font-medium md:[&>div>p]:mt-2 md:[&>div>p]:text-2xl"
    >
      <div className="md:result-border-right relative h-full !pl-0">
        <h2>IP ADDRESS</h2>
        <p>{ip}</p>
      </div>
      <div className="md:result-border-right relative h-full">
        <h2>LOCATION</h2>
        <p>{`${city}, ${region} ${postalCode}`}</p>
      </div>
      <div className="md:result-border-right relative h-full">
        <h2>TIMEZONE</h2>
        <p>{`UTC ${timezone}`}</p>
      </div>
      <div className="relative">
        <h2>ISP</h2>
        <p>{isp}</p>
      </div>
    </div>
  );
}

export default ResultSection;
