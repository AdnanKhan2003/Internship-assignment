import Button from "../UI/Button/Button";
import SubHeaderPage from "./SubHeader";
import HeaderMobileLayout from "./HeaderMobile";

import classes from "./header.module.css";

import { Link } from "react-router-dom";

import { BagIcon } from "../Ui icons/Bag";
import { MessagesIcon } from "../Ui icons/Messages";
import { PaymentsIcon } from "../Ui icons/Payments";
import { BellIcon } from "../Ui icons/Bell";
import { AtlassianCircleIcon } from "../Ui icons/AtlassianCircle";
import { ArrowDownIcon } from "../Ui icons/ArrowDown";
import { HamburgerIcon } from "../Ui icons/Hamburger";

function Header({ onClick, navIsOpen }) {
  function handleOpenMenu() {
    onClick();
  }

  return (
    <header>
      <nav className={classes.main_nav}>
        <Button
          size="lg"
          theme="main"
          box
          styles={`${classes.logo_size} ${classes.mobile_margin_cut}`}
        >
          Logo
        </Button>
        <div className={classes.middle_nav}>
          <Button size="lg" box theme="dark" Icon="">
            <span className="button_items_linear">
              <BagIcon classes="margin_right" />
              Jobs
            </span>
          </Button>
          <Button
            size="lg"
            text
            theme="text"
            styles={classes.middle_nav_text_links}
          >
            <span className="button_items_linear">
              <MessagesIcon
                classes="margin_right"
                fill="rgba(180, 180, 180, 0.4)"
              />
              Message
            </span>
          </Button>
          <Button
            size="lg"
            text
            theme="text"
            styles={classes.middle_nav_text_links}
          >
            <span className="button_items_linear">
              <PaymentsIcon
                classes="margin_right"
                fill="rgba(180, 180, 180, 0.4)"
              />
              Payment
            </span>
          </Button>
        </div>
        <div className={classes.right_nav}>
          <span className={classes.links_wrapper}>
            <Button theme="text" styles={classes.d_none}>
              <BellIcon />
            </Button>
            <Button theme="text" styles={classes.d_none}>
              <AtlassianCircleIcon />
            </Button>
            <Button theme="text" styles={classes.d_none}>
              <ArrowDownIcon />
            </Button>
          </span>
        </div>
        <Button
          theme="text"
          styles={classes.render_mobile}
          onClick={handleOpenMenu}
        >
          <HamburgerIcon />
        </Button>
        {/* mobile */}
        <HeaderMobileLayout onClick={onClick} navIsOpen={navIsOpen} />
      </nav>
      <SubHeaderPage />
    </header>
  );
}

export default Header;
