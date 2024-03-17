import {Routes, Route} from 'react-router-dom';
import { Box }  from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products';
import Contact from './pages/Contact';
import CheckOut from './pages/CheckOut';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './contexts/CartContext';


function App() {



  return (
  <>
<CartProvider>
<Box className="w-100 h-100">
    <Navbar/>
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/productos" element={<Products/>}/>
         <Route path="/checkout" element={<CheckOut/>}/>
         <Route path="/contacto" element={<Contact/>}/>
         <Route path="/producto/:id" element={<ProductPage />} />
    </Routes>
  </Box>
  </CartProvider>
  </>
  );
}

export default App
