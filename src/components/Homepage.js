import { StyledHomepage } from "./styles/Homepage.styled";
import Searchbar from "./Searchbar";
import { Outlet, useSearchParams } from "react-router-dom";
import JobPages from "./JobPages";
import { useState } from "react";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [fulltime, setFulltime] = useState(false);

  return (
    <>
      <Searchbar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        fulltime={fulltime}
        setFulltime={setFulltime}
      />
      <StyledHomepage className="homepage-container">
        <JobPages searchParams={searchParams} fulltime={fulltime} />
      </StyledHomepage>
      <Outlet />
    </>
  );
};

export default Homepage;
