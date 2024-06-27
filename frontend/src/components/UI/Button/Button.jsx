import classes from "./button.module.css";
import { NavLink } from "react-router-dom";

function Button({
  children,
  Icon,
  to = "",
  styles = "",
  theme,
  text,
  box,
  size,
  textOnly,
  ...props
}) {
  const btnSizeClass = `button_${size}`;
  const btnThemeClass = `button_${theme}`;

  const btnClasses = `${classes.button_rounded} ${classes[btnSizeClass]} ${
    classes[btnThemeClass]
  } ${styles} ${text ? classes.text_effect : classes.box_effect}`;

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
  // return (
  //   <button className={btnClasses} {...props}>
  //     <NavLink
  //       to={to}
  //       className={({ isActive }) =>
  //         isActive ? classes.active_nav_link : undefined
  //       }
  //     >
  //       {children}
  //     </NavLink>
  //   </button>
  // );
}

export default Button;
