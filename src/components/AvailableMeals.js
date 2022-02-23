import classes from "./AvailableMeals.module.css";
import Content from "./Content";

const AvailableMeals = (props) => {
  return (
    <div className={classes.container}>
      {props.mealsData &&
        props.mealsData.map((meal) => (
          <Content
            key={Math.random().toString()}
            data={meal}
            setModal={props.setModal}
          />
        ))}
    </div>
  );
};

export default AvailableMeals;
