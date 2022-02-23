import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./Form.module.css";

const Form = (props) => {
  const formik = useFormik({
    initialValues: {
      searchQuery: "",
    },
    validationSchema: Yup.object({
      searchQuery: Yup.string()
        .max(16, "Search query must be 16 character or less")
        .required("Required"),
    }),
    onSubmit: () => {
      props.search(formik.values.searchQuery);
    },
  });
  return (
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit}>
        <input
          id='searchQuery'
          name='searchQuery'
          type='text'
          placeholder='Search Recipe'
          onChange={formik.handleChange}
          value={formik.values.searchQuery}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
