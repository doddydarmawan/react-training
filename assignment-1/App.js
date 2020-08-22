import React, { useState, useEffect, Component } from "react";
import './index.css';
import Navigation from './components/Navigation';
import NewArrivalHome from './components/NewArrivalHome';



function App() {
  return (
    <>
    {/* jsx style section */}
    <style jsx="true">{`
        .banner {
          width: 100%;
          height: 400px;
          box-shadow: 0px 4px 20px black;
        }
      `}</style>
    {/* banner section */}
    <div className="banner"></div>
    {/* navigation section */}
    <Navigation />
    

    {/* footer section */}
    <div className="footer"></div>
    </>
  );
}

export default App