import styled from "styled-components";

export const StyledSearchbar = styled.section`
  width: 111rem;
  margin: -7rem auto 0 auto;
  .search-subcontainer {
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
      .checkbox-title {
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
      :hover {
        background-color: rgba(89, 100, 224, 0.7);
      }
      span {
        font-weight: bold;
      }
    }
  }
`;
