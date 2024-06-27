import classes from "./job.module.css";
import JobHeaderPage from "./JobHeader";
import JobAnalyticsPage from "./JobAnalytics";
import JobSummaryPage from "./JobSummary";

function JobPage() {
  return (
    <section className={classes.job_info_container}>
      <div className={classes.job_info_container}>
        <JobHeaderPage />
      </div>
      <div className={classes.job_analytics_container}>
        <JobAnalyticsPage />
      </div>
    </section>
  );
}

export default JobPage;
