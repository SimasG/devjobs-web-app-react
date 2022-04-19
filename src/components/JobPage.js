import jobs from "../data.json";
import Footer from "./Footer";
import { StyledJobPage } from "./styles/JobPage.styled";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router";

const JobPage = () => {
  let params = useParams();

  // Ideally, functions that work with the source data should be placed in the same file
  const getJobPage = (id) => {
    return jobs.find((job) => job.id === id);
  };

  // Parsing the id that we linked to the page link ("<Link to={`/company/${job.id}`}") in JobPages.js
  // because every URL param is a string.
  const jobPage = getJobPage(parseInt(params.id));

  console.log(params);
  return (
    <>
      <StyledJobPage className="job-page-container">
        <section className="company-overview-container">
          <div
            className="company-logo-container"
            style={{ backgroundColor: jobPage.logoBackground }}
          >
            <img
              className="company-logo"
              src={jobPage.logo}
              alt="company-logo"
            />
          </div>
          <div className="company-title-url-container">
            <h2 className="company-title">{jobPage.company}</h2>
            <a className="company-url" href={jobPage.website}>
              {jobPage.company}.com
            </a>
          </div>
          <div className="company-site-btn-container">
            <a className="company-site-btn" href={jobPage.website}>
              Company Site
            </a>
          </div>
        </section>
        <section className="job-description-container">
          <div className="job-description-header">
            <div className="job-description-header-subcontainer">
              <div className="posted-at-contract-subcontainer">
                <p className="posted-at">{jobPage.postedAt}</p>
                <li className="contract">{jobPage.contract}</li>
              </div>
              <h1 className="job-title">{jobPage.position}</h1>
              <p className="location">{jobPage.location}</p>
            </div>
            <div className="apply-now-btn-container">
              <a className="apply-now-btn" href={jobPage.apply}>
                Apply Now
              </a>
            </div>
          </div>
          <p className="job-description-text">{jobPage.description}</p>
          <div className="requirements-container">
            <h3 className="requirements-heading">Requirements</h3>
            <p className="requirements-content">
              {jobPage.requirements.content}
            </p>
            <ul className="requirements-list">
              {jobPage.requirements.items.map((item) => {
                const id = uuidv4();
                return <li key={id}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="role-container">
            <h3 className="role-heading">What You Will Do</h3>
            <p className="role-content">{jobPage.role.content}</p>
            <ol className="role-list">
              {jobPage.role.items.map((item) => {
                const id = uuidv4();
                return <li key={id}>{item}</li>;
              })}
            </ol>
          </div>
        </section>
      </StyledJobPage>
      <Footer jobPage={jobPage} />
    </>
  );
};

export default JobPage;
