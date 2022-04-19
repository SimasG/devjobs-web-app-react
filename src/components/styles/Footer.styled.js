import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary.white};
  height: 10rem;
  margin-top: 8rem;
  .footer-container {
    width: 73rem;
    margin: 0 auto;
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;
