import { StyledFooter } from "./styles/Footer.styled";

const Footer = ({ jobPage }) => {
  return (
    <StyledFooter>
      <section className="footer-container">
        <div className="role-company-subcontainer">
          <h3>{jobPage.position}</h3>
          <p>{jobPage.company}</p>
        </div>
        <div className="apply-now-btn-container">
          <a className="apply-now-btn" href={jobPage.apply}>
            Apply Now
          </a>
        </div>
      </section>
    </StyledFooter>
  );
};

export default Footer;
