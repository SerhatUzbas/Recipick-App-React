import { forwardRef } from "react";
import classes from "./About.module.css";
const About = forwardRef(({ onBackClick }, ref) => {
  return (
    <div ref={ref} className={classes.container}>
      <h1 className={classes.title}>About</h1>
      <h3 className={classes.text}>
        Recipick is a React app that enables you find a recipe you want. Project
        is created by Serhat Uzbaş.
      </h3>
    </div>
  );
});

export default About;
