import {Link, useRouteMatch } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import '../css/newArrival.css';
import Image from './Image';

const products = [
    { id: "1", sku: "ak-47", name: "AK-47", price: "120000", category: "new arrival", image:"ak"},
    { id: "2", sku: "m4-silent", name: "M4 Silent", price: "190000", category: "new arrival", image:"m4.jpg"},
    { id: "3", sku: "glock-20", name: "Glock 20 Mag", price: "30000", category: "new arrival", image:"glock.jpg" },
    { id: "4", sku: "five-seven", name: "Five Seven Bold", price: "40000", category: "new arrival", image:"fiveseven.jpg" },
    { id: "5", sku: "ump-40", name: "UMP Austria", price: "70000", category: "new arrival", image:"ump.jpg" }
  ];

  const categories = [
    { id: "2", name: "Best Seller"},
  ];

  function BestSellerHome() {
    let { url } = useRouteMatch();
    
    useEffect(() => {
      console.log('products: ', products);
  
    }, [products])
  
    return (
      <div className="new-arrival">  
        <ul>
          <div className="widget-wrap">
            <div className="widget-block">
              
                {products.map((product, index) => (
                  <li key={index}>
                    <div className="widget-item">
                      <Image image={product.image}></Image>
                    </div>
                    <div className="widget-item-name">{product.name}</div>
                    <div className="widget-item-price">Rp. {product.price}</div>
                  </li>
                ))}
                {categories.map((category, index) => (
                  <Link to={`${url}category/${category.id}`}>See More..</Link>
                ))} 

            </div>
          </div>
        </ul>
      </div>
      
    );
  }


export default BestSellerHome;