import styled from "styled-components";

export const StyledJobPreview = styled.section`
  width: 35rem;
  height: 26.3rem;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.secondary.white};
  padding: 0 3.2rem 3.6rem 3.2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  .company-logo-container {
    height: 5rem;
    width: 5rem;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2.5rem;
    margin-bottom: 2rem;
  }
  .posted-at-contract-subcontainer {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.4rem;
    margin-bottom: 1.5rem;
    .posted-at {
    }
    .contract {
      list-style-type: circle;
    }
  }
  div {
    flex-grow: 1;
    .position {
      margin-bottom: 0.5rem;
    }
    .company-title {
      margin-bottom: 3.5rem;
    }
  }
  .location {
    color: ${(props) => props.theme.colors.primary.violet};
    font-weight: 700;
  }
`;
