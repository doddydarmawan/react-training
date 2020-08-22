import React from "react";
import { Switch, Route, Link, useLocation, useRouteMatch } from "react-router-dom";
import '../css/categoryPage.css';

function ProductPage() {
    let query = new URLSearchParams(useLocation().search);
    return (
      <>
        <div className="wrap">
            <div className="image-pdp">

            </div>
            <div className="info">
            <h2>sku: {query.get("sku")}</h2>
            <h2>name: {query.get("name")}</h2>
            <h2>price: {query.get("price")}</h2>
            </div>
        </div>
      </>  
    );
}

export default ProductPage;