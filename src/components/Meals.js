import Form from "./Form";
import React, { useState, forwardRef } from "react";
import AvailableMeals from "./AvailableMeals";
import classes from "./Meals.module.css";
import MealsList from "./MealsList";
import Modal from "./Modal";

const Meals = forwardRef(({ onBackClick }, ref) => {
  const [mealsData, setMealData] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchingData = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d&mealType=${e.target.textContent}`
    );
    const data = await response.json();
    const changedData = data.hits.map((obj) => ({
      name: obj.recipe.label,
      image: obj.recipe.images.REGULAR.url,
      ings: obj.recipe.ingredientLines,
      time: obj.recipe.totalTime,
      cautions: obj.recipe.cautions,
    }));

    setIsLoading(false);
    setMealData(changedData);
  };

  const fetchingDataWithOpt = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d&mealType=${e.target.value}`
    );
    const data = await response.json();
    const changedData = data.hits.map((obj) => ({
      name: obj.recipe.label,
      image: obj.recipe.images.REGULAR.url,
      ings: obj.recipe.ingredientLines,
      time: obj.recipe.totalTime,
      cautions: obj.recipe.cautions,
    }));

    setIsLoading(false);
    setMealData(changedData);
  };

  const searchData = async function (query) {
    setIsLoading(true);
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d`
    );
    const data = await response.json();
    const changedData = data.hits.map((obj) => ({
      name: obj.recipe.label,
      image: obj.recipe.images.REGULAR.url,
      ings: obj.recipe.ingredientLines,
      time: obj.recipe.totalTime,
      cautions: obj.recipe.cautions,
    }));
    setIsLoading(false);
    setMealData(changedData);
  };

  const setModalsData = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(false);
  };

  const isLoadingMessage = (
    <div className={classes.ldsellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
  const errMessage = (
    <p className={classes.err}>
      There is no result for this query. Please try another one
    </p>
  );

  return (
    <React.Fragment>
      <div ref={ref} className={classes.container}>
        <Form search={searchData} />
        <MealsList getData={fetchingData} getDataOpt={fetchingDataWithOpt} />

        {isLoading && isLoadingMessage}
        {!isLoading &&
          mealsData &&
          (mealsData.length === 0 ? (
            errMessage
          ) : (
            <AvailableMeals mealsData={mealsData} setModal={setModalsData} />
          ))}
      </div>
      {modalData && (
        <Modal
          onClose={closeModal}
          image={modalData.image}
          cautions={modalData.cautions}
          ings={modalData.ings}
          time={modalData.time}
        />
      )}
    </React.Fragment>
  );
});
export default Meals;
