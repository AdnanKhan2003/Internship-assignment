import classes from "./jobanalyticslist.module.css";

function JobAnalyticsListPage({ Icon, style = "", label, number }) {
  return (
    <li className={classes.analytics_list_container}>
      <span className={`${classes.analytics_list} ${style}`}>
        <span className={classes.label_wrapper}>
          {Icon}
          <p className={classes.label_wrapper}>{label}</p>
        </span>

        <p
          className={`${classes.analytics_label__number} ${classes.number_gap}`}
        >
          {number}
        </p>
      </span>
    </li>
  );
}

export default JobAnalyticsListPage;
