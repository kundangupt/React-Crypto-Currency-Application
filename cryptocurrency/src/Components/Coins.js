import React from "react";

import "./App.css";
function Coins({ name, icon, price, symbol }) {
  return (
    <>
    <div className="coin">
      <h1> Name: {name}</h1>
      <image src={icon}/>
      <h3> Price: {price}</h3>
      <h3> Symbol: {symbol}</h3>
    </div>
    </>
  );
}

export default Coins;