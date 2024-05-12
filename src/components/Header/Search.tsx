import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import arrowImg from "../../assets/images/icon-arrow.svg";
import {
  isValidDomain,
  isValidIpAddress,
  validateIp,
} from "../../helpers/ipValidation";
import {
  getDataByDomain,
  getDataByIp,
} from "../../services/geolocation_api_service";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const ipQuery = useQuery({
    queryKey: ["data", inputValue],
    queryFn: () => getDataByIp,
    enabled: false,
  });

  const domainQuery = useQuery({
    queryKey: ["data", inputValue],
    queryFn: () => getDataByDomain,
    enabled: false,
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (isError) setIsError(false);
    setInputValue(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!validateIp(inputValue)) {
      setIsError(true);
    }

    if (isValidIpAddress(inputValue)) ipQuery.refetch();
    if (isValidDomain(inputValue)) domainQuery.refetch();
    return "not valid anything";
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative flex">
        <input
          type="text"
          name="search"
          id="search"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for any IP address or domain"
          className={`
          flex-1 overflow-hidden rounded-l-xl px-6 py-4 -outline-offset-4 md:text-xl
          ${isError && "border-2 border-red-500 text-red-500"}
          `}
        />
        <button
          type="submit"
          disabled={isError}
          className={`
          flex items-center justify-center rounded-r-xl bg-black p-5
          ${isError && "brightness-50"}
          `}
        >
          <img src={arrowImg} alt="search by ip" />
        </button>
      </form>
      {/* error text component */}
      <div
        className={`
        mt-1 hidden w-full rounded-xl border-2 border-red-500 bg-white p-2 text-center text-red-500
        ${isError && "!block"}
        `}
      >
        <p>Invalid ip address or domain, check spelling.</p>
      </div>
    </div>
  );
}

export default Search;
