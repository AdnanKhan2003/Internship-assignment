import Button from "../UI/Button/Button";
import JobAnalyticsListPage from "./JobAnalyticsList";
import classes from "./jobanalytics.module.css";
import { DustbinIcon } from "../Ui icons/Dustbin";
import { EditIcon } from "../Ui icons/Edit";
import { ApplicantsIcon } from "../Ui icons/Applicants";
import { MessagesIcon } from "../Ui icons/Messages";
import { MatchesIcon } from "../Ui icons/Matches";
import { EyeIcon } from "../Ui icons/Eye";

const JOB_ANALYTICS_DATA = [
  {
    id: "i1",
    icon: <ApplicantsIcon />,
    label: "Applicants",
    number: 400,
  },
  {
    id: "i2",
    icon: <MatchesIcon />,
    label: "Matches",
    number: 100,
  },
  {
    id: "i3",
    icon: <MessagesIcon fill="" />,
    label: "Messages",
    number: 147,
  },
  {
    id: "i4",
    icon: <EyeIcon />,
    label: "Views",
    number: 800,
  },
];

function JobAnalyticsPage({ styles = "" }) {
  return (
    <div className={classes.job_analytics_container}>
      <div className={classes.flex}>
        <Button size="sm" theme="light" styles={classes.analytics_btn}>
          <span className="button_items_linear">
            <DustbinIcon fill="#dc4a2d" classes="margin_right" />
            Delete Job
          </span>
        </Button>
        <Button size="sm" theme="dark" styles={classes.analytics_btn}>
          <span className="button_items_linear">
            <EditIcon classes="margin_right" />
            Edit Job
          </span>
        </Button>
      </div>

      <ul className={classes.job_analytics_list_container}>
        {JOB_ANALYTICS_DATA.map((list) => {
          return (
            <JobAnalyticsListPage
              key={list.id}
              style={list.id === "i1" ? classes.border_none : ""}
              Icon={list.icon}
              label={list.label}
              number={list.number}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default JobAnalyticsPage;
