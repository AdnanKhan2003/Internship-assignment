import { Link } from "react-router-dom";
import classes from "./subheader.module.css";
import Button from "../UI/Button/Button";

function SubHeaderPage() {
  return (
    <ul className={classes.subheader_list_container}>
      <li className={`${classes.subheader_list} ${classes.active_link}`}>
        Job Preview
      </li>
      <li className={classes.subheader_list}>Applications</li>
      <li className={classes.subheader_list}>Match</li>
      <li className={classes.subheader_list}>Messages</li>
    </ul>
  );
}

export default SubHeaderPage;
