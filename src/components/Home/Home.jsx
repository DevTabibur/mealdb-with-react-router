import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center mx-auto">
                    <h2>Welcome to Meal Restaurant</h2>
                    <button>Explore Meals</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Home;