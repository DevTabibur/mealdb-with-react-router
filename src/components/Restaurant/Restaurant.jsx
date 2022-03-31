import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Meals from "../Meals/Meals";
import "./Restaurant.css";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  const searchFood = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <div className="form-div">
              <h2 className="text-center mb-3">Find your Favorite Food</h2>
              <h2 className="text-center mb-3">
                Results found: {meals.length}
              </h2>

              <Form className="d-flex">
                <FormControl
                  onChange={searchFood}
                  type="search"
                  placeholder="Search food"
                  className="me-2 w-75 mx-auto"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="w-25 mx-auto">
                  Search Food
                </Button>
              </Form>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {meals.map((meal) => (
            <Meals key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Restaurant;
