import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardImg } from "react-bootstrap";
import "./Meals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Meals = ({ meal }) => {
  return (
    <>
      <Card
        style={{
          width: "18rem",
          marginTop: "30px",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "14px",
          textAlign: "center",
        }}
      >
        <Card.Img variant="top" src={meal.strMealThumb} />
        <Card.Body>
          <Card.Title>Name: {meal.strMeal}</Card.Title>
          <Card.Text>{meal.strInstructions.slice(0, 50)}</Card.Text>
          <Link to={`/meal-details/${meal.idMeal}`}>EXPLORE FOOD</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Meals;
