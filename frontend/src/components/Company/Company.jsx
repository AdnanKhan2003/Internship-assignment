import classes from "./company.module.css";
import { AtlassianIcon } from "../Ui icons/Attlassian";

function CompanyPage() {
  return (
    <div>
      <div className={classes.company_wrapper}>
        <div>
          <span className={classes.grouped_content}>
            <p>
              <AtlassianIcon classes="margin_right" />
            </p>
            <p className={classes.company_name}>Atlassian</p>
          </span>
        </div>
        <div className={classes.flex}>
          <div className={classes.flex_wrapper}>
            <div className={classes.companay_info}>
              <h1 className={classes.company_title}>Company Size</h1>
              <p className={classes.company_title_points}>1k - 2k Employees</p>
            </div>
            <div className={classes.companay_info}>
              <h1 className={classes.company_title}>Sector</h1>
              <p className={classes.company_title_points}>
                Information Technology, Infrastructure
              </p>
            </div>
            <div className={classes.companay_info}>
              <h1 className={classes.company_title}>Founded in</h1>
              <p className={classes.company_title_points}>2019</p>
            </div>
          </div>
          <div className={classes.flex_wrapper}>
            <div className={classes.companay_info}>
              <h1 className={classes.company_title}>Type</h1>
              <p className={classes.company_title_points}>Private</p>
            </div>
            <div className={classes.companay_info}>
              <h1 className={classes.company_title}>Founding</h1>
              <p className={classes.company_title_points}>Bootstrapped</p>
            </div>
            <div className={classes.companay_info}>
              <h1 className={classes.company_title}>Founded by</h1>
              <p className={classes.company_title_points}>
                Scott Farquhar, Mike Cannon-Brookes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
