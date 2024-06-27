import classes from "./jobdescription.module.css";

function JobDescriptionPage() {
  return (
    <div className={classes.line}>
      <div className={classes.section_spacing}>
        <div>
          <h1 className={classes.about_job}>About the job</h1>
          <ol className={classes.about_job_points}>
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ol>
        </div>

        <div className={classes.about_job_points}>
          <h2 className={classes.about_job_points}>Benefits</h2>
          <ul className={classes.job_points_spacing}>
            <li className={classes.list_unordered}>Health insurance</li>
            <li className={classes.list_unordered}>Provident Fund</li>
          </ul>
        </div>
        <div>
          <h2 className={classes.about_job_points}>Schedule</h2>
          <ul className={classes.job_points_spacing}>
            <li className={classes.list_unordered}>Day Shift</li>
          </ul>
        </div>

        <div className={classes.about_job_points}>
          <h2 className={classes.about_job_points}>Supplemental pay types</h2>
          <ul className={classes.job_points_spacing}>
            <li className={classes.list_unordered}>Performance bonus</li>
            <li className={classes.list_unordered}>Yearly bonus</li>
          </ul>
        </div>
        <div className={classes.about_job_points}>
          <h2 className={classes.about_job_points}>Work Location: In person</h2>
          {/* <p className={classes.job_points_spacing}>In person</p> */}
        </div>
      </div>
    </div>
  );
}

export default JobDescriptionPage;
