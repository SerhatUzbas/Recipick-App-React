import React, { useEffect, useState, useCallback } from "react";
import Content from "./Content";
import classes from "./Context.module.css";
import Modal from "./Modal";

const Context = () => {
  const [contFirst, setContFirst] = useState(false);
  const [contSecond, setContSecond] = useState(false);
  const [contThird, setContThird] = useState(false);
  const [contFourth, setContFourth] = useState(false);
  const [modalData, setModalData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/%23recipe_faad0db7e5b6db3744495c6429b1e04b?type=public&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d
            `
        );
        const rawData = await response.json();

        const data = {
          name: rawData.recipe.label,
          image: rawData.recipe.images.LARGE.url,
          ings: rawData.recipe.ingredients,
          cautions: rawData.recipe.cautions,
          time: rawData.recipe.totalTime,
        };

        setContFirst(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/%23recipe_9559557a0cc426dfd7d7aca79a0bce98?type=public&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d
            `
        );
        const rawData = await response.json();

        const data = {
          name: rawData.recipe.label,
          image: rawData.recipe.images.REGULAR.url,
          ings: rawData.recipe.ingredients,
          cautions: rawData.recipe.cautions,
          time: rawData.recipe.totalTime,
        };

        setContSecond(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/%23recipe_3c0698fd980817e1de6917ae115809e2?type=public&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d
            `
        );
        const rawData = await response.json();

        const data = {
          name: rawData.recipe.label,
          image: rawData.recipe.images.REGULAR.url,
          ings: rawData.recipe.ingredients,
          cautions: rawData.recipe.cautions,
          time: rawData.recipe.totalTime,
        };

        setContThird(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/%23recipe_190c2c3c856ca572c646ac0eee4f1f2f?type=public&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d
            `
        );
        const rawData = await response.json();

        const data = {
          name: rawData.recipe.label,
          image: rawData.recipe.images.REGULAR.url,
          ings: rawData.recipe.ingredients,
          cautions: rawData.recipe.cautions,
          time: rawData.recipe.totalTime,
        };

        setContFourth(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2/%23recipe_3c0698fd980817e1de6917ae115809e2?type=public&app_id=d184ae7d&app_key=a8034bbe68e975d548722a8835dd323d
            `
        );
        const rawData = await response.json();
        const data = {
          name: rawData.recipe.label,
          image: rawData.recipe.images.REGULAR.url,
          ings: rawData.recipe.ingredients,
          cautions: rawData.recipe.cautions,
          time: rawData.recipe.totalTime,
        };

        setContThird(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const setModal = useCallback((data) => {
    setModalData(data);
  }, []);

  const closeModal = () => {
    setModalData(false);
  };

  return (
    <React.Fragment>
      <h1 className={classes.title}>Recipes of Today</h1>
      <div className={classes.container}>
        <Content
          data={contFirst}
          modalData={modalData}
          setModal={setModal}
          closeModal={closeModal}
        />
        <Content
          data={contSecond}
          modalData={modalData}
          setModal={setModal}
          closeModal={closeModal}
        />
        <Content
          data={contThird}
          modalData={modalData}
          setModal={setModal}
          closeModal={closeModal}
        />
        <Content
          data={contFourth}
          modalData={modalData}
          setModal={setModal}
          closeModal={closeModal}
        />
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
};

export default Context;
