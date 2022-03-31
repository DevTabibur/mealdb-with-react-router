// @ts-nocheck
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "./MealDetails.css";
import Spinner from 'react-spinners';

const MealDetails = () => {
  const id = useParams();
  const [loading, setLoading] = useState(false);

  const [mealDetails, setMealDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals[0]));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container py-5 mb-4">
          <div className="row">
            <div className="col-md-5 gx-4 justify-content-center align-items-center mt-5">
              <div className="meal-details-img w-100">
                <img
                  className="meal-picture w-100 rounded-3"
                  src={mealDetails.strMealThumb}
                  alt="meal__picture"
                />
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 gx-4">
              <h2>Details of {mealDetails.strMeal} Food</h2>
              <hr />
              <h5>Category: {mealDetails.strCategory}</h5>
              <h5>Country: {mealDetails.strArea}</h5>
              <h5>Main Ingredients: {mealDetails.strTags}</h5>
              <p>
                <h5>Making Instructions:</h5> {mealDetails.strInstructions}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MealDetails;
