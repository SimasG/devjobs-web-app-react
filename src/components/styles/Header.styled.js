import styled from "styled-components";

export const StyledHeader = styled.header`
  background-image: url("./assets/desktop/bg-pattern-header.svg");
  background-repeat: no-repeat;
  height: 16.2rem;
  .header-subcontainer {
    width: 111rem;
    padding: 4rem 0 5rem 0;
    margin: 0 auto;
    .logo {
      color: ${(props) => props.theme.colors.secondary.white};
    }
    .search-container {
      margin-top: 3rem;
      background-color: ${(props) => props.theme.colors.secondary.white};
      border-radius: 6px;
      height: 8rem;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-bar {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1.5rem;
        flex-grow: 4;
        .search-input {
          width: 25rem;
          ::placeholder {
            color: #8c8f96;
          }
        }
      }
      .location-filter {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1.5rem;
        flex-grow: 1;
      }
      .fulltime-filter {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1.5rem;
        flex-grow: 1;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        font-weight: 700;
        .checkbx-title {
          font-weight: 700;
          color: ${(props) => props.theme.colors.primary.veryDarkBlue};
        }
      }
      .btn {
        padding: 1.1rem;
        border-radius: 5px;
        color: ${(props) => props.theme.colors.secondary.white};
        font-weight: 700;
        width: 12.3rem;
      }
      .btn-violet {
        flex-grow: 1;
        background-color: ${(props) => props.theme.colors.primary.violet};
        span {
          font-weight: bold;
        }
      }
    }
  }
`;
