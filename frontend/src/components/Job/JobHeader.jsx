import JobDescriptionPage from "./JobDescription";
import JobSummaryPage from "./JobSummary";
import classes from "./jobheader.module.css";
import LabelIcon from "../UI/LabelButton/LabelButton";
import CompanyPage from "../Company/Company.jsx";

import { DotIcon } from "../Ui icons/Dot";
import { LocationIcon } from "../Ui icons/Location";
import { CoinsIcon } from "../Ui icons/Coins";

function JobHeaderPage() {
  return (
    <div className={classes.flex_column}>
      <div>
        <div className={classes.job_header_container}>
          <div>
            <span className={classes.grouped_content}>
              <h1 className={classes.role}>Senior Product Designer</h1>
              <div className={classes.post_tag_group}>
                <p className={classes.job_post_date}>posted 3 days ago</p>
                {/* <LabelIcon classes="label_icon">Open</LabelIcon> */}
                <span className={classes.label_wrapper}>
                  <DotIcon classes="margin_right_label" />
                  Open
                </span>
              </div>
            </span>
          </div>
          {/* className={classes..label_wrapper_noborder} */}
          <div
            className={`${classes.grouped_content} ${classes.grouped_content_2}`}
          >
            <span className={classes.label_wrapper_noborder}>
              <LocationIcon classes="margin_right_label"></LocationIcon>
              Deleware, USA
            </span>
            <span className={classes.label_wrapper_noborder}>
              <CoinsIcon classes="margin_right_label"></CoinsIcon>
              $300k-$400k
            </span>
          </div>
        </div>
      </div>
      <JobSummaryPage />
      <JobDescriptionPage />
      <CompanyPage />
    </div>
  );
}

export default JobHeaderPage;
