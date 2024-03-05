//import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import CartWidget from './components/CartWidget/CartWidget';
import './components/CartWidget/CartWidget.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/ItemListContainer.css';


function App() {
  return (
    <header>
   {/*  <Navbar message="Ale"/> */}
   <Navbar/>
   <CartWidget/>
   <ItemListContainer product="Logo" price="800"/>

    </header>
  );
}

export default App
