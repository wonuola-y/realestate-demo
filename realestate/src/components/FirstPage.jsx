import React from "react";

const List = [
  {
    id: 1,
    img: "home",
    h1: "Buy a home",
    p: "Find your place with an immersive photo experience and the most listings",
  },
  {
    id: 2,
    img: "home2",
    h1: "Sell A House",
    p: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
  },
  {
    id: 3,
    img: "home3",
    h1: "Rent A House",
    p: "Discover a place that checks all of your boxes.Filter your rental search, and find exactly what you’re looking for..",
  },
];
export default function FirstPage() {
  return (
    <div className="first-container">
      <div>Step 1 of 2</div>
      <h4>I want to</h4>
      <div className="card-container">
        {List.map((item, index) => (
          <div key={index} className="card">
            <img
            className="hero-img"
              src={require("./tools/" + item.img + ".svg")}
              alt="home" 
            />
            <h1>{item.h1}</h1>
            
            <p>{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
