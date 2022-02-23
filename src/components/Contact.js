import classes from "./Contact.module.css";
import { forwardRef } from "react";

const Contact = forwardRef(({ onBackClick }, ref) => {
  return (
    <div ref={ref} className={classes.container}>
      <a href='mailto:serhatuzbas@gmail.com' type='email'>
        Email : serhatuzbas@gmail.com
      </a>
      <a href='https://www.linkedin.com/in/serhatuzbas/'>
        Linkedin : linkedin.com/in/serhatuzbas/
      </a>
      <a href='https://github.com/SerhatUzbas'>
        Github: github.com/SerhatUzbas
      </a>
    </div>
  );
});

export default Contact;
