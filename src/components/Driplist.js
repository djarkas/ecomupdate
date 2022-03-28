import React from "react";
import CartButton from "./CartButton.js";
import Data from "../Drip.json";
import "../App.css";

const Driplist = () => {
  return (
    <>
      <h1 className="main-heading">The Drip</h1>
      <section className="container">
        {Data.map((cool) => {
          return (
            <section className="prod" key={cool.id}>
              <section className="look">
                <img className="look" src={cool.image} alt={cool.product} />
              </section>
              <section className="prod">
                <h2>{cool.product}</h2>
                <h3 >{cool.price}</h3>
                <h4 >{cool.description}</h4>

                <label htmlFor="type">Type:</label>
                <select name="type" id="type">
                  <option value="Tops">Tops</option>
                  <option value="Bottoms">Bottoms</option>
                  <option value="Hats">Hats</option>
                  <option value="Other">Other</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </section>
              <section className="button">
               
                <CartButton />
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Driplist;