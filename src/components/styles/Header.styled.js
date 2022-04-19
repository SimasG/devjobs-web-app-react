import styled from "styled-components";

export const StyledHeader = styled.header`
  background-image: url("/assets/desktop/bg-pattern-header.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 16.2rem;
  width: 100vw;
  .logo {
    width: 111rem;
    margin: 0 auto;
    padding-top: 5rem;
    color: ${(props) => props.theme.colors.secondary.white};
    cursor: pointer;
  }
`;
