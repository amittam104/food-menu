import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red" };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzasLength = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzasLength > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza PizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ PizzaObj }) {
  if (PizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={PizzaObj.photoName} alt={PizzaObj.name}></img>
      <div>
        <h3>{PizzaObj.name}</h3>
        <p>{PizzaObj.ingredients}</p>
        <span>{PizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 9;
  const closingHour = 21;
  const isOpen = hour >= openingHour && hour <= closingHour;

  console.log(isOpen);

  // if (hour >= openingHour && hour <= closingHour) alert("We are open!");
  // else alert("we are closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closingHour} />
      ) : (
        <p>
          We are happy to server you between {openingHour}:00 and {closingHour}
          :00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00 Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
