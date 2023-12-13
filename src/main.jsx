import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header">IQ Pizza, Pizza from Iraq to the IQ</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
};

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt="pizza image" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>ingredients: {pizzaObj.ingredients}</p>
        <span className="price">{pizzaObj.price}</span>
      </div>
    </li>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const open = 15;
  const close = 21;
  const isOpen = hour >= open && hour <= close;
  return (
    <footer className="footer">
      {isOpen ? <p>We are open</p> : <p>We open at the close</p>}
      <button className="btn">Order</button>
    </footer>
  );
};

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'public/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'public/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'public/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'public/funghi.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'public/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'public/prosciutto.jpg',
    soldOut: false,
  },
];
