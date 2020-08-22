import { Link, useRouteMatch, useLocation } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import '../css/categoryPage.css';
import Image from './Image';

const products = [
    { id: "11", sku: "ak-47", name: "AK-47", price: "120000", category: "1", image:"ak"},
    { id: "21", sku: "m4-silent", name: "M4 Silent", price: "190000", category: "1", image:"m4.jpg"},
    { id: "31", sku: "glock-20", name: "Glock 20 Mag", price: "30000", category: "1", image:"glock.jpg" },
    { id: "41", sku: "five-seven", name: "Five Seven Bold", price: "40000", category: "1", image:"fiveseven.jpg" },
    { id: "51", sku: "ump-40", name: "UMP Austria", price: "70000", category: "1", image:"ump.jpg" },
    { id: "61", sku: "ak-47", name: "AK-47", price: "120000", category: "1", image:"ak"},
    { id: "71", sku: "m4-silent", name: "M4 Silent", price: "190000", category: "1", image:"m4.jpg"},
    { id: "81", sku: "glock-20", name: "Glock 20 Mag", price: "30000", category: "1", image:"glock.jpg" },
    { id: "91", sku: "five-seven", name: "Five Seven Bold", price: "40000", category: "1", image:"fiveseven.jpg" },
    { id: "101", sku: "ump-40", name: "UMP Austria", price: "70000", category: "1", image:"ump.jpg" },
    { id: "201", sku: "ak-47", name: "AK-47", price: "120000", category: "1", image:"ak"},
    { id: "314", sku: "m4-silent", name: "M4 Silent", price: "190000", category: "1", image:"m4.jpg"},
    { id: "402", sku: "glock-20", name: "Glock 20 Mag", price: "30000", category: "1", image:"glock.jpg" },
    { id: "500", sku: "five-seven", name: "Five Seven Bold", price: "40000", category: "1", image:"fiveseven.jpg" },
    { id: "601", sku: "ump-40", name: "UMP Austria", price: "70000", category: "1", image:"ump.jpg" },
    { id: "771", sku: "ak-47", name: "AK-47", price: "120000", category: "1", image:"ak"},
    { id: "881", sku: "m4-silent", name: "M4 Silent", price: "190000", category: "1", image:"m4.jpg"},
    { id: "991", sku: "glock-20", name: "Glock 20 Mag", price: "30000", category: "1", image:"glock.jpg" },
    { id: "1001", sku: "five-seven", name: "Five Seven Bold", price: "40000", category: "1", image:"fiveseven.jpg" }
  ];

function CategoryPage() {
    let query = new URLSearchParams(useLocation().search);
    let isQueryExist = query && query.get("productId");
    return (
        <>
        {!isQueryExist && (
          <ProductList />
        )}
        {isQueryExist && (
          <ProductPage />
        )}
        </>
    );
  }

function ProductList() {
    let query = new URLSearchParams(useLocation().search);
    let isQueryExist = query && query.get("productId");
    let { url } = useRouteMatch();
    return (
        <>
        <div className="category-wrap">  
            <ul>
                <div className="widget-wrap">
                    <div className="widget-block">
                    
                        {products.map((product, index) => (
                        <Link to={`${url}/product?productId=${product.id}&sku=${product.sku}&price=${product.price}&name=${product.name}`}>
                            <li key={index}>
                                <div className="widget-item">
                                <Image image={product.image}></Image>
                                </div>
                                <div className="widget-item-name">{product.name}</div>
                                <div className="widget-item-price">Rp. {product.price}</div>
                            </li>
                        </Link>
                        
                        ))}

                    </div>
                </div>
            </ul>
        </div>  
        </>
    );
}

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

export default CategoryPage;