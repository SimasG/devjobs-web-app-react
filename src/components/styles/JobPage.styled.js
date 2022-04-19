import styled from "styled-components";

export const StyledJobPage = styled.main`
  width: 73rem;
  margin: -4rem auto 0 auto;
  .company-overview-container {
    background-color: ${(props) => props.theme.colors.secondary.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 14rem;
    width: 73rem;
    margin: 0 auto 3.2rem auto;
    border-radius: 0 6px 6px 6px;
    .company-logo-container {
      height: 100%;
      width: 14rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 0 6px;
      .company-logo {
        height: 100%;
        width: 60%;
        object-fit: contain;
      }
    }
    .company-title-url-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1rem;
      margin-left: -26.7rem;
      .company-url {
        font-size: 1.6rem;
      }
    }
    .company-site-btn-container {
      height: 4.8rem;
      width: 14.7rem;
      background-color: ${(props) => props.theme.colors.secondary.lightGray};
      font-weight: 700;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 4.3rem;
      :hover {
        background-color: #c5c9f4;
      }
      .company-site-btn {
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.primary.violet};
      }
    }
  }
  .job-description-container {
    background-color: ${(props) => props.theme.colors.secondary.white};
    padding: 4.8rem;
    .job-description-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5rem;
      .job-description-header-subcontainer {
        .posted-at-contract-subcontainer {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 1.4rem;
          margin-bottom: 0.5rem;
          .posted-at {
          }
          .contract {
            list-style-type: circle;
          }
        }
        .job-title {
          margin-bottom: 1rem;
        }
        .location {
          font-weight: 700;
          color: ${(props) => props.theme.colors.primary.violet};
        }
      }
      .apply-now-btn-container {
        height: 4.8rem;
        width: 14.7rem;
        background-color: ${(props) => props.theme.colors.primary.violet};
        font-weight: 700;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        :hover {
          background-color: rgba(89, 100, 224, 0.7);
        }
        .apply-now-btn {
          font-size: 1.6rem;
          color: ${(props) => props.theme.colors.secondary.white};
        }
      }
    }
    .job-description-text {
      margin-bottom: 4rem;
    }
    .requirements-container {
      margin-bottom: 4rem;
      .requirements-heading {
        margin-bottom: 2.5rem;
      }
      .requirements-content {
        margin-bottom: 2.5rem;
      }
    }
    .role-container {
      .role-heading {
        margin-bottom: 2.5rem;
      }
      .role-content {
        margin-bottom: 2.5rem;
      }
    }
  }
`;
