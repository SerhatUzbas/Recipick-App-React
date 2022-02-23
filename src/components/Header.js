import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.containerr}>
      <div className={classes.logo}>
        <MdFastfood />
      </div>
      <div className={classes.menu}>
        <GiHamburgerMenu />
      </div>
      <div className={classes.nav}>
        <a onClick={props.onBackClick} className={classes.navItem} href='#asd'>
          Meals
        </a>
        <a onClick={props.onBackClick2} className={classes.navItem} href='#asd'>
          About
        </a>
        <a onClick={props.onBackClick3} className={classes.navItem} href='#asd'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
