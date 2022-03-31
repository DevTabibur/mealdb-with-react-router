import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Image from "../../Images/404.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container py-5 my-4">
      <div className="row">
        <div className="col-md-6 order-2">
          <div className="inner-section d-flex align-items-center justify-content-center">
            <Link to="/" className="link mb-0">Go Back to Home</Link>
            <Link to="/contact" className=" link mt-0">Contact Us</Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="error-img-div w-100 order-1">
            <img className="error-img w-100" src={Image} alt="error__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
