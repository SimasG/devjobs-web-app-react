import { Link } from "react-router-dom";
import { StyledHeader } from "../components/styles/Header.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <h1 className="logo" href="/">
            devjobs
          </h1>
        </Link>
      </StyledHeader>
    </>
  );
};

export default Header;
