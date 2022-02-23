import React from "react";
import classes from "./Content.module.css";

const Content = (props) => {
  if (props.data) {
    return (
      <React.Fragment>
        <div
          onClick={() => props.setModal(props.data)}
          style={{ backgroundImage: `url(${props.data.image})` }}
          className={classes.content}
        >
          <p className={classes.name}>{props.data.name}</p>
        </div>
      </React.Fragment>
    );
  }
  return <div></div>;
};

export default Content;
