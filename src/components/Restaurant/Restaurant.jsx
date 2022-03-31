import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Restaurant = () => {

    const [searchText, setSearchText] = useState('');

    const [meals, setMeals] = useState([]);
    useEffect( ()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMeals(data.meals) 
            console.log('meals', meals)
        })
    }, [searchText])
    
    const searchFood = e =>{
        // setSearchText(e.target.value);
        alert()
    }
    return (
        <div>
        <Form className="d-flex">
                <FormControl
                onChange={searchFood}
                  type="search"
                  placeholder="Search food"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Food</Button>
              </Form>
            <h1>Meals Restaurant</h1>
        </div>
    );
};

export default Restaurant;