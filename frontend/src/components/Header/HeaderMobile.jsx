import Button from "../UI/Button/Button";
import classes from "./headermobile.module.css";

import { BagIcon } from "../Ui icons/Bag";
import { BellIcon } from "../Ui icons/Bell";
import { AtlassianCircleIcon } from "../Ui icons/AtlassianCircle";
import { ArrowDownIcon } from "../Ui icons/ArrowDown";
import { CloseIcon } from "../Ui icons/Close";
import { MessagesIcon } from "../Ui icons/Messages";
import { PaymentsIcon } from "../Ui icons/Payments";

export default function HeaderMobileLayout({ onClick, navIsOpen }) {
  function handleCloseNav() {
    navIsOpen && onClick();
  }

  return (
    <section
      className={`${classes.mobile_nav_container} ${
        navIsOpen ? classes.nav_open : classes.nav_close
      }`}
    >
      <nav className={classes.main_nav}>
        <div className={classes.mobile_nav_header}>
          <Button size="lg" theme="main" styles={classes.logo_size}>
            Logo
          </Button>
          <div className="right_nav">
            <span className={classes.links_wrapper}>
              <Button theme="text">
                <BellIcon />
              </Button>
              <Button theme="text">
                <AtlassianCircleIcon />
              </Button>
              <Button theme="text">
                <ArrowDownIcon />
              </Button>
              <Button
                theme="text"
                styles={classes.render_mobile}
                onClick={handleCloseNav}
              >
                <CloseIcon fill="black" />
              </Button>
            </span>
          </div>
        </div>
        <div className={classes.middle_nav}>
          <Button size="lg" theme="dark" Icon="">
            <span className="button_items_linear">
              <BagIcon classes="margin_right" />
              Jobs
            </span>
          </Button>
          <Button size="lg" theme="text" styles={classes.middle_nav_text_links}>
            <span className="button_items_linear">
              <MessagesIcon
                classes="margin_right"
                fill="rgba(180, 180, 180, 0.4)"
              />
              Message
            </span>
          </Button>
          <Button size="lg" theme="text" styles={classes.middle_nav_text_links}>
            <span className="button_items_linear">
              <PaymentsIcon
                classes="margin_right"
                fill="rgba(180, 180, 180, 0.4)"
              />
              Payment
            </span>
          </Button>
        </div>
      </nav>
    </section>
  );
}
