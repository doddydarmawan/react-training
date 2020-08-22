import React, { useState, useEffect, Component } from "react";
import '../index.css';
// import Navigation from './components/Navigation';
import NewArrivalHome from './NewArrivalHome';
import BestSellerHome from './BestSellerHome';


function Homepage() {
  return (
    <>
        {/* jsx style section */}
        <style jsx="true">{`

        .new-arrival-heading {
        margin-top: 30px;
        margin-left: 20px;
        }

        .star-logo {
        height: 45px;
        width: 50px;
        }

        .new-arrival {
        margin-left: 60px;
        padding-top: 0px;
        width: 300px;
        font-size: 40px;
        }

        .category-wrapper {
            margin-bottom: 30px;
        }

        `}</style>

        {/* New Arrival section */}
        <div className="category-wrapper">
            <div className="new-arrival-heading">
                <div className="star-logo">
                    <p className="new-arrival">New Arrival</p> 
                </div>
            </div>
            <NewArrivalHome />
        </div>
        {/* Best Seller section */}
        <div className="category-wrapper">
            <div className="new-arrival-heading">
                <div className="star-logo">
                    <p className="new-arrival">Best Seller</p> 
                </div>
            </div>
            <BestSellerHome />
        </div>
    </>
        );
}

export default Homepage;