import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center py-5 mt-5 mx-auto">
                    <div className="inner-section">
                    <h2>Welcome to Meal Restaurant</h2>
                    <Link to="/restaurants">Explore Meals</Link>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Home;