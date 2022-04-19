import { StyledSearchbar } from "../components/styles/Searchbar.styled";

const Searchbar = ({
  searchParams,
  setSearchParams,
  fulltime,
  setFulltime,
}) => {
  return (
    <StyledSearchbar className="search-container">
      <section className="search-subcontainer">
        <div className="search-bar">
          <img src="./assets/desktop/icon-search.svg" alt="" />
          <input
            className="search-input"
            type="text"
            name="search-input"
            placeholder="Filter by title, companies, expertise…"
            // Looking for a value in the "searchParams" object with a key of "filter". If it doesn't exist
            // the value is an empty string
            value={searchParams.get("search") || ""}
            onChange={(e) => {
              const search = e.target.value;
              if (search) {
                // Translates to "{search: e.target.value}"
                setSearchParams({ search });
              } else {
                setSearchParams({});
              }
            }}
          />
        </div>
        <div className="location-filter">
          <img src="./assets/desktop/icon-location.svg" alt="" />
          <input
            type="text"
            name="filter-bar"
            placeholder="Filter by location…"
            value={searchParams.get("location") || ""}
            onChange={(e) => {
              const location = e.target.value;
              if (location) {
                setSearchParams({ location });
              } else {
                setSearchParams({});
              }
            }}
          />
        </div>
        <div className="fulltime-filter">
          <input type="checkbox" onClick={() => setFulltime(!fulltime)} />
          <p className="checkbox-title">Full Time Only</p>
        </div>
        <button className="btn btn-violet">
          <span>Search</span>
        </button>
      </section>
    </StyledSearchbar>
  );
};

export default Searchbar;
