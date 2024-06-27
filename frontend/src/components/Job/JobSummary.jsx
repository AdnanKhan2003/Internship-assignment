import classes from "./jobsummary.module.css";
import { FigmaIcon } from "../Ui icons/Figma";
import { AdobeIIcon } from "../Ui icons/AdobeI";
import { AdobeXIcon } from "../Ui icons/AdobeX";

function JobSummaryPage() {
  return (
    <div className={classes.job_summary_container}>
      <div className={classes.w_90}>
        <div className={classes.required_tags}>
          <h1 className="subtitle">Skills Required</h1>
          <ul>
            <li>
              <span className={classes.label_wrapper}>
                <FigmaIcon classes="margin_right_label"></FigmaIcon>
                Figma
              </span>
            </li>
            {/* <li>Figma</li> */}
            <li>
              <span className={classes.label_wrapper}>
                <AdobeIIcon classes="margin_right_label"></AdobeIIcon>
                Adobe Illustrator
              </span>
            </li>
            <li>
              <span className={classes.label_wrapper}>
                <AdobeXIcon classes="margin_right_label"></AdobeXIcon>
                Adobe XD
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.required_tags}>
          <h1 className="subtitle">Preferred Language</h1>
          <ul>
            <li className={classes.job_summary_answer}>English</li>
          </ul>
        </div>
        <div className={classes.required_tags}>
          <h1 className="subtitle">Type</h1>
          <ul>
            <li className={classes.job_summary_answer}>Full time</li>
          </ul>
        </div>
        <div className={classes.required_tags}>
          <h1 className="subtitle">Years of Experience</h1>
          <ul>
            <li className={classes.job_summary_answer}>
              3+ Years of Experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobSummaryPage;
