import React from "react";
import classes from "./MealsSummary.module.css";

const mealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, delivered to you </h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a Delicious meal at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        by experinced chefs.
      </p>
    </section>
  );
};

export default mealsSummary;
