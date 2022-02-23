import React from "react";
import ReactDOM from "react-dom";
import { BsFillClockFill } from "react-icons/bs";

import classes from "./Modal.module.css";
const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={props.onClose}></div>,
        portalElement
      )}

      {ReactDOM.createPortal(
        <div className={classes.container}>
          <img className={classes.image} src={props.image} alt='modalImage' />

          <div className={classes.cautions}>
            <p className={classes.tit}>Cautions:</p>
            {props.cautions.map((elem) => (
              <p className={classes.cautItems} key={Math.random().toString()}>
                {elem}
              </p>
            ))}
          </div>
          <div className={classes.time}>
            <BsFillClockFill />
            <p>{props.time} min</p>
          </div>
          <div className={classes.ingredients}>
            <div className={classes.ingList}>
              <h1 className={classes.title}>INGREDIENTS</h1>
              {props.ings.map((ing) => (
                <li key={Math.random().toString()}>{ing}</li>
              ))}
            </div>
          </div>
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
