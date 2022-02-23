import React from "react";
import classes from "./MealsList.module.css";

const MealsList = (props) => {
  return (
    <React.Fragment>
      <select className={classes.opt} onChange={props.getDataOpt}>
        <option></option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Snack</option>
        <option>Teatime</option>
      </select>
      <ul className={classes.list}>
        <li className={classes.listTitle}>MEAL TYPES</li>
        <li className={classes.listitem} onClick={props.getData}>
          Breakfast
        </li>
        <li className={classes.listitem} onClick={props.getData}>
          Lunch
        </li>
        <li className={classes.listitem} onClick={props.getData}>
          Dinner
        </li>
        <li className={classes.listitem} onClick={props.getData}>
          Snack
        </li>
        <li className={classes.listitem} onClick={props.getData}>
          Teatime
        </li>
      </ul>
    </React.Fragment>
  );
};

export default MealsList;
