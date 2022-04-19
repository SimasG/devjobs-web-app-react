import { StyledJobPreview } from "./styles/Job.styled";
import jobs from "../data.json";
import { Link } from "react-router-dom";

const JobPages = ({ searchParams, fulltime }) => {
  return (
    <>
      {jobs
        .filter((job) => {
          const search = searchParams.get("search");
          if (!search) return true;
          const company = job.company.toLowerCase();
          const position = job.position.toLowerCase();
          //   Returns "true" for companies that fit the search criteria (i.e. here start exactly the same way)
          const result =
            company.startsWith(search.toLowerCase()) ||
            position.startsWith(search.toLowerCase());
          return result;
        })
        .filter((job) => {
          const location = searchParams.get("location");
          if (!location) return true;
          const jobLocation = job.location.toLowerCase();
          return jobLocation.startsWith(location.toLowerCase());
        })
        .filter((job) => {
          if (!fulltime) return true;
          return job.contract === "Full Time";
        })
        .map((job) => (
          <Link to={`/company/${job.id}`} key={job.id}>
            <StyledJobPreview>
              <div
                style={{ backgroundColor: job.logoBackground }}
                className="company-logo-container"
              >
                <img className="company-logo" src={job.logo} alt="" />
              </div>
              <div className="posted-at-contract-subcontainer">
                <p className="posted-at">{job.postedAt}</p>
                <li className="contract">{job.contract}</li>
              </div>
              <h3 className="position">{job.position}</h3>
              <p className="company-title">{job.company}</p>
              <p className="location">{job.location}</p>
            </StyledJobPreview>
          </Link>
        ))}
    </>
  );
};

export default JobPages;
