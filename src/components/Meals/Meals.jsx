import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardImg } from "react-bootstrap";
import "./Meals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Meals = ({meal}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={meal.strMealThumb} />
        <Card.Body>
          <Card.Title>Name: {meal.strMeal}</Card.Title>
          <Card.Text>
          {meal.strInstructions.slice(0, 50)}

          </Card.Text>
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Meals;
