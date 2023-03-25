import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./css/AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";

const AvailableMeals = () => {
  // we need state in order re-render the page once the data is fetched from db
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("http://localhost:5555/food/items/menu");
      const responseData = await response.json(); // this will be an Object
      // we have to conver this response object to array

      const loaddedData = [];

      for (const key in responseData) {
        loaddedData.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      setMeals(loaddedData);
    };

    fetchMenu();
  }, []);
  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
