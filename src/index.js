import React from "react";
import ReactDOM from "react-dom";
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
  //   const style = { color: "red", fontSize: "40px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style} className="header">
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="pizzas">
            {pizzaData.map((item1) => (
              <Pizza itemObj={item1} key={item1.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're are still working on our menu. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="./pizzas/margherita.jpg"
        price={10}
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="./pizzas/focaccia.jpg"
        price={6}
      /> */}
    </main>
  );
}

function Pizza({ itemObj }) {
  //   console.log(props);

  // Early return (Use only if you no need to render full component)
  // Use ternary if only specific peice needs not be rendered.
  //   if (itemObj.soldOut) return null;

  return (
    <li className={`pizza ${itemObj.soldOut ? "sold-out" : ""}`}>
      <img src={itemObj.photoName} alt={itemObj.name} />
      <div>
        <h3>{itemObj.name}</h3>
        <p>{itemObj.ingredients}</p>
        <span>{itemObj.soldOut ? "SOLD OUT" : itemObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  //   console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're are open");
  //   } else {
  //     alert("We're closed");
  //   }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} and {closeHour}.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <section className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </section>
  );
}

// React 18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// Lower version
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
