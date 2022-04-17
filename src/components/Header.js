import { StyledHeader } from "../components/styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <section className="header-subcontainer">
        <h1 className="logo">devjobs</h1>
        <section className="search-container">
          <div className="search-bar">
            <img src="./assets/desktop/icon-search.svg" alt="" />
            <input
              className="search-input"
              type="text"
              name="search-input"
              placeholder="Filter by title, companies, expertise…"
            />
          </div>
          <div className="location-filter">
            <img src="./assets/desktop/icon-location.svg" alt="" />
            <input
              type="text"
              name="filter-bar"
              placeholder="Filter by location…"
            />
          </div>
          <div className="fulltime-filter">
            <input type="checkbox" />
            <p className="checkbx-title">Full Time Only</p>
          </div>
          <button className="btn btn-violet">
            <span>Search</span>
          </button>
        </section>
      </section>
    </StyledHeader>
  );
};

export default Header;
